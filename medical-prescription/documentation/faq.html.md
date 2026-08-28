---
title: FAQ & Troubleshooting
source: https://wpdoc.webkul.com/medical-prescription/documentation/faq.html
---

# FAQ &amp; Troubleshooting

Common questions and quick fixes. If you're stuck, [raise a ticket](https://webkul.uvdesk.com/) and our team will help.

---

## Setup

### The prescription label / upload box isn't showing. Why?
Check, in order:
1. **Master toggle** — *Enable Medical Prescription Attachment* is on ([General](https://wpdoc.webkul.com/medical-prescription/documentation/configuration-general.html)).
2. **Product is gated** — it's individually marked *Prescription required*, or it's in an **Allowed Category** ([Product & Category Setup](https://wpdoc.webkul.com/medical-prescription/documentation/product-setup.html)).
3. **Display position** — a position is selected (not *Disabled*) for that page ([Labels & Display](https://wpdoc.webkul.com/medical-prescription/documentation/configuration-labels-display.html)).

### I selected no categories — why aren't all products gated?
Empty **Allowed Categories** does **not** mean "all products." With nothing selected, only products individually marked *Prescription required* are gated. See [Product & Category Setup](https://wpdoc.webkul.com/medical-prescription/documentation/product-setup.html).

### A My Account tab (My Prescriptions / My Pill Box) shows a 404.
Flush rewrite rules: go to **Settings → Permalinks** and click **Save Changes** once. This usually happens right after install or an update.

---

## Uploads

### Which file types can customers upload?
Any of **JPG/JPEG, PNG, PDF, DOC/DOCX** — you choose which are allowed on the [General](https://wpdoc.webkul.com/medical-prescription/documentation/configuration-general.html) tab. Max **10 MB** per file.

### Can a customer upload more than one file?
Yes, if **Enable Multiple Files Upload** is on. Set the maximum with **Number of Files Allowed** (1–10).

### Does it work with the new Cart/Checkout Blocks?
Yes. The box is injected into the block layout and the upload requirement is enforced at the API level, as well as on the classic shortcode cart/checkout.

### Can customers bypass the requirement?
No. On a gated order, checkout is blocked until a file is attached (or, with [Attach Later](https://wpdoc.webkul.com/medical-prescription/documentation/attach-later-reupload.html), the order is held until they upload). Uploads are also validated by content, not just extension.

---

## Review &amp; approval

### Where do I review prescriptions?
On the admin **Orders** review desk. Filter to **Pending**, open each order, read the upload, and **Approve** or **Reject**. See [Order Management](https://wpdoc.webkul.com/medical-prescription/documentation/admin-order-management.html).

### What happens when I reject one?
The order's prescription status becomes **Rejected**. If **Re‑Upload If Rejected** is enabled, the customer can submit a new file, returning it to **Pending**. See [Attach Later & Re‑Upload](https://wpdoc.webkul.com/medical-prescription/documentation/attach-later-reupload.html).

### Can I keep an audit trail?
Yes — enable **Order Notes on Status Change** ([General](https://wpdoc.webkul.com/medical-prescription/documentation/configuration-general.html)) to log every approve/reject/upload as an order note.

---

## OCR &amp; AI

### Do I have to use OCR or AI?
No. Both are **optional** aids. The plugin works fully without them, and a human still approves every prescription. See [OCR & AI](https://wpdoc.webkul.com/medical-prescription/documentation/configuration-ocr-ai.html).

### Is the prescription image sent to a third party?
On‑device OCR runs in the browser — nothing leaves your server. The **AI fallback** sends the image to Google Gemini **only** when it's enabled *and* OCR is weak. Review your data‑privacy obligations before enabling AI for real patient data.

### Do I need to pay for the AI?
Gemini has a **free tier** (get a key at [aistudio.google.com](https://aistudio.google.com)). High volumes may incur cost per Google's pricing.

---

## Emails

### Customers/admin aren't getting emails.
1. Confirm the toggles are on ([Notifications](https://wpdoc.webkul.com/medical-prescription/documentation/configuration-notifications.html)).
2. WordPress default mail is often unreliable — install a transactional **SMTP** plugin and re‑test. See [Email Notifications](https://wpdoc.webkul.com/medical-prescription/documentation/email-notifications.html).

---

## Compatibility

### What versions are supported?
WordPress **6.7–6.9**, WooCommerce **10.0–10.7**, PHP **7.4–8.3**. HPOS and Cart/Checkout Blocks are supported.

### Will it work with my theme?
It's built for standard WooCommerce themes. If your theme heavily customizes the product/cart/checkout templates, use the **display position** options to place the box where it fits, or [contact support](https://webkul.uvdesk.com/).

---

## Still need help?

- 🎟 **Support Portal:** <https://webkul.uvdesk.com/>
- 📧 **Email:** [support@webkul.com](mailto:support@webkul.com)
- 🎫 **Ticket:** <https://webkul.com/ticket/>
