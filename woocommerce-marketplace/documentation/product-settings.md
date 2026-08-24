---
title: Configuration – Product Settings
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/product-settings.html
---

# Configuration – Product Settings

<a class="doc-image-link" href="./assets/product-settings.webp"><img src="./assets/product-settings.webp" alt="Product Settings" /></a>
<a class="doc-image-link" href="./assets/fulfillment.webp"><img src="./assets/fulfillment.webp" alt="Product Settings" /></a>


The **Product Settings** allow the admin to manage how vendors add, edit, and publish products in the marketplace.

**Path:**
Marketplace > Settings > Product

---

### Vendor product settings

- **Allow Vendor to Publish**
  - Enable to auto-approve and publish vendor products.
  - Disable to require admin approval for all vendor-added or edited products.
  - *Flow:* Vendor adds/edits product → Status becomes **Draft** → Admin reviews and publishes.

- **Allow Vendors to Translate Products (WPML)**
  - Enables vendors to translate products from their dashboard.
  - Available only when **WPML** is installed and activated.

- **Allowed Product Types**
  - Admin selects which product types vendors can create.
  - Examples:
    - Simple
    - Variable
    - Grouped
    - External
    - Downloadable

- **Allowed Categories**
  - Admin selects which product categories vendors can use while adding products.

- **Minimum Order Amount Setting**
  - Enable to enforce a minimum purchase amount for vendor products.
  - Admin can define a default minimum value.
  - If **Amount Value for Vendor** is enabled and vendor leaves it empty, the admin value is applied.

- **Product Quantity Limit Setting**
  - Enable to allow vendors to set maximum purchase quantity.
  - Admin can define a global default maximum quantity for vendor products.

---

## Product Fulfilment Settings

- When enabled, vendors can manage their own product fulfilment details.
- Vendors can add a fulfilment label, image, and description from their dashboard.
- Vendor-specific fulfilment information is displayed on the product page.
- When disabled, fulfilment details are managed and shown only by the admin.

<a class="doc-image-link" href="./assets/fulfillment.webp"><img src="./assets/fulfillment.webp" alt="Product Settings" /></a>


- Allows buyers to see **who will fulfil product delivery**.
- **Admin can:**
  - Enable fulfilment for marketplace vendors
  - Upload a fulfilment image
  - Add fulfilment label and descriptive text
- **Vendor Support:**
  - Vendors can configure fulfilment details from their dashboard.
  - Vendor-specific fulfilment details appear on the product page.

---
