# Webkul docs MCP server

A Model Context Protocol server exposing the documentation at
wpdoc.webkul.com over Streamable HTTP. Read-only and unauthenticated, because
everything it serves is already public.

Tools: `search_webkul_documentation`, `get_webkul_documentation_page`,
`list_webkul_documentation_pages`, `list_webkul_plugin_guides` — the same four
the browser-side `webmcp.js` registers, backed by the same live URLs.

## Why this is not part of the static site

GitHub Pages serves files, not request handlers, so it cannot host an MCP
endpoint. That is also why `/.well-known/mcp/server-card.json` is not published
by default: a card advertises a transport endpoint, and pointing agents at a
URL that answers nothing is worse than publishing no card at all.

## Deploy

```sh
cd mcp-server
npx wrangler deploy
```

Then publish the card from the repo root, using the URL wrangler prints:

```sh
MCP_ENDPOINT=https://webkul-docs-mcp.<subdomain>.workers.dev/mcp node build-root-pages.mjs
git add .well-known/mcp && git commit -m "Publish MCP server card" && git push
```

## Verify before publishing the card

```sh
curl -s -X POST https://<your-worker>/mcp \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}' | jq '.result.tools[].name'
```
