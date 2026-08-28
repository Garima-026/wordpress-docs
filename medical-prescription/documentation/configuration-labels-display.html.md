---
title: Labels & Display
source: https://wpdoc.webkul.com/medical-prescription/documentation/configuration-labels-display.html
---

# Labels &amp; Display

The **Labels & Display** tab controls the storefront label on gated products and **where** the prescription box appears across the shop, product, cart, checkout, and order pages.

<a class="doc-image-link" href="./assets/product-prescription-required.webp"><img src="./assets/product-prescription-required.webp" alt="Prescription Required label on a single product page" /></a>

---

## The label

### Product Page Label
The text shown on prescription‑required products (for example, *"Prescription Required"* or *"Prescription required — please attach a valid doctor's prescription…"*). Leave meaningful and short.

### Label Font Color
The text color of the label — a standard color picker (hex).

### Label Background Color
The background color behind the label — a standard color picker (hex).

### Description
Optional longer text shown to customers on the single product page, beneath the label. If left blank, no description is shown.

<a class="doc-image-link" href="./assets/product-label.webp"><img src="./assets/product-label.webp" alt="Customizable prescription label with color styling" /></a>

---

## Display positions

Each storefront surface has its own position selector, so you can place the label/box exactly where it fits your theme. Setting any of these to **Disabled** hides the plugin on that page.

### Product Page
Where the prescription info appears on the **single product** page:

| Option | Placement |
| --- | --- |
| Disabled | Not shown |
| Default | Standard position in the summary |
| After Product Image | Directly under the gallery |
| After Product Title | Below the product name |
| Before Product Title | Above the product name |
| After Short Description | Below the excerpt |
| After Add To Cart Button | Under the add‑to‑cart area |
| Before Tab Information | Above the product tabs |

### Shop / Category Page
Where the label appears on **listing** pages (shop and category archives):

| Option | Placement |
| --- | --- |
| Disabled | Not shown |
| Before Product Title | Above each product name |
| After Product Title | Below each product name |
| Before Add to Cart Button | Above the listing's add‑to‑cart |
| After Add to Cart Button | Below the listing's add‑to‑cart |

### Cart Page
Where the **attach box** appears on the classic cart page:

| Option | Placement |
| --- | --- |
| Disabled | Not shown |
| Before Cart Products Table | Above the cart items |
| After Cart Products Table | Below the cart items |
| Before Proceed To Checkout Button | Above the checkout button |
| After Proceed To Checkout Button | Below the checkout button |

### Checkout Page
Where the **attach box** appears on the classic checkout page:

| Option | Placement |
| --- | --- |
| Disabled | Not shown |
| Before Checkout Form | Above the billing form |
| After Checkout Form | Below the billing form |
| Before Place Order Button | Just above *Place Order* |
| After Place Order Button | Just below *Place Order* |

### Order / Thank You Page
Where the **attach box** appears on the order‑received and *My Account* order‑view pages:

| Option | Placement |
| --- | --- |
| Disabled | Not shown |
| Before Order Details Table | Above the order summary |
| After Order Details Table | Below the order summary |

---

## Where the box actually lands

In the [live demo](https://medical-prescription-for-woocommerce.wcdemo.webkul.com/), the product page shows the **label**, and the **Attach Prescription** box is placed on the **checkout** page:

<a class="doc-image-link" href="./assets/checkout-page.webp"><img src="./assets/checkout-page.webp" alt="Attach Prescription box on the checkout page" /></a>

::: tip Blocks vs. classic
The **Cart Page** and **Checkout Page** position options target WooCommerce's **classic** shortcode cart/checkout. When you use the newer **Cart/Checkout Blocks**, the plugin automatically injects the box into the block layout and enforces the upload there too — see [Uploading a Prescription](https://wpdoc.webkul.com/medical-prescription/documentation/customer-upload-flow.html).
:::

---

## Tips

- Pick **one** clear position per page — don't rely on customers scrolling to find the box.
- For most themes, **After Add To Cart Button** (product) and **Before Place Order Button** (checkout) read most naturally.
- Use a high‑contrast **label background** so the "Prescription Required" badge is impossible to miss on busy listings.
