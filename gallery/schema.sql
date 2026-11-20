CREATE TABLE IF NOT EXISTS skins (
  id TEXT PRIMARY KEY NOT NULL CHECK (length(id) = 64),
  png BLOB NOT NULL CHECK (length(png) BETWEEN 60 AND 20000),
  created_at INTEGER NOT NULL DEFAULT (unixepoch())
) STRICT;

CREATE INDEX IF NOT EXISTS skins_newest ON skins (created_at DESC, id DESC);
