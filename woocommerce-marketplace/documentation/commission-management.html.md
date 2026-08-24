---
title: Commission Management
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/commission-management.html
---

# Commission Management

<a class="doc-image-link" href="./assets/marketplace-settings.webp"><img src="./assets/marketplace-settings.webp" alt="Marketplace Commission Settings" /></a>

The **Commission Management** feature allows the admin to define how commissions are calculated and distributed between the admin and vendors.

---

## Global Commission Configuration

- The admin can set a **Fixed Commission** and a **Percentage Commission**.
- These commission rules apply to **all vendors** by default.
- Configuration path:
  - **Marketplace → Settings → Commission**

---

## Commission Calculation Example

- Fixed Commission: **5 USD**
- Percentage Commission: **10%**
- Product Price: **100 USD**

### Calculation

- Percentage Commission: 10% of 100 USD = **10 USD**
- Fixed Commission: **5 USD**
- **Total Admin Commission:** 15 USD
- **Vendor Earnings:** 85 USD

---

## Order Management (Commission View)

The commission details are visible from the **Orders section** and not from the Commission settings page.

### Navigation Path

- Go to **Marketplace → Orders**
- This opens the **Marketplace Orders listing page**

### Commission Details in Orders

Under the **Orders** tab, the admin can view detailed commission-related information for each order.

#### Visible Columns

- Order ID
- Product
- Quantity
- Product Total
- Shipping
- Discount
- **Total Commission**
- **Total Vendor Amount**
- Action

This section helps the admin track:
- Commission earned per order
- Final payable amount to the vendor

<a class="doc-image-link" href="./assets/sellers-orders-list.webp"><img src="./assets/sellers-orders-list.webp" alt="Seller Orders List" /></a>

---

## Vendor-Specific Commission

The admin can configure commission rates for individual vendors from the **Vendor Management** section.

### Navigation Path

- Go to **Marketplace → Vendors**
- The list of all registered vendors will be displayed
- Click on the **Vendor Name** to manage commission settings

### Vendor Commission Configuration

- Clicking on the **Vendor Name** redirects the admin to the **Vendor Profile / Commission page**
- From here, the admin can:
  - Set a **vendor-specific fixed commission**
  - Set a **vendor-specific percentage commission**
  - Override the **global commission settings** if required

> **Note:** Vendor-specific commission settings take precedence over global commission settings.

---
