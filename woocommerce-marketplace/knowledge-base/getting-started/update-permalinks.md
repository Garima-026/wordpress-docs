---
title: Do I need to update permalinks?
source: https://wpdoc.webkul.com/woocommerce-marketplace/knowledge-base/getting-started/update-permalinks.html
---

# Do I need to update permalinks?

**Yes, it's mandatory.** The plugin adds vendor, shop, and Seller Central pages that only work once the rewrite rules are refreshed.

## What to do

1. Go to **Settings → Permalinks**.
2. Set the structure to **Post Name**.
3. Click **Save Changes** (this refreshes the rules even if the setting already looked correct).

Skip this and vendor pages return **404 Not Found**.

::: tip Still need help?
Already seeing 404s? See [Vendor pages return 404](../troubleshooting/vendor-pages-404.html), or [open a ticket](https://webkul.uvdesk.com/).
:::

**Related:** [Install & activate](./install-and-activate.html) · [Vendor pages return 404](../troubleshooting/vendor-pages-404.html)
