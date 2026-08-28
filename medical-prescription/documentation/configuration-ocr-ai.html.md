---
title: OCR & AI
source: https://wpdoc.webkul.com/medical-prescription/documentation/configuration-ocr-ai.html
---

# OCR &amp; AI

*(Version 1.3.x)* The **OCR & AI** tab turns on automatic **text recognition** for uploaded prescriptions, so your review team can read the doctor, date, patient, and prescribed medicines without deciphering every scan by hand. For difficult or handwritten prescriptions, an optional **AI fallback** escalates the image to Google Gemini.

::: tip Optional feature
OCR and AI are **completely optional**. The plugin works fully without them — they exist to speed up and assist manual review, not replace it. A human still approves or rejects every prescription.
:::

---

## How reading works

1. When a prescription is opened in the viewer, **on‑device OCR** (Tesseract) runs in the browser and extracts text — no server round‑trip, no image sent anywhere.
2. The plugin pulls out structured fields (doctor name, registration/licence number, date, patient) and any medicine names it can match.
3. If the result is **weak** — blank text, confidence below your threshold, or missing fields — and the **AI fallback** is enabled, the image is sent to **Gemini Vision** to read it (including handwriting) and return structured details.
4. Staff see the extracted fields and detected medicines (with in‑stock matching) in the **AI OCR analysis workspace**, edit anything that's off, and then approve or reject.

---

## Settings

### Enable AI OCR Analysis Workspace
Turns on the AI‑powered OCR workspace inside the prescription viewer, where extracted text and detected medicines are shown for each upload.

> **Default:** Off.

### OCR Languages
The Tesseract language code(s) used for recognition, joined with `+`. For example `eng` for English, or `eng+hin` for English and Hindi. The matching language data must be available to the OCR engine.

> **Default:** `eng`.

### OCR Confidence Threshold
A score from **0–100**. Results below this overall confidence are flagged for manual review (and, if enabled, trigger the AI fallback). Lower values trust the OCR more; higher values demand cleaner scans.

> **Default:** `60`.

---

## AI fallback (handwriting)

### Enable AI Fallback (Gemini Vision)
When on‑device OCR is weak, send the prescription image to **Google Gemini** to read handwriting and extract structured details. The image leaves your server **only** in that case.

> **Default:** Off. Requires a Gemini API key.

### Gemini API Key
Your Google AI Studio (Gemini) API key. A **free tier** is available at [aistudio.google.com](https://aistudio.google.com). The key is stored server‑side and is **never** sent to the browser — the settings field shows a masked "saved" placeholder once set, and you leave it blank to keep the existing key.

### AI Model
The Gemini model id used to read prescriptions. Change only if your key targets a different model.

> **Default:** `gemini-2.0-flash`.

---

## What the AI extracts

The AI returns structured JSON for the viewer, including:

- **Doctor** name and **registration / licence number**
- **Date** as written on the script
- **Patient** name
- **Medicines** — each with *name*, *dose*, and *frequency*
- A **confidence** score and an **illegible** flag when the image can't be read reliably

The prompt instructs the model to extract **only what is visibly written** and never to invent drug names — anything uncertain is left blank and flagged, so review stays trustworthy.

---

## Privacy &amp; cost

- **On‑device OCR** runs in the customer's / admin's browser — nothing is uploaded to a third party.
- **AI fallback** sends the image to Google Gemini **only** when OCR is weak and the fallback is enabled. Review your obligations before enabling it for real patient data.
- Gemini has a free tier; heavy volumes may incur cost per Google's pricing. The plugin retries transient errors (rate limits, temporary server errors) automatically.

::: warning Assistive, not authoritative
OCR and AI output is a **reading aid**. Always confirm the prescription visually before approving. The plugin is designed so a human makes the final decision on every order.
:::
