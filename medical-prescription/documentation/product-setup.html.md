---
title: Product & Category Setup
source: https://wpdoc.webkul.com/medical-prescription/documentation/product-setup.html
---

# Product &amp; Category Setup

There are two ways to make a product require a prescription: mark it **individually**, or gate an entire **category**. You can mix both.

<a class="doc-image-link" href="./assets/product-full.webp"><img src="./assets/product-full.webp" alt="A prescription-required product on the storefront" /></a>

---

## Option 1 — Mark a single product

Use this when only specific products need a prescription.

1. Open the product in **Products → All Products → *(edit)***.
2. Find the plugin's **Prescription** option in the product data / meta area.
3. Turn on **Prescription required** for that product.
4. *(Optional)* Add "what counts as a valid prescription" guidance text that shows on the product page.
5. **Update** the product.

The product now shows the **Prescription Required** label on the storefront and triggers the attach box for gated checkout.

---

## Option 2 — Gate a whole category

Use this when every product in a category is prescription‑only (e.g. *Prescription Medicines*, *Antibiotics*, *Insulin*).

1. Go to the plugin's **Configuration → General** tab.
2. In **Allowed Categories**, select one or more categories.
3. **Save Changes**.

Every product in those categories is treated as prescription‑required. The rule is applied as each product is saved, so newly added products in a gated category are covered automatically.

➡ See [General Settings](https://wpdoc.webkul.com/medical-prescription/documentation/configuration-general.html).

::: warning Empty ≠ all
Leaving **Allowed Categories** empty does **not** gate all products. With no categories chosen, only products you've individually marked as *Prescription required* are gated.
:::

---

## How the two rules interact

| Product marked required? | In a gated category? | Result |
| --- | --- | --- |
| Yes | — | **Gated** |
| — | Yes | **Gated** |
| Yes | Yes | **Gated** |
| No | No | Freely purchasable |

A product only needs to match **one** rule to require a prescription.

---

## Gated vs. free products side by side

In the demo pharmacy, antibiotics, inhalers, insulin, and blood thinners are gated, while PPE and vitamins are not:

<a class="doc-image-link" href="./assets/category-prescription-labels.webp"><img src="./assets/category-prescription-labels.webp" alt="Gated products showing Requires a Valid Prescription" /></a>

<a class="doc-image-link" href="./assets/product-normal.webp"><img src="./assets/product-normal.webp" alt="A freely purchasable product with no prescription requirement" /></a>

---

## Verifying a product is gated

1. Open the product on the storefront.
2. Confirm the **Prescription Required** label appears (per your [Labels & Display](https://wpdoc.webkul.com/medical-prescription/documentation/configuration-labels-display.html) positions).
3. Add it to the cart and go to checkout — the **Attach Prescription** box should appear and block **Place Order** until a file is attached.

If the label doesn't appear, check: the **master toggle** is on, the product is marked or in a gated category, and a **display position** is set for that page.
