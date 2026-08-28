---
title: Uploading a Prescription
source: https://wpdoc.webkul.com/medical-prescription/documentation/customer-upload-flow.html
---

# Uploading a Prescription

This is what your customers see and do when they buy a gated medicine — from the label on the product to attaching a file and placing the order.

<a class="doc-image-link" href="./assets/prescription-upload-box.webp"><img src="./assets/prescription-upload-box.webp" alt="Drag-and-drop prescription upload box" /></a>

---

## 1. The prescription label

On gated products, customers see the **Prescription Required** label wherever you've placed it (product page, shop listings). On the single product page they may also see your description text explaining what a valid prescription is.

<a class="doc-image-link" href="./assets/product-prescription-required.webp"><img src="./assets/product-prescription-required.webp" alt="Prescription required label and note on a product page" /></a>

---

## 2. The attach box

When a gated item is in the cart, the **Attach Prescription** box appears at the position you configured (product, cart, checkout, or order page). It offers:

- **Drag & drop** — drop a file straight onto the box, or click **Browse files**.
- **Accepted formats** — shown right on the box, e.g. *JPG, JPEG, PNG, PDF, DOC, DOCX*.
- **Size limit** — up to **10 MB** per file.
- **Multiple files** — if enabled, the customer can add several files up to your limit, each with a preview and a remove button.

<a class="doc-image-link" href="./assets/checkout-page.webp"><img src="./assets/checkout-page.webp" alt="Attach Prescription card on the checkout page with enforcement notice" /></a>

---

## 3. Checkout is enforced

If a gated item is in the order and no file is attached, the customer **cannot** place the order. They see a clear prompt:

> *"Kindly upload the medical prescription first in order to place an order."*

Once a valid file is attached, **Place Order** unlocks and the order is submitted with a prescription status of **Pending**, ready for your team to review.

::: tip Classic and Block checkout
The box works on both the **classic** shortcode checkout and the newer **Checkout Block**. On the block checkout the plugin injects the box into the layout and enforces the upload at the API level, so the requirement can't be bypassed.
:::

---

## 4. File safety

Every upload is validated on the server — not just by its extension:

- **Content sniffing** — the real file type is detected from its bytes, then cross‑checked against the extension.
- **Image decode check** — images must actually decode as images, blocking files that only *look* like a picture.
- **Format allow‑list** — only the formats you enabled on the [General](https://wpdoc.webkul.com/medical-prescription/documentation/configuration-general.html) tab are accepted.

This keeps disguised or malicious files out of your order data.

---

## 5. After the order

- The customer's order is placed with the prescription **Pending** review.
- If you enabled emails, they receive an order confirmation; your admin gets a "new prescription order" alert. See [Email Notifications](https://wpdoc.webkul.com/medical-prescription/documentation/email-notifications.html).
- The customer can track the prescription's status any time under **My Account → My Prescriptions**. See [My Prescriptions Vault](https://wpdoc.webkul.com/medical-prescription/documentation/my-prescriptions-vault.html).
- If it's approved, the order proceeds. If it's rejected, and re‑upload is enabled, they can submit a new file. See [Attach Later & Re‑Upload](https://wpdoc.webkul.com/medical-prescription/documentation/attach-later-reupload.html).

---

## What if the customer doesn't have the prescription yet?

If you've enabled **Attach Later** for logged‑in customers, they can place the order first and upload from their account afterwards. The order is held as **Attachment Pending** until they do. See [Attach Later & Re‑Upload](https://wpdoc.webkul.com/medical-prescription/documentation/attach-later-reupload.html).
