---
title: Installation
source: https://wpdoc.webkul.com/medical-prescription/documentation/installation.html
---

# Installation

Get the plugin installed, activated, and switched on in a few minutes.

---

## Requirements

Before you begin, make sure your store meets these minimums:

| Component | Version |
| --- | --- |
| WordPress | 6.7 or newer |
| WooCommerce | 10.0 or newer (installed &amp; active) |
| PHP | 7.4 or newer (8.x recommended) |

WooCommerce **must be installed and active** first — the plugin lists it as a required plugin and will not run without it.

---

## Install from the WordPress admin

1. Download the plugin ZIP from your [CodeCanyon](https://codecanyon.net/item/medical-prescription-attachment-plugin-for-woocommerce/24649311) purchase.
2. In WordPress, go to **Plugins → Add New → Upload Plugin**.
3. Choose the `medical-prescription-for-woocommerce.zip` file and click **Install Now**.
4. Click **Activate Plugin**.

## Install manually (FTP)

1. Unzip the package.
2. Upload the `medical-prescription-for-woocommerce` folder to `wp-content/plugins/`.
3. In WordPress, open **Plugins**, find **Medical Prescription Attachment for WooCommerce**, and click **Activate**.

---

## First‑run steps

After activation:

1. **Open the configuration.** Go to the plugin's **Configuration** screen (under the WooCommerce Prescription menu, at `admin.php?page=wkwc-pa-products&tab=wkwc-pa-configuration`).
2. **Enable the module.** Turn on **Enable Medical Prescription Attachment** on the **General** tab. Nothing appears on the storefront until this master switch is on. See [General Settings](https://wpdoc.webkul.com/medical-prescription/documentation/configuration-general.html).
3. **Choose what needs a prescription.** Either mark individual products or select **Allowed Categories**. See [Product & Category Setup](https://wpdoc.webkul.com/medical-prescription/documentation/product-setup.html).
4. **Pick where the upload box appears.** Set the display positions for the product, cart, checkout, and order pages. See [Labels & Display](https://wpdoc.webkul.com/medical-prescription/documentation/configuration-labels-display.html).
5. **Turn on emails (optional).** Enable admin and customer notifications on the **Notifications** tab. See [Notifications](https://wpdoc.webkul.com/medical-prescription/documentation/configuration-notifications.html).

---

## Verify it's working

1. On the storefront, open a product you marked as prescription‑required.
2. Confirm the **Prescription Required** label shows.
3. Add it to the cart and go to checkout — the **Attach Prescription** box should appear, and **Place Order** should be blocked until you attach a file.

If the label or box doesn't appear, re‑check that the **master toggle is on**, the product/category is gated, and a **display position** is selected for that page.

---

## Updating

When a new version is released, deactivate and delete the old plugin folder (your settings and existing prescriptions are preserved in the database), then upload and activate the new version. The plugin automatically refreshes its *My Account* endpoints after an update, so customer‑facing links keep working.

::: tip Rewrite rules
If a *My Account* tab (My Prescriptions, My Pill Box) ever 404s right after an update, go to **Settings → Permalinks** and click **Save Changes** once to flush WordPress rewrite rules.
:::
