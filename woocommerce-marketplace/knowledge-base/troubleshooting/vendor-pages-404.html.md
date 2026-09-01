---
title: Vendor / marketplace pages return 404
source: https://wpdoc.webkul.com/woocommerce-marketplace/knowledge-base/troubleshooting/vendor-pages-404.html
---

# Vendor / marketplace pages return 404

Vendor dashboard, shop, or Seller Central URLs show **404 Not Found**. This means the permalink rewrite rules haven't been refreshed since installation.

## Fix

1. Go to **Settings → Permalinks**.
2. Set the structure to **Post Name**.
3. Click **Save Changes**. This flushes the rules even if the setting already looked right.

::: tip Still need help?
If pages still 404 after this, [open a ticket](https://webkul.uvdesk.com/) with the exact URL that fails.
:::

**Related:** [Do I need to update permalinks?](../getting-started/update-permalinks.html) · [Installation guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/installation.html)
