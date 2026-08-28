---
title: Prescription Search
source: https://wpdoc.webkul.com/medical-prescription/documentation/frontend-search.html
---

# Prescription Search

*(Version 1.3.x)* The **frontend prescription search** lets a shopper upload a prescription image on the storefront and instantly **filter the product listing** down to the medicines their prescription mentions — so they can find and buy exactly what the doctor prescribed.

Enable it on the [Optional Features](https://wpdoc.webkul.com/medical-prescription/documentation/configuration-features.html) tab (**Enable Frontend Prescription Search Engine**) and choose where it appears.

---

## How it works

1. The customer uploads a prescription image into the search block.
2. **On‑device OCR** (Tesseract) reads the image right in the browser — no server upload for the scan itself.
3. The plugin extracts medicine names from the recognized text.
4. The visible product listing is **filtered** to show the matching, in‑stock medicines.

The customer sees friendly status messages along the way, such as:

- *"Please select a prescription image first."*
- *"Prescription processed successfully! Items filtered below."*
- *"Prescription processed! No matching products found on screen."*
- *"Could not read any text from this prescription."*

---

## Where it appears

Set the location on the [Optional Features](https://wpdoc.webkul.com/medical-prescription/documentation/configuration-features.html) tab:

| Option | Placement |
| --- | --- |
| Display on Shop &amp; Product Category Pages | Above the product grid on shop/category archives |
| Display Above WooCommerce Cart Table | Above the items on the cart page |

---

## When to use it

- **Large catalogs** — shoppers skip the search bar and jump straight to what's on their script.
- **Pharmacy UX** — mirrors the "hand over your prescription and we'll find it" experience of a physical pharmacy.

::: tip Discovery aid, not a bypass
Search only *filters what's shown*. Prescription‑required products still go through the normal [upload and approval flow](https://wpdoc.webkul.com/medical-prescription/documentation/customer-upload-flow.html) at checkout — search helps customers find products, it doesn't grant purchase without a valid prescription.
:::

::: warning Reading accuracy
Because recognition runs on a photo of a prescription, results depend on image quality. Clear, well‑lit scans match best; blurry or heavily handwritten scripts may return few or no matches.
:::

---

## Related

- Turn it on → [Optional Features](https://wpdoc.webkul.com/medical-prescription/documentation/configuration-features.html)
- How OCR works → [OCR & AI](https://wpdoc.webkul.com/medical-prescription/documentation/configuration-ocr-ai.html)
