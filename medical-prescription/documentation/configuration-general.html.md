---
title: General Settings
source: https://wpdoc.webkul.com/medical-prescription/documentation/configuration-general.html
---

# General Settings

The **General** tab holds the master switch and the core rules for how prescriptions are collected. Find it on the plugin's **Configuration** screen (**WooCommerce Prescription → Configuration → General**).

> All storefront behaviour depends on the master toggle below. If prescriptions aren't showing anywhere, check this first.

---

## Settings

### Enable Medical Prescription Attachment
The master on/off switch for the entire module. When off, no labels, upload boxes, or enforcement appear on the storefront.

> **Default:** Off — turn this on after installation.

---

### Allowed Categories
Select one or more product categories whose products should **automatically require a prescription**. The rule is applied when a product is saved.

::: warning Empty does *not* mean "all products"
Leaving this empty does **not** gate every product. With no categories selected, only products you've individually marked *Prescription required* are gated. See [Product & Category Setup](https://wpdoc.webkul.com/medical-prescription/documentation/product-setup.html).
:::

---

### Enable Multiple Files Upload
Allow customers to attach **more than one file** as a single prescription (for example, a multi‑page script).

> **Default:** Enabled.

### Number of Files Allowed
The maximum number of files a customer may upload when *Multiple Files Upload* is on. Accepts **1–10**.

> **Default:** 1. Only applies when *Multiple Files Upload* is enabled.

---

### Allowed Prescription File Formats
Choose which file types customers may submit. Only the selected formats appear in the file picker, and they're validated both in the browser **and** on the server.

| Format group | Extensions |
| --- | --- |
| Image (JPG) | `.jpg`, `.jpeg` |
| Image (PNG) | `.png` |
| PDF | `.pdf` |
| Document | `.doc`, `.docx` |

> At least one format must stay selected. **Default:** all formats allowed. Maximum file size is **10 MB** per file.

---

### Enable Attach Later (Logged‑in Customers)
Let **logged‑in** customers place a gated order *without* uploading first, then attach the prescription afterwards from **My Account**. The order is held with an *Attachment Pending* status until they do.

> **Default:** Off. See [Attach Later & Re‑Upload](https://wpdoc.webkul.com/medical-prescription/documentation/attach-later-reupload.html).

### Enable Re‑Upload If Rejected
When a prescription is rejected by an admin, allow the customer to submit a **new** file instead of being stuck.

> **Default:** Off.

---

### Enable Order Notes on Status Change
Add a WooCommerce **order note** every time a prescription's status changes (uploaded, approved, rejected). This gives you a full audit trail on the order.

> **Default:** Off. Recommended on for compliance/record‑keeping.

---

## Recommended starting point

For a typical pharmacy:

1. **Enable Medical Prescription Attachment** — On.
2. **Allowed Categories** — select your Rx categories (e.g. *Prescription Medicines*).
3. **Allowed File Formats** — keep JPG, PNG, PDF (drop DOC if you only want scans/photos).
4. **Enable Order Notes on Status Change** — On (audit trail).
5. **Attach Later** and **Re‑upload if rejected** — On, for a smoother customer experience.

Then set where things appear in [Labels & Display](https://wpdoc.webkul.com/medical-prescription/documentation/configuration-labels-display.html).
