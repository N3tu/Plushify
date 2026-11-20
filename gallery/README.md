# Plushify gallery service

The site runs on GitHub Pages. This Cloudflare Worker and its D1 database store the public skin gallery. The creator stays usable in private mode while the gallery is unconnected. Visitors do not need a GitHub or Cloudflare account.

## Set up in the browser

1. Upload `docs/` and `gallery/` from the web upload bundle to the repository root. Also upload the updated `README.md`, `LICENSE.md` and `skins/`.
2. In the [Cloudflare dashboard](https://dash.cloudflare.com/), create a D1 database named `plushify-skins`. Run the statements from [schema.sql](schema.sql) in its SQL console. Copy the database ID.
3. Edit [wrangler.toml](wrangler.toml) in GitHub. Replace `REPLACE_WITH_D1_DATABASE_ID` with that ID, then commit the change.
4. In Cloudflare Workers & Pages, create a Worker named `plushify-gallery` from the Plushify GitHub repository on branch `main`. Set **Root directory** to `gallery`, leave **Build command** empty, and set **Deploy command** to `npx wrangler deploy`. Confirm access only to the Plushify repository when connecting GitHub. [Workers Builds settings](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)
5. Visit the Worker address followed by `/skins`. A new gallery returns `{"items":[],"next":null}`.
6. In GitHub, edit `docs/gallery-config.json`. Put the Worker origin in `api`, for example `https://plushify-gallery.example.workers.dev`, and commit. If you deploy the site via the Vite GitHub Actions workflow, edit `website/public/gallery-config.json` instead.

The Workers Free plan includes D1 with usage limits. See the [D1 pricing and limits](https://developers.cloudflare.com/d1/platform/pricing/). The Worker address and D1 database ID are public configuration values. The site contains no write token or private key.

## Remove a skin

Copy the full identifier from a gallery download URL. In the D1 console, verify the intended row before deleting it. Replace `FULL_SKIN_ID` with the 64 hexadecimal characters from the URL.

```sql
SELECT id, created_at FROM skins WHERE id = 'FULL_SKIN_ID';
DELETE FROM skins WHERE id = 'FULL_SKIN_ID';
```

Gallery images can remain in caches for up to five minutes. Copies already downloaded by visitors may remain available.

## Data handling

Uploads contain exactly 64 × 64 RGBA pixels. The Worker validates size and visible face, reconstructs a PNG and uses a pixel hash to avoid duplicates. The upload route accepts the configured creator origin and uses a Cloudflare rate-limit binding. The public list and PNG routes need no credentials.
