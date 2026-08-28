---
title: Order Management
source: https://wpdoc.webkul.com/medical-prescription/documentation/admin-order-management.html
---

# Order Management

The admin side of the plugin is a **review desk**: a screen listing every prescription order, and a viewer for reading each upload and deciding **Approve** or **Reject**.

> The screens below live in your **WordPress admin**. This guide describes them in detail; screenshots are storefront‑only in this documentation.

---

## Where to find it

Open the plugin's admin area (**WooCommerce Prescription**). It has three tabs:

| Tab | What it shows |
| --- | --- |
| **Prescription Products** | Every product, with its prescription‑required status; bulk enable/disable gating. |
| **Orders** | The review desk — all orders that carry a prescription. |
| **Configuration** | All plugin settings (General, Notifications, OCR & AI, Labels & Display, Features). |

The Configuration tab opens at `admin.php?page=wkwc-pa-products&tab=wkwc-pa-configuration`.

---

## The Orders review desk

The **Orders** tab lists prescription orders with, for each:

- **Order number** and **date**
- **Order status** (WooCommerce)
- **Prescription status** — *Attachment Pending, Pending, Approved,* or *Rejected*
- **Order total**
- A **View / review** action to open the prescription

You can **filter** the list by order status and by prescription status (e.g. show only *Pending* to work through your review queue), **search** by order, and **sort** by date or status. **Bulk actions** let you approve or reject several at once.

---

## Reviewing a prescription

1. Open a **Pending** order from the review desk (or from the order detail page).
2. The **prescription viewer** shows the uploaded file(s) — images inline, PDFs/documents as attachments.
3. If the [OCR & AI workspace](https://wpdoc.webkul.com/medical-prescription/documentation/configuration-ocr-ai.html) is enabled, you also see extracted **doctor, registration number, date, patient,** and **detected medicines** (with in‑stock matching and confidence). Edit any field that's off.
4. Decide:
   - **Approve** — the prescription is valid; the order can proceed.
   - **Reject** — the document is invalid, expired, or unreadable.

Your decision updates the order's prescription status immediately.

---

## Approving &amp; rejecting

- **Approve** sets the prescription to **Approved**. If [customer emails](https://wpdoc.webkul.com/medical-prescription/documentation/configuration-notifications.html) are on, the customer is notified their order can proceed.
- **Reject** sets it to **Rejected**. If [re‑upload](https://wpdoc.webkul.com/medical-prescription/documentation/attach-later-reupload.html) is enabled, the customer can submit a new file, which returns the order to **Pending**.

You can act from the **order list** (including in bulk) or from an individual **order detail** page.

---

## Order notes (audit trail)

When **Enable Order Notes on Status Change** is on (see [General Settings](https://wpdoc.webkul.com/medical-prescription/documentation/configuration-general.html)), every change is logged as a WooCommerce order note, for example:

- *"Prescription approved by admin from list table."*
- *"Prescription rejected by admin."*
- *"Prescription unapproved (set to pending) by admin from list table."*

These notes appear in the order's activity panel, giving you a timestamped record of who changed what — useful for compliance and dispute resolution.

---

## Product gating from the admin

On the **Prescription Products** tab you can see which products require a prescription and **bulk enable or disable** the requirement, without editing each product one by one. To gate by category instead, use **Allowed Categories** on the [General](https://wpdoc.webkul.com/medical-prescription/documentation/configuration-general.html) tab. Full guidance in [Product & Category Setup](https://wpdoc.webkul.com/medical-prescription/documentation/product-setup.html).

---

## A typical review workflow

1. Get the "new prescription order" [email](https://wpdoc.webkul.com/medical-prescription/documentation/email-notifications.html) (or check the desk).
2. Open the **Orders** tab, filter to **Pending**.
3. Open each order, read the prescription (OCR/AI assists if enabled).
4. **Approve** valid ones; **Reject** invalid ones.
5. Fulfil approved orders as normal; rejected customers re‑upload if enabled.
