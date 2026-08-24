---
title: Configuration – General Settings
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-general-settings.html
---

# Configuration – General Settings

<a class="doc-image-link" href="./assets/general-settings.png"><img src="./assets/general-settings.png" alt="Admin Panel" /></a>

After successfully installing WooCommerce Marketplace, the admin can configure the core marketplace settings such as vendor registration, approval workflow, default vendor capabilities, and overall marketplace behavior from:

**Marketplace > Settings > General**

---

## General Settings Options

### Default Commission

The **Default Commission** is applied when no commission is set specifically for a vendor.
Admins can set a combination of a fixed flat amount and a percentage (e.g., `$0 + 15%`).

#### Example

- Product Price: **$100**

If the default commission is **20%**:
- Vendor receives: **$80**
- Admin commission: **$20**

---

### Deduct Discount From

If a discount is applied by the customer, this option defines how the discount amount is adjusted.

Available options:

- Both vendor total amount and admin commission amount
- Vendor total amount only
- Admin commission amount only

*Note: If selected from the 'Admin Commission Amount' and the discount amount is more than the commission amount then the difference will also be borne by the admin.*

---

### Auto Approve Vendor

If enabled, vendors will be **automatically approved** after registration.

#### Example

- When enabled, any user signing up as a vendor is instantly converted into a vendor.
- When disabled, admin approval is required before the user becomes a vendor.

---

### Separate Vendor Dashboard

If enabled, vendors will have a **separate dashboard**, similar to the admin dashboard, for managing their marketplace activities.

---

### Data Delete After Vendor Delete

- If enabled, **all vendor data** will be deleted when the vendor is removed.
- If disabled, the vendor’s data will be **assigned to the admin** instead.

---

### Applicable Shipping Methods

The admin can select which shipping method will apply at checkout:

- **Admin Shipping Method**
- **Vendor Shipping Method**

---

#### More About Applicable Shipping Methods

##### Admin Shipping Method Selected

- Admin shipping rates will apply to **all products**, including vendor products.
- The shipping rate remains the same regardless of whether the cart contains admin or vendor products.

##### Vendor Shipping Method Selected

- Vendor-specific shipping rates will apply to vendor products.
- Admin shipping applies to admin products.

##### Mixed Cart (Admin + Vendor Products)

If the cart contains products from **both admin and vendor**:

- The total shipping cost will be a **combined rate** of both admin and vendor shipping.
- This applies regardless of the selected Applicable Shipping Method.

---

### Vendor Page

Select the page to be used as the **Vendor Page** (which shows the vendor listing).

⚠️ **Important Notes**:
- Updating the vendor page will **erase existing content** of the newly selected page.
- After changing the page, kindly **update permalinks**.

---

### Seller Central Page

Select the page to be used as the **Seller Central Page**.

⚠️ **Important Notes**:
- Updating a new seller central page will **erase existing content** of the newly selected page.
- After changing the page, kindly **update permalinks**.

---

### Shop Name on Registration

- If set to **Required**, vendors must enter a **Shop Name** during registration.
- If set to **Optional** and left empty, the module will use the **Vendor Name** as the shop name.

---

### Shop Slug on Registration

- If set to **Required**, vendors must enter a **Shop URL** during registration.
- If set to **Optional** and left empty, the module will use the **Shop Slug** as the vendor’s username.

---

### Vendor Terms & Conditions Page

The admin can select a **Terms & Conditions page** that will be displayed to vendors during registration.

---

### Allow Vendor Registration on My Account

- If enabled, vendor registration fields will appear on the **WooCommerce My Account** signup form.
- If disabled, a link to the **Seller Central Registration Form** will be displayed instead.

---

### Vendor KYC Verification Settings

Admins can configure the KYC settings directly from the General tab:
- **Enable Vendor KYC Verification**: A master toggle to enable or disable the feature globally.
- **KYC Document Types**: Admins can define the types of documents allowed (e.g., Business License, Government ID, Utility Bill).
- **Allowed KYC Formats**: Restrict document uploads to specific formats (PDF, JPG, JPEG, PNG, WEBP).
- **Restrict KYC Document Size**: Optionally define minimum and maximum file size limits (in KB) for the document uploads.

---

### Admin-configurable Upload Restrictions

Admins can set global upload restrictions for every vendor image, including:
- Avatar
- Logo
- Fulfillment
- Banner

For each image type, admins can define:
- Allowed file types
- Optional file size limits
- Optional dimension limits (width/height)

<!-- <a class="doc-image-link" href="./assets/placeholder-upload-restrictions.png"><img src="./assets/placeholder-upload-restrictions.png" alt="Upload Restrictions" /></a> -->

---

### "Sold by" Visibility Control

Admins have full control over whether the "Sold by" text is visible to customers.
- **Global Setting**: A master toggle to hide the vendor name and store links across the shop, cart, checkout, orders, emails, and invoices.
- **Per-Vendor Override**: Admins can override the global setting on a per-vendor basis if certain vendors need their names displayed or hidden.

<!-- <a class="doc-image-link" href="./assets/placeholder-sold-by-visibility.png"><img src="./assets/placeholder-sold-by-visibility.png" alt="Sold By Visibility Settings" /></a> -->

---
