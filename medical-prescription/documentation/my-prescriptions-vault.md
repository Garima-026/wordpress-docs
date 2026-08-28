---
title: My Prescriptions Vault
source: https://wpdoc.webkul.com/medical-prescription/documentation/my-prescriptions-vault.html
---

# My Prescriptions Vault

The plugin adds customer‑facing areas to **My Account** so shoppers can track everything they've submitted and manage prescriptions after ordering.

<a class="doc-image-link" href="./assets/my-account-login.webp"><img src="./assets/my-account-login.webp" alt="WooCommerce My Account area" /></a>

---

## My Account tabs added

Depending on which features you've enabled, the plugin adds these tabs to the WooCommerce **My Account** menu:

| Tab | Endpoint | Purpose |
| --- | --- | --- |
| **My Prescriptions** | `my-prescriptions` | The prescription vault — history and status of every prescription the customer has uploaded. |
| **Medical Records** | `wkwc-medical-records` | A medical‑records area for the customer's documents. |
| **My Pill Box** | `my-pill-box` | Family health folders for one‑click re‑ordering *(only when the [Pill Box feature](https://wpdoc.webkul.com/medical-prescription/documentation/my-pill-box.html) is enabled)*. |

---

## What customers can do in the vault

- **See every prescription** they've submitted, across all their orders.
- **Check the status** of each — *Attachment Pending, Pending, Approved,* or *Rejected*. See [Prescription Statuses](https://wpdoc.webkul.com/medical-prescription/documentation/prescription-statuses.html).
- **Upload a pending prescription** for orders placed with [Attach Later](https://wpdoc.webkul.com/medical-prescription/documentation/attach-later-reupload.html).
- **Re‑upload** a new file when a prescription was rejected (if re‑upload is enabled).

This gives customers a single, self‑service place to manage their prescriptions — reducing "where's my order?" support tickets while a prescription is under review.

---

## Endpoints &amp; permalinks

The tabs above are WordPress **rewrite endpoints** registered under your My Account page. The plugin refreshes them automatically on activation and after updates.

::: tip If a tab shows a 404
Right after installing or updating, go to **Settings → Permalinks** and click **Save Changes** once. This flushes WordPress rewrite rules so the new endpoints resolve.
:::

---

## Related

- Collecting the upload in the first place → [Uploading a Prescription](https://wpdoc.webkul.com/medical-prescription/documentation/customer-upload-flow.html)
- Uploading after ordering → [Attach Later & Re‑Upload](https://wpdoc.webkul.com/medical-prescription/documentation/attach-later-reupload.html)
- One‑click re‑ordering of saved medicines → [My Pill Box](https://wpdoc.webkul.com/medical-prescription/documentation/my-pill-box.html)
