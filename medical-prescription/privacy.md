---
title: Privacy
source: https://wpdoc.webkul.com/medical-prescription/privacy.html
---

# Privacy

This page describes how **this documentation site** (`wpdoc.webkul.com/medical-prescription/`) handles data. It does not describe the Medical Prescription Attachment for WooCommerce plugin itself, which runs on your own WordPress installation and stores its data in your own database, under your control.

## What this site collects

This documentation is a **static website**. It has no accounts, no login, no comment system, no contact form, and no newsletter signup. There is nothing on these pages that asks you to submit personal information, and nothing that transmits information about you to Webkul.

**No analytics or advertising trackers are loaded.** These pages do not include Google Analytics, Google Tag Manager, advertising pixels, session recording, or any third-party tracking script.

## Browser storage

The site stores exactly one value in your browser's `localStorage`, under the key `vuepress-color-scheme`. It records whether you chose the light or dark theme so your preference survives page navigation. It stays in your browser, is never transmitted anywhere, and you can clear it at any time through your browser's site-data settings. No advertising or identification cookies are set.

## Server logs

The site is served through standard web hosting and content delivery infrastructure. As with any website, those providers process ordinary technical request data — IP address, timestamp, requested URL, user agent, and referrer — for the purpose of delivering pages, caching, and protecting against abuse. Webkul does not use these logs to build a profile of you.

## Links to other sites

These pages link to external sites including CodeCanyon, the live demo, the Webkul store, and the support portal. Once you follow a link, the privacy practices of that destination apply. This page does not cover them.

## Prescription data and the plugin

This is the part that matters most for a prescription plugin, so it is stated plainly.

If you install the plugin, **every uploaded prescription file is stored on your own WordPress site**, in your own uploads directory and database, alongside the order it belongs to. Webkul does not receive, proxy, or have access to those files through the plugin, and they are never sent to this documentation site.

Prescription uploads are health data about an identifiable person. As the site operator you are the data controller for them: securing the uploads directory, restricting which administrators can view a prescription, honouring access and erasure requests, and meeting the retention rules that apply to prescription records in your jurisdiction are all your responsibility. Applicable law may include the GDPR in the EU/UK, HIPAA in the United States, and national pharmacy regulations that govern who may dispense prescription-only medicines and how long the prescription must be retained.

**The optional OCR and AI features send data off-site when you enable them.** The AI fallback for handwritten prescriptions transmits the uploaded prescription image to Google's Gemini Vision API for analysis, using the API key you supply. If you turn that feature on, a third party processes prescription images on your behalf, and you are responsible for the lawful basis, the customer disclosure, and the data-processing agreement that requires. The feature is off by default; see [OCR & AI](./documentation/configuration-ocr-ai.md) before enabling it.

## Company privacy policy

Webkul Software's corporate privacy policy, covering purchases, support tickets, and other direct interactions with Webkul, is published at [webkul.com/privacy-policy](https://webkul.com/privacy-policy/).

## Questions

Privacy questions about this documentation site or about Webkul's handling of your data can be sent to [support@webkul.com](mailto:support@webkul.com) or raised through the [support portal](https://webkul.uvdesk.com/). Postal address: Webkul Software, H-28, ARV Park, Sector 63, Noida, Uttar Pradesh 201301, India.
