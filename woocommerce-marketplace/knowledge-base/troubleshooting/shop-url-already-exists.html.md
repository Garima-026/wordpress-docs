---
title: Shop URL always shows "Already Exists" at registration
source: https://wpdoc.webkul.com/woocommerce-marketplace/knowledge-base/troubleshooting/shop-url-already-exists.html
---

# Shop URL always shows "Already Exists" at registration

During vendor registration the **Shop URL** field reports *Already Exists* for every value. The field uses a live **AJAX availability check**. So a real duplicate, or a request that can't reach `admin-ajax.php`, will report the URL as unavailable.

## Fix

1. Try a clearly unique Shop URL to rule out a genuine duplicate.
2. Confirm permalinks are set (see [Vendor pages 404](./vendor-pages-404.html)) and that no security plugin or firewall blocks `admin-ajax.php`.
3. Review the expected behavior in [Vendor Registration Process](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-registration-process.html).

::: tip Still need help?
[Open a ticket](https://webkul.uvdesk.com/) and mention any security/firewall plugins you run.
:::

**Related:** [How vendors register](../vendors/how-vendors-register.html) · [Vendor pages return 404](./vendor-pages-404.html)
