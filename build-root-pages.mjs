/**
 * Generates the domain-level pages for wpdoc.webkul.com that no single
 * product build owns:
 *
 *   about.html / contact.html / privacy.html   trust anchor pages
 *   woocommerce-marketplace.html               no-redirect shim (see below)
 *
 * The shim exists because GitHub Pages answers a directory path without a
 * trailing slash with a 301 whose body is a 49-character nginx notice.
 * Crawlers and audit tools that read the first response — rather than
 * following the redirect — therefore see an almost empty page instead of the
 * documentation. Publishing a real file at /woocommerce-marketplace.html
 * makes that path resolve to content with a 200, while /woocommerce-
 * marketplace/ keeps serving the directory index as before. The shim
 * declares the trailing-slash URL as canonical so search engines index one
 * copy only.
 *
 * Run from the repo root after syncing a product build:  node build-root-pages.mjs
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.dirname(new URL(import.meta.url).pathname);
const ORIGIN = "https://wpdoc.webkul.com";

/* ---------------- shared chrome ---------------- */

const STYLE = `
  :root { color-scheme: light dark; }
  * { box-sizing: border-box; }
  body { margin:0; padding:3rem 1.5rem; background:#fff; color:#2c3e50; line-height:1.65;
         font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; }
  main { max-width:46rem; margin:0 auto; }
  h1 { font-size:1.9rem; margin:0 0 1rem; letter-spacing:-.02em; }
  h2 { font-size:1.15rem; margin:2.2rem 0 .6rem; }
  p, li { margin:0 0 .9rem; }
  a { color:#2b6be3; text-decoration:none; }
  a:hover { text-decoration:underline; }
  ul { padding-left:1.2rem; }
  .muted { color:#6b7785; font-size:.95rem; margin-top:2.5rem; }
  @media (prefers-color-scheme: dark) {
    body { background:#1b1b1f; color:#d6d6d8; } .muted { color:#9aa3ad; } a { color:#6ea1ff; }
  }
`;

const page = ({ slug, title, description, jsonld, body }) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} | Webkul WordPress Documentation</title>
<meta name="description" content="${description}">
<link rel="canonical" href="${ORIGIN}/${slug}.html">
${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>` : ""}
<style>${STYLE}</style>
</head>
<body>
<main>
${body}
<p class="muted"><a href="${ORIGIN}/">Documentation home</a> · <a href="${ORIGIN}/about.html">About</a> · <a href="${ORIGIN}/contact.html">Contact</a> · <a href="${ORIGIN}/privacy.html">Privacy</a></p>
</main>
</body>
</html>
`;

/* ---------------- Organization identity ---------------- */
// Sourced from Webkul's own published schema on https://webkul.com/.
const ORG = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Webkul Software",
    legalName: "Webkul Software Private Limited",
    url: "https://webkul.com/",
    logo: "https://cdnwebkul.webkul.com/wp-content/uploads/2021/08/webkul-logo-accent-sq.png",
    description:
        "Webkul builds B2B and B2C eCommerce, marketplace, hyperlocal, and mobile application products, and develops extensions for WooCommerce, Magento, Shopify, Odoo, and Bagisto.",
    foundingDate: "2010",
    address: {
        "@type": "PostalAddress",
        streetAddress: "H-28, ARV Park, Sector 63",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201301",
        addressCountry: "IN",
    },
    contactPoint: [
        {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "support@webkul.com",
            telephone: "+91-9870284067",
            url: "https://webkul.uvdesk.com/",
            availableLanguage: ["English"],
        },
        {
            "@type": "ContactPoint",
            contactType: "sales",
            email: "support@webkul.com",
            telephone: "+91-9870284067",
            url: "https://store.webkul.com/contacts/",
            availableLanguage: ["English"],
        },
    ],
    sameAs: [
        "https://www.facebook.com/webkul",
        "https://x.com/webkul",
        "https://www.instagram.com/webkul/",
        "https://in.linkedin.com/company/webkul",
        "https://www.youtube.com/c/webkul",
        "https://codecanyon.net/user/webkul",
    ],
};

/* ---------------- pages ---------------- */

const PAGES = [
    {
        slug: "about",
        title: "About",
        description:
            "About Webkul Software and the wpdoc.webkul.com documentation portal for Webkul's WordPress and WooCommerce plugins.",
        jsonld: ORG,
        body: `
  <h1>About</h1>
  <p><strong>wpdoc.webkul.com</strong> is the official documentation portal for Webkul's WordPress and WooCommerce plugins. Each plugin has its own guide covering installation, configuration, and day-to-day use, written for store owners setting up a site and for developers integrating a plugin into an existing WooCommerce store.</p>

  <h2>About Webkul</h2>
  <p>Webkul Software is an eCommerce software company founded in <strong>2010</strong> by Vipin Sahu, Vinay Yadav, and Prakash Sahu, headquartered in <strong>Noida, Uttar Pradesh, India</strong>. Webkul builds B2B and B2C eCommerce, marketplace, hyperlocal, and mobile application products, and develops extensions for platforms including WooCommerce, Magento, Shopify, Odoo, Bagisto, and UnoPim.</p>
  <p>Webkul is a CodeCanyon Featured Author at Author Level 10 and contributes to WooCommerce core. The full product catalogue and corporate information are published at <a href="https://webkul.com/">webkul.com</a>, and plugins are sold through <a href="https://store.webkul.com/">store.webkul.com</a>.</p>

  <h2>What is documented here</h2>
  <p>The portal covers marketplace and multi-vendor plugins, point of sale, barcode and inventory tooling, connectors for eBay, Shopify, QuickBooks, Bagisto and UnoPim, payment and tax integrations, wallet and pre-order systems, and more. Start from the <a href="${ORIGIN}/">documentation home</a> for the full list.</p>

  <h2>Machine-readable documentation</h2>
  <p>Guides are published for automated consumption as well as for people. The WooCommerce Multi-Vendor Marketplace guide exposes an agent index at <a href="${ORIGIN}/woocommerce-marketplace/llms.txt">llms.txt</a> and a single-file corpus at <a href="${ORIGIN}/woocommerce-marketplace/llms-full.txt">llms-full.txt</a>; any page there is available as raw markdown by appending <code>.md</code> to its URL.</p>`,
    },
    {
        slug: "contact",
        title: "Contact",
        description:
            "How to reach Webkul Software for support, sales, and licensing of its WordPress and WooCommerce plugins.",
        jsonld: ORG,
        body: `
  <h1>Contact</h1>
  <p>The plugins documented on this site are published and supported by <strong>Webkul Software</strong>.</p>

  <h2>Support</h2>
  <p>Support is handled through Webkul's ticket system, and is included with a plugin licence.</p>
  <ul>
    <li><strong>Support portal:</strong> <a href="https://webkul.uvdesk.com/">webkul.uvdesk.com</a> — installation problems, configuration questions, and bug reports</li>
    <li><strong>Email:</strong> <a href="mailto:support@webkul.com">support@webkul.com</a></li>
    <li><strong>Store contact form:</strong> <a href="https://store.webkul.com/contacts/">store.webkul.com/contacts</a></li>
  </ul>
  <p>When reporting a problem, include your WordPress and WooCommerce versions, the plugin name and version, and the exact steps that reproduce the issue.</p>

  <h2>Sales and licensing</h2>
  <ul>
    <li><strong>Plugin store:</strong> <a href="https://store.webkul.com/">store.webkul.com</a> — pricing, licence terms, and purchase</li>
    <li><strong>Company site:</strong> <a href="https://webkul.com/">webkul.com</a> — services, case studies, and enterprise enquiries</li>
  </ul>

  <h2>Company</h2>
  <p><strong>Webkul Software Private Limited</strong><br>
  H-28, ARV Park, Sector 63<br>
  Noida, Uttar Pradesh 201301<br>
  India</p>
  <p>Phone: <a href="tel:+919870284067">+91 9870284067</a><br>
  Email: <a href="mailto:support@webkul.com">support@webkul.com</a></p>
  <p>Webkul is also on <a href="https://in.linkedin.com/company/webkul">LinkedIn</a>, <a href="https://x.com/webkul">X</a>, <a href="https://www.facebook.com/webkul">Facebook</a>, <a href="https://www.instagram.com/webkul/">Instagram</a>, and <a href="https://www.youtube.com/c/webkul">YouTube</a>.</p>`,
    },
    {
        slug: "privacy",
        title: "Privacy",
        description:
            "How the wpdoc.webkul.com documentation portal handles data: no accounts, no forms, and no analytics or advertising trackers.",
        jsonld: ORG,
        body: `
  <h1>Privacy</h1>
  <p>This page describes how the documentation portal at <strong>wpdoc.webkul.com</strong> handles data. It does not describe the plugins themselves, which run on your own WordPress installation and store their data in your own database, under your control.</p>

  <h2>What this site collects</h2>
  <p>This portal is a <strong>static website</strong>. It has no accounts, no login, no comment system, no contact form, and no newsletter signup. Nothing on these pages asks you to submit personal information, and nothing transmits information about you to Webkul.</p>
  <p><strong>No analytics or advertising trackers are loaded.</strong> These pages do not include Google Analytics, Google Tag Manager, advertising pixels, session recording, or any third-party tracking script.</p>

  <h2>Browser storage</h2>
  <p>Plugin guides store a single value in your browser's <code>localStorage</code> recording whether you chose the light or dark theme, so the preference survives navigation. It stays in your browser, is never transmitted, and can be cleared through your browser's site-data settings. No advertising or identification cookies are set.</p>

  <h2>Server logs</h2>
  <p>The site is served through standard web hosting and content delivery infrastructure. As with any website, those providers process ordinary technical request data — IP address, timestamp, requested URL, user agent, and referrer — to deliver pages, cache them, and protect against abuse. Webkul does not use these logs to build a profile of you.</p>

  <h2>Links to other sites</h2>
  <p>These pages link to external sites including the Webkul store, live demos, the support portal, and CodeCanyon. Once you follow a link, the privacy practices of that destination apply.</p>

  <h2>Plugin data</h2>
  <p>If you install a plugin, the data it creates lives on <strong>your</strong> site. Webkul does not receive or have access to that data through the plugin. Responsibility for handling your customers' personal data under applicable law, including GDPR, rests with you as the site operator.</p>

  <h2>Company privacy policy</h2>
  <p>Webkul's corporate privacy policy, covering purchases, support tickets, and other direct interactions, is published at <a href="https://webkul.com/privacy-policy/">webkul.com/privacy-policy</a>.</p>
  <p>Privacy questions can be sent to <a href="mailto:support@webkul.com">support@webkul.com</a> or raised through the <a href="https://webkul.uvdesk.com/">support portal</a>. Postal address: Webkul Software, H-28, ARV Park, Sector 63, Noida, Uttar Pradesh 201301, India.</p>`,
    },
];

for (const p of PAGES) {
    fs.writeFileSync(path.join(ROOT, `${p.slug}.html`), page(p));
    console.log(`[root-pages] wrote ${p.slug}.html`);
}

/* ---------------- no-redirect shims ---------------- */

const SHIMS = ["woocommerce-marketplace"];
for (const slug of SHIMS) {
    const src = path.join(ROOT, slug, "index.html");
    if (!fs.existsSync(src)) {
        console.warn(`[root-pages] skip shim ${slug}: ${src} not found`);
        continue;
    }
    let html = fs.readFileSync(src, "utf8");
    const canonical = `${ORIGIN}/${slug}/`;
    html = html.replace(/<link rel="canonical"[^>]*>/g, "");
    html = html.replace(/<head>/, `<head><link rel="canonical" href="${canonical}">`);
    fs.writeFileSync(path.join(ROOT, `${slug}.html`), html);
    console.log(`[root-pages] wrote ${slug}.html (shim, canonical -> ${canonical})`);
}
