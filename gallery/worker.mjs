const width = 64;
const rowBytes = width * 4;
const skinBytes = width * rowBytes;
const pageSize = 24;
const skinPath = /^\/skins\/([a-f0-9]{64})\.png$/;
const cursorPattern = /^(\d{1,12})\.([a-f0-9]{64})$/;

function pngChunk(name, data) {
  const chunk = new Uint8Array(12 + data.length);
  const view = new DataView(chunk.buffer);
  view.setUint32(0, data.length);
  chunk.set(new TextEncoder().encode(name), 4);
  chunk.set(data, 8);
  let crc = 0xffffffff;
  for (const byte of chunk.subarray(4, 8 + data.length)) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) crc = (crc >>> 1) ^ ((crc & 1) ? 0xedb88320 : 0);
  }
  view.setUint32(8 + data.length, ~crc);
  return chunk;
}

async function encodePng(pixels) {
  const scanlines = new Uint8Array(width * (rowBytes + 1));
  for (let row = 0; row < width; row += 1) {
    scanlines.set(pixels.subarray(row * rowBytes, (row + 1) * rowBytes), row * (rowBytes + 1) + 1);
  }
  const stream = new Blob([scanlines]).stream().pipeThrough(new CompressionStream('deflate'));
  const compressed = new Uint8Array(await new Response(stream).arrayBuffer());
  return new Blob([
    new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]),
    pngChunk('IHDR', new Uint8Array([0, 0, 0, width, 0, 0, 0, width, 8, 6, 0, 0, 0])),
    pngChunk('IDAT', compressed),
    pngChunk('IEND', new Uint8Array()),
  ]).arrayBuffer();
}

async function readPixels(body) {
  if (!body) return null;
  const reader = body.getReader();
  const pixels = new Uint8Array(skinBytes);
  let offset = 0;
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      if (offset + value.length > skinBytes) {
        void reader.cancel().catch(() => {});
        return null;
      }
      pixels.set(value, offset);
      offset += value.length;
    }
  } finally {
    reader.releaseLock();
  }
  if (offset !== skinBytes) return null;

  let visibleFace = false;
  for (let y = 8; y < 16; y += 1) {
    for (let x = 8; x < 16; x += 1) {
      if (pixels[(y * width + x) * 4 + 3]) visibleFace = true;
    }
  }
  if (!visibleFace) return null;
  for (let i = 0; i < pixels.length; i += 4) {
    if (!pixels[i + 3]) pixels.fill(0, i, i + 3);
  }
  return pixels;
}

async function listSkins(db, cursor, headers) {
  const before = cursor && cursorPattern.exec(cursor);
  if (cursor !== null && !before) return Response.json({ error: 'Invalid gallery page.' }, { status: 400, headers });
  const sort = 'ORDER BY created_at DESC, id DESC LIMIT ?';
  const query = before
    ? db.prepare(`SELECT id, created_at FROM skins WHERE (created_at, id) < (?, ?) ${sort}`).bind(Number(before[1]), before[2], pageSize + 1)
    : db.prepare(`SELECT id, created_at FROM skins ${sort}`).bind(pageSize + 1);
  const { results } = await query.all();
  const items = results.slice(0, pageSize);
  const last = items.at(-1);
  const next = results.length > pageSize ? `${last.created_at}.${last.id}` : null;
  return Response.json({ items, next }, { headers });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const picture = skinPath.exec(url.pathname);
    const collection = url.pathname === '/skins';
    if (!collection && !picture) return new Response('Not found', { status: 404 });

    const origin = request.headers.get('Origin');
    const fromCreator = origin && origin === env.CREATOR_ORIGIN;
    const headers = new Headers({ 'X-Content-Type-Options': 'nosniff' });
    if (request.method === 'GET') {
      headers.set('Access-Control-Allow-Origin', '*');
    } else {
      headers.set('Vary', 'Origin');
      if (fromCreator) headers.set('Access-Control-Allow-Origin', origin);
    }
    const error = (message, status) => Response.json({ error: message }, { status, headers });

    if (request.method === 'OPTIONS' && collection && fromCreator) {
      headers.set('Access-Control-Allow-Methods', 'POST');
      headers.set('Access-Control-Allow-Headers', 'Content-Type');
      return new Response(null, { status: 204, headers });
    }

    try {
      if (request.method === 'GET' && collection) return await listSkins(env.DB, url.searchParams.get('before'), headers);
      if (request.method === 'GET' && picture) {
        const png = await env.DB.prepare('SELECT png FROM skins WHERE id = ?').bind(picture[1]).first('png');
        if (!png) return error('Skin not found.', 404);
        headers.set('Content-Type', 'image/png');
        headers.set('Cache-Control', 'public, max-age=300');
        if (url.searchParams.get('download') === '1') {
          headers.set('Content-Disposition', `attachment; filename="plushify-${picture[1].slice(0, 12)}.png"`);
        }
        return new Response(new Uint8Array(png), { headers });
      }
      if (request.method !== 'POST' || !collection) return error('Method not allowed.', 405);
      if (!fromCreator) return error('Uploads must come from Plushify.', 403);
      if (request.headers.get('Content-Type') !== 'application/octet-stream') return error('Unsupported skin format.', 415);
      const ip = request.headers.get('CF-Connecting-IP') ?? 'local';
      if (!(await env.UPLOADS.limit({ key: ip })).success) {
        headers.set('Retry-After', '60');
        return error('Too many uploads. Try again in a minute.', 429);
      }
      const pixels = await readPixels(request.body);
      if (!pixels) return error('Expected a 64 × 64 skin with a visible face.', 400);
      const hash = new Uint8Array(await crypto.subtle.digest('SHA-256', pixels));
      const id = Array.from(hash, (byte) => byte.toString(16).padStart(2, '0')).join('');
      const png = await encodePng(pixels);
      const result = await env.DB.prepare('INSERT INTO skins (id, png) VALUES (?, ?) ON CONFLICT(id) DO NOTHING').bind(id, png).run();
      return Response.json({ id }, { status: result.meta.changes ? 201 : 200, headers });
    } catch {
      return error('Gallery temporarily unavailable.', 503);
    }
  },
};
