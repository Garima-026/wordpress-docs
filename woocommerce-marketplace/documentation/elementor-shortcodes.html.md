---
title: Elementor Compatibility and Shortcodes
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/elementor-shortcodes.html
---

# Elementor Compatibility and Shortcodes

<a class="doc-image-link" href="./assets/elementor-compatibility.webp"><img src="./assets/elementor-compatibility.webp" alt="Elementor compatibility" /></a>

WooCommerce Marketplace is fully **compatible with Elementor**, enabling admins to easily design vendor-related pages using shortcodes.

---

## Vendor Registration and Login Page

The admin can create a vendor registration and login page using **Elementor’s Shortcode widget**.

### How to Create the Vendor Page

1. Edit a page using **Elementor**.
2. Drag and drop the **Shortcode** widget onto the page.
3. Insert the following shortcode:

```text
[marketplace]
```

## Display Vendor Name on Single Product Page

To display the vendor’s name on the single product page, use the following shortcode:

```text
[wkmp_seller_profile_link]
```

### This Shortcode Displays

- Vendor registration form

- Vendor login form

### After Login, Vendors Can

- View their profile details

- Manage their account information from the same page

<a class="doc-image-link" href="./assets/woocommerce-marketplace-seller-elementor.webp"><img src="./assets/woocommerce-marketplace-seller-elementor.webp" alt="Vendor Page using Elementor" /></a>
<a class="doc-image-link" href="./assets/woocommerce-marketplace-seller-edit-elementor.webp"><img src="./assets/woocommerce-marketplace-seller-edit-elementor.webp" alt="Vendor Profile Page" /></a>
### Display Vendor Name on Single Product Page

To show the vendor’s name on the single product page, use the shortcode below:

```text
[wkmp_seller_profile_link]
```

### Functionality

- Displays the vendor name on the product page

- Vendor name appears as a clickable link

- Redirects customers to the vendor’s profile page

### How to Use

- Edit the Single Product Page using Elementor

- Add a Shortcode widget where the vendor name should appear

- Paste the shortcode:

```text
[wkmp_seller_profile_link]
```

<a class="doc-image-link" href="./assets/shortcode1.webp"><img src="./assets/shortcode1.webp" alt="Vendor Name on Product Page" /></a>
### Display Vendor List with Search & Product Count

To display a list of all vendors with search and product count, use the shortcode below:

```text
[wkmp-vendors-list show_search=yes show_heading=1 show_product_count=1]
```

### Displayed Features

- List of all registered vendors

- Search bar to filter vendors

- Section heading

- Product count for each vendor

### Shortcode Parameters Table
| Parameter              | Value | Description              |
|------------------------|-------|--------------------------|
| `show_search`          | yes   | Show vendor search bar   |
| `show_search`          | no    | Hide vendor search bar   |
| `show_heading`         | 1     | Show heading             |
| `show_heading`         | 0     | Hide heading             |
| `show_product_count`   | 1     | Show product count       |
| `show_product_count`   | 0     | Hide product count       |

### How to Use

- Edit any page using Elementor or the WordPress editor

- Add a Shortcode widget or block

- Paste the shortcode:

```text
[wkmp-vendors-list show_search=yes show_heading=1 show_product_count=1]
```
<a class="doc-image-link" href="./assets/vendor-list-shortcode-and-count.webp"><img src="./assets/vendor-list-shortcode-and-count.webp" alt="Vendor List Page" /></a>
