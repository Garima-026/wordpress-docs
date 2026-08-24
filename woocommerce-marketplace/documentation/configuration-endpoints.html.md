---
title: Configuration – Endpoints
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-endpoints.html
---

# Configuration – Endpoints

<a class="doc-image-link" href="./assets/endpoints.webp"><img src="./assets/endpoints.webp" alt="Endpoints" /></a>

The **Endpoints** configuration allows the admin to manage dynamic URL segments used across the vendor dashboard and related pages in the WooCommerce Multi-Vendor Marketplace.

---

## Endpoints Overview

- Endpoints add an extra segment to a page URL
- Used to load different sections without creating separate pages
- Commonly used for:
  - Vendor dashboard pages
  - Vendor profile pages
  - Orders, settings, and other vendor actions
- Fully configurable by the admin

---

## What is an Endpoint?

- An endpoint is an additional URL segment appended to a page
- Example:
  - Base URL: `example.com/vendorprofile`
  - With endpoint: `example.com/vendorprofile/edit-vendor-profile`
- Helps display specific sections such as:
  - Edit Profile
  - Dashboard
  - Order History
  - Settings pages

---

## Admin Configuration

- Navigate to:
  - **Marketplace > Settings > Endpoints**
- The admin can configure:
  - **Endpoint** – URL slug appended to the page
  - **Title** – Menu label shown in the vendor dashboard

---

## Endpoint Customization

- Each endpoint URL can be customized
- Endpoints must be **unique** to avoid conflicts
- Any changes reflect immediately in vendor dashboard URLs
- **Hide Dashboard Sections**: Admins can easily hide individual vendor dashboard sections directly from the Endpoints settings by disabling their respective endpoints.
- Recommended practice:
  - Use a prefix such as **`vendor-`** to avoid collisions

---

## Examples

- **Dashboard**
  - Endpoint: `dashboard`
  - Title: `Dashboard`

- **Order History**
  - Endpoint: `order-history`
  - Title: `Order History`

---

## Vendor Dashboard Menu

<a class="doc-image-link" href="./assets/dashboard.webp"><img src="./assets/dashboard.webp" alt="Vendor Dashboard Endpoints" /></a>

- Endpoint **Titles** appear as menu items in the vendor dashboard
- Clicking a menu item loads the corresponding page using its endpoint

---

## Hide Customer WooCommerce Endpoints

- Admin can hide **customer-related WooCommerce endpoints** from the vendor dashboard
- Prevents vendors from seeing irrelevant customer menu items
- Improves vendor dashboard clarity and usability

### Already Registered WooCommerce Endpoints

- `dashboard`
- `orders`
- `downloads`
- `edit-address`
- `payment-methods`
- `edit-account`
- `customer-logout`
- `order-pay`
- `order-received`
- `view-order`
- `lost-password`
- `add-payment-method`
- `delete-payment-method`
- `set-default-payment-method`

### Behavior

- These customer endpoints can be hidden across **all vendor endpoint pages**
- Only vendor-relevant endpoints remain visible in the dashboard
- **Re-show Logout Endpoint**: If customer endpoints are hidden, admins can use a specific option to keep the **Logout** endpoint visible, ensuring vendors can still log out easily.

---
