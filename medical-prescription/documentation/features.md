---
title: Features
source: https://wpdoc.webkul.com/medical-prescription/documentation/features.html
---

# Features

<a class="doc-image-link" href="./assets/category-prescription-labels.webp"><img src="./assets/category-prescription-labels.webp" alt="Prescription-required labels on a category listing" /></a>

Everything the **Medical Prescription Attachment for WooCommerce** plugin can do, grouped by area. Each feature links to its full guide.

---

## Product gating

- **Per‑product control** — mark any single product as *prescription required*. See [Product & Category Setup](https://wpdoc.webkul.com/medical-prescription/documentation/product-setup.html).
- **Category gating** — require a prescription for **every** product in one or more categories, applied automatically as products are saved.
- **Storefront labels** — a customizable "Prescription Required" badge with your own text, font color, and background color.
- **Flexible placement** — choose where the label and upload box appear on the product, shop, cart, checkout, and order pages. See [Labels & Display](https://wpdoc.webkul.com/medical-prescription/documentation/configuration-labels-display.html).

---

## Prescription uploads

- **Drag‑and‑drop upload box** — customers attach files without leaving the page.
- **Multiple file formats** — allow any of **JPG/JPEG, PNG, PDF, DOC/DOCX**; you choose which formats are accepted.
- **Single or multiple files** — let customers attach several pages of a prescription, up to a limit you set.
- **Checkout enforcement** — gated orders can't be placed until a prescription is attached.
- **Secure validation** — uploads are checked by content (magic‑byte sniffing + image decode), not just file extension, to block disguised files.

See [Uploading a Prescription](https://wpdoc.webkul.com/medical-prescription/documentation/customer-upload-flow.html).

---

## Flexible customer flows

- **Attach Later** — let logged‑in customers place the order first and upload the prescription afterwards from their account.
- **Re‑upload if rejected** — when an upload is rejected, allow the customer to submit a new one.
- **My Prescriptions vault** — a *My Account* area where customers see the history and status of every prescription they've submitted.

See [Attach Later & Re‑Upload](https://wpdoc.webkul.com/medical-prescription/documentation/attach-later-reupload.html) and [My Prescriptions Vault](https://wpdoc.webkul.com/medical-prescription/documentation/my-prescriptions-vault.html).

---

## OCR &amp; AI reading *(v1.3.x)*

- **On‑device OCR** — extracts text from uploaded prescriptions in the browser using Tesseract, with configurable languages and a confidence threshold.
- **AI fallback (Gemini Vision)** — when OCR is weak (blank, low confidence, or handwriting), the image is escalated to Google Gemini to read it and return structured details.
- **AI OCR analysis workspace** — inside the prescription viewer, staff see extracted doctor, registration number, date, patient, and detected medicines with in‑stock matching.

See [OCR & AI](https://wpdoc.webkul.com/medical-prescription/documentation/configuration-ocr-ai.html).

---

## Optional storefront features *(v1.3.x)*

- **My Pill Box** — customers create named "family health folders" of medicines and re‑order them in one click.
- **Prescription search** — shoppers upload a prescription and the product listing is filtered to the medicines it mentions.

See [My Pill Box](https://wpdoc.webkul.com/medical-prescription/documentation/my-pill-box.html) and [Prescription Search](https://wpdoc.webkul.com/medical-prescription/documentation/frontend-search.html).

---

## Admin review &amp; notifications

- **Orders review desk** — a dedicated admin screen listing every prescription order, filterable by prescription status.
- **One‑click approve / reject** — decide on each prescription from the list or the order detail.
- **Order notes** — optionally log every status change as an order note for a full audit trail.
- **Three email notifications** — new‑order alert to admin, order confirmation to customer, and a status update to the customer.

See [Order Management](https://wpdoc.webkul.com/medical-prescription/documentation/admin-order-management.html) and [Email Notifications](https://wpdoc.webkul.com/medical-prescription/documentation/email-notifications.html).

---

## Compatibility

| Requirement | Supported |
| --- | --- |
| WordPress | 6.7 – 6.9 |
| WooCommerce | 10.0 – 10.7 |
| PHP | 7.4 – 8.3 |
| HPOS (High‑Performance Order Storage) | ✅ Yes |
| Cart & Checkout **Blocks** | ✅ Yes |
| Classic Cart & Checkout | ✅ Yes |

> Compatible with standard WooCommerce themes. The live demo runs on the Voguish theme.
