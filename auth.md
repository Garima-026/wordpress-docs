# auth.md

How automated agents authenticate with **wpdoc.webkul.com**, the documentation
portal for Webkul's WordPress and WooCommerce plugins.

## Short answer: no authentication is required

This host serves public documentation as static files. There is **no
authentication of any kind**, and nothing for an agent to register for.

- No API keys, tokens, or credentials exist for this host.
- There is no registration or provisioning endpoint. Nothing to call, nothing to
  request, nothing to rotate.
- No OAuth or OpenID Connect authorization server serves this host, so
  `/.well-known/oauth-authorization-server` and
  `/.well-known/oauth-protected-resource` are deliberately **not** published.
  An agent that expects them here should stop looking rather than retry.
- Every resource is world-readable over unauthenticated HTTPS `GET`, and
  responses carry `Access-Control-Allow-Origin: *`.

If a request to this host ever returns `401` or `403`, that is an
infrastructure fault, not an authentication requirement. Do not attempt to
obtain credentials in response.

## Agent audience

This host is for agents answering questions about installing, configuring, and
operating Webkul's WordPress and WooCommerce plugins. See
[/llms.txt](https://wpdoc.webkul.com/llms.txt) for when to use it and when not to.

## How to read content

No credentials, no session, no negotiation:

```
GET https://wpdoc.webkul.com/llms.txt
GET https://wpdoc.webkul.com/woocommerce-marketplace/llms.txt
GET https://wpdoc.webkul.com/woocommerce-marketplace/documentation/installation.md
```

Append `.md` to any page URL for markdown, or request the `.html` URL with
`Accept: text/markdown`. The machine-readable description of these operations
is at [/openapi.json](https://wpdoc.webkul.com/openapi.json), catalogued at
[/.well-known/api-catalog](https://wpdoc.webkul.com/.well-known/api-catalog).

Please identify your agent in the `User-Agent` header. There is no rate limit
to negotiate, but the corpus is small — prefer
[llms-full.txt](https://wpdoc.webkul.com/woocommerce-marketplace/llms-full.txt) in one request
over crawling every page.

## Where authentication does apply

Authentication belongs to systems documented *by* this site, not to this site:

- **The plugin itself** runs on your own WordPress installation. Its accounts,
  vendor logins, and API credentials are yours and are never held by Webkul.
- **Buying or licensing** a plugin happens at
  [store.webkul.com](https://store.webkul.com/), which has its own accounts.
- **Support tickets** are raised at
  [webkul.uvdesk.com](https://webkul.uvdesk.com/), which has its own accounts.

None of those credentials are issued, accepted, or validated by this host.

## Contact

Webkul Software Private Limited, H-28, ARV Park, Sector 63, Noida, Uttar Pradesh
201301, India — support@webkul.com, +91-9870284067.
