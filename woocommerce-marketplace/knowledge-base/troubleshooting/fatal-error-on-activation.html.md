---
title: Fatal error or white screen when activating
source: https://wpdoc.webkul.com/woocommerce-marketplace/knowledge-base/troubleshooting/fatal-error-on-activation.html
---

# Fatal error or white screen when activating

Activation produces a fatal error, a blank white screen, or a memory-limit message. The usual cause is a **PHP memory limit below 256 MB** (or an environment under the minimums).

## Fix

1. Check **WooCommerce → Status → Server environment** for **PHP Memory Limit** and **PHP Version**.
2. Confirm you meet the [Requirements](../getting-started/requirements.html).
3. Raise the memory limit (or ask your host). If you edit `wp-config.php`:
   ```php
   define( 'WP_MEMORY_LIMIT', '256M' );
   ```
4. Retry activation.

::: tip Still need help?
If it still fails, [open a ticket](https://webkul.uvdesk.com/) and paste the exact error text.
:::

**Related:** [Requirements](../getting-started/requirements.html) · [Before you open a ticket](../billing-support/before-you-open-a-ticket.html)
