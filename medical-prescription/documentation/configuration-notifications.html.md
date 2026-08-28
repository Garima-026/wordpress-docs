---
title: Notifications
source: https://wpdoc.webkul.com/medical-prescription/documentation/configuration-notifications.html
---

# Notifications

The **Notifications** tab controls the automatic emails sent when a prescription is uploaded or approved. These toggles work together with the plugin's WooCommerce email templates — see [Email Notifications](https://wpdoc.webkul.com/medical-prescription/documentation/email-notifications.html) for the full list and how to customize each email.

---

## Settings

### Enable Admin Email Notifications
Send an email to the store admin whenever a customer **uploads a prescription** on an order. Use this so your review team knows a new prescription is waiting.

> **Default:** Off. Sends the *"New Order with Prescription Attached"* email to the admin address.

### Enable Customer Email Notifications
Send an email to the **customer** when the admin **approves** their prescription (and for order confirmation of a prescription order). Keeps buyers informed that their order can now proceed.

> **Default:** Off. Sends the customer‑facing prescription status / order emails.

---

## How the emails fit together

| Toggle | Email sent | Recipient | Trigger |
| --- | --- | --- | --- |
| Admin Email Notifications | New Order with Prescription Attached | Store admin | A gated order is placed with a prescription |
| Customer Email Notifications | Processing Prescription Attached order | Customer | Gated order placed |
| Customer Email Notifications | Medical Prescription Attachment Notification | Customer | Admin changes the prescription status (e.g. approved) |

All three templates live under **WooCommerce → Settings → Emails**, where you can edit the subject, heading, and content. Details in [Email Notifications](https://wpdoc.webkul.com/medical-prescription/documentation/email-notifications.html).

---

## Recommended

- **Admin notifications: On** — so no prescription sits unreviewed.
- **Customer notifications: On** — so buyers know when they're approved (or need to re‑upload after a rejection).
- Pair with **Enable Order Notes on Status Change** (on the [General](https://wpdoc.webkul.com/medical-prescription/documentation/configuration-general.html) tab) for an internal audit trail in addition to the emails.

::: tip Deliverability
Prescription emails rely on your WordPress mail setup. If emails aren't arriving, install a transactional SMTP plugin so WooCommerce mail is delivered reliably.
:::
