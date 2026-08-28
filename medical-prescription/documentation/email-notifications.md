---
title: Email Notifications
source: https://wpdoc.webkul.com/medical-prescription/documentation/email-notifications.html
---

# Email Notifications

The plugin ships **three** WooCommerce emails that keep customers and your team in the loop. Turn them on with the toggles on the [Notifications](https://wpdoc.webkul.com/medical-prescription/documentation/configuration-notifications.html) tab, and customize their wording under **WooCommerce → Settings → Emails**.

---

## The three emails

### 1. New Order with Prescription Attached → *Admin*
Alerts your store that a gated order has been placed, so a reviewer can pick it up.

| | |
| --- | --- |
| **Recipient** | Store admin address |
| **Trigger** | A prescription order is placed |
| **Enabled by** | *Enable Admin Email Notifications* |
| **Default subject** | *New order #{order_number} Received With Attached Medical Prescription* |
| **Default heading** | *New Order: #{order_number} With Attached Medical Prescription* |

### 2. Processing Prescription Attached Order → *Customer*
Confirms to the buyer that their prescription order was received.

| | |
| --- | --- |
| **Recipient** | Customer (billing email) |
| **Trigger** | A prescription order is placed |
| **Enabled by** | *Enable Customer Email Notifications* |
| **Default subject** | *Your order has been received!* |
| **Default heading** | *Thank you for your order* |

### 3. Medical Prescription Attachment Notification → *Customer*
Tells the customer when their prescription's **status changes** — most importantly, when it's **approved**.

| | |
| --- | --- |
| **Recipient** | Customer |
| **Trigger** | Admin changes the prescription status |
| **Enabled by** | *Enable Customer Email Notifications* |
| **Default subject** | *Medical Prescription Status* |
| **Default heading** | *Medical Prescription Attachment Notification* |

> Each email is sent **once** per event (the plugin marks the order to avoid duplicates).

---

## Turning them on

1. Go to the plugin's **Configuration → [Notifications](https://wpdoc.webkul.com/medical-prescription/documentation/configuration-notifications.html)** tab.
2. Enable **Admin Email Notifications** and/or **Customer Email Notifications**.
3. Save.

---

## Customizing the emails

All three appear under **WooCommerce → Settings → Emails**, alongside WooCommerce's own emails. For each you can edit:

- **Subject** and **heading**
- **Email type** (HTML / plain text)
- **Additional content**

They use WooCommerce's standard email template, so they automatically match the header, footer, and colors you've set for all store emails.

---

## Recommended setup

- **Admin notifications: On** — nothing sits unreviewed.
- **Customer notifications: On** — buyers know when they're approved, or when they need to [re‑upload](https://wpdoc.webkul.com/medical-prescription/documentation/attach-later-reupload.html) after a rejection.
- Enable **[order notes](https://wpdoc.webkul.com/medical-prescription/documentation/configuration-general.html)** too, so status changes are also recorded on the order itself.

::: tip Not receiving emails?
WordPress' default mail can be unreliable. If emails don't arrive, set up a transactional **SMTP** plugin so WooCommerce mail is delivered dependably, then re‑test with a real order.
:::

---

## Related

- Toggles and recommendations → [Notifications](https://wpdoc.webkul.com/medical-prescription/documentation/configuration-notifications.html)
- What drives status‑change emails → [Prescription Statuses](https://wpdoc.webkul.com/medical-prescription/documentation/prescription-statuses.html)
