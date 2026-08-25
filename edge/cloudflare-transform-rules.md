# Cloudflare edge configuration for wpdoc.webkul.com

Four agent-readiness gaps cannot be closed from this repository, because they
are **response headers** and **negotiated responses**. GitHub Pages serves
files and does not let the origin set custom headers — the `_headers` file in
this repo is deployed and readable at `/_headers`, yet none of its directives
appear on any response.

The zone is already proxied through Cloudflare (`server: cloudflare`, `cf-ray`
present) and Cloudflare is already injecting headers here — `content-signal`,
`x-markdown-tokens`, and `x-original-tokens` all arrive from the edge. So the
capability exists; it needs one rule.

## 1. Link header (RFC 8288) — closes `linkHeaders`

**Rules → Transform Rules → Modify Response Header → Create rule**

- Name: `Agent discovery Link header`
- If: `Hostname equals wpdoc.webkul.com`
- Then: **Set static** → Header name `Link` → value (one line):

```
</.well-known/api-catalog>; rel="api-catalog", </openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json;version=3.1", </llms.txt>; rel="service-doc"; type="text/markdown", </.well-known/ai-catalog.json>; rel="describedby"; type="application/json"
```

All four relations are IANA-registered: `api-catalog` (RFC 9727),
`service-desc` and `service-doc` (RFC 8631), `describedby` (W3C).

Scope it to HTML if preferred, with the expression editor:

```
http.host eq "wpdoc.webkul.com" and not http.request.uri.path matches "\\.(js|css|png|webp|svg|ico|xml|txt|md|json)$"
```

## 2. `Vary: Accept` on HTML — closes acceptmarkdown.com compliance

The markdown variant already returns `vary: Accept-Encoding, accept`; the HTML
variant returns only `vary: Accept-Encoding`. Without `Accept` in `Vary`, a
shared cache can hand an agent the HTML variant it cached for a browser.

Same rule type, **Set static** → header `Vary` → value:

```
Accept, Accept-Encoding
```

Apply to HTML responses. Do **not** apply it to `/assets/*` — those are
immutable, content-hashed files and an extra cache dimension only wastes cache.

## 3. Markdown body on 404 — upgrades `Agent-friendly 404s` from partial

`/404.html` already carries recovery links (docs index, llms.txt, sitemap), but
it is HTML even when the client sends `Accept: text/markdown`. A Worker can
return the markdown twin that already exists at
`/woocommerce-marketplace/404.md`:

```js
export default {
  async fetch(request, env) {
    const res = await fetch(request);
    if (res.status !== 404) return res;
    const accept = request.headers.get("Accept") || "";
    if (!/\btext\/markdown\b/i.test(accept)) return res;
    const md = await fetch("https://wpdoc.webkul.com/woocommerce-marketplace/404.md");
    return new Response(await md.text(), {
      status: 404,
      headers: { "Content-Type": "text/markdown; charset=utf-8", Vary: "Accept" },
    });
  },
};
```

## 4. `Content-Type` for the API catalog — RFC 9727 conformance

RFC 9727 asks for `application/linkset+json` on `/.well-known/api-catalog`.
GitHub Pages types by file extension, so the extensionless file is served as
`application/octet-stream`. (The scanner passes it regardless, so this is
conformance polish, not a failing check.)

**Set static** → header `Content-Type` → `application/linkset+json`, with:

```
http.request.uri.path eq "/.well-known/api-catalog"
```

## Verify after applying

```sh
curl -sD - -o /dev/null https://wpdoc.webkul.com/ | grep -i '^link:'
curl -sD - -o /dev/null https://wpdoc.webkul.com/woocommerce-marketplace/ | grep -i '^vary:'
curl -s -o /dev/null -w '%{content_type}\n' https://wpdoc.webkul.com/.well-known/api-catalog
curl -s -H 'Accept: text/markdown' https://wpdoc.webkul.com/nope | head -3
```
