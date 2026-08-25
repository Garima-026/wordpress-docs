/**
 * MCP server for the Webkul WordPress documentation portal.
 * Streamable HTTP transport, deployable to Cloudflare Workers.
 *
 * Exposes the same four operations as the browser-side WebMCP tools, backed by
 * the same live documentation URLs. Read-only and unauthenticated, because the
 * content it serves is public.
 *
 * Deploy:  cd mcp-server && npx wrangler deploy
 * Then publish the server card by regenerating with the endpoint set:
 *   MCP_ENDPOINT=https://<your-worker-url>/mcp node ../build-root-pages.mjs
 */
const ORIGIN = "https://wpdoc.webkul.com";
const MARKET = ORIGIN + "/woocommerce-marketplace";
const NAME = "webkul-wordpress-docs";
const VERSION = "1.0.0";
const PROTOCOL_VERSION = "2025-06-18";

async function fetchText(url) {
  const r = await fetch(url, { headers: { Accept: "text/markdown, text/plain, */*" } });
  if (!r.ok) throw new Error(`HTTP ${r.status} for ${url}`);
  return r.text();
}

function parseIndex(body, section) {
  let scope = body;
  if (section) {
    const parts = body.split(/^## /m);
    scope = parts.filter((p) => p.toLowerCase().startsWith(section.toLowerCase())).join("\n");
  }
  return [...scope.matchAll(/^- \[([^\]]+)\]\(([^)]+)\)(?::\s*(.*))?$/gm)].map((m) => ({
    title: m[1],
    url: m[2],
    description: (m[3] || "").trim(),
  }));
}

const TOOLS = [
  {
    name: "search_webkul_documentation",
    description:
      "Full-text search across the WooCommerce Multi-Vendor Marketplace documentation. Returns matching passages with their source page URL.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Words to search for." },
        limit: { type: "integer", minimum: 1, maximum: 20, default: 5 },
      },
      required: ["query"],
    },
    async run({ query, limit = 5 }) {
      const terms = String(query || "").toLowerCase().trim().split(/\s+/).filter(Boolean);
      if (!terms.length) return "Provide a non-empty query.";
      const body = await fetchText(`${MARKET}/llms-full.txt`);
      const hits = [];
      for (const sec of body.split(/\n---\n/)) {
        const src = sec.match(/<!-- source: (\S+) -->/);
        if (!src) continue;
        for (const raw of sec.split(/\n\s*\n/)) {
          const passage = raw.replace(/<!-- source:[^>]*-->/g, "").trim();
          if (passage.length < 40) continue;
          const low = passage.toLowerCase();
          let matched = 0;
          let occurrences = 0;
          for (const t of terms) {
            const n = low.split(t).length - 1;
            if (n > 0) matched++;
            occurrences += n;
          }
          if (!matched) continue;
          let score = occurrences / Math.sqrt(passage.length);
          if (/^#{1,6}\s/.test(passage)) score *= 1.5;
          if (matched === terms.length) score += 1000;
          hits.push({ score, matched, source: src[1], passage: passage.slice(0, 700) });
        }
      }
      if (!hits.length) return `No passage matched "${query}".`;
      hits.sort((a, b) => b.score - a.score);
      const exact = hits.filter((h) => h.matched === terms.length);
      const head = exact.length
        ? `Found ${exact.length} passage(s) containing every term; showing ${Math.min(limit, exact.length)}.`
        : `No passage contained every term. Showing the ${Math.min(limit, hits.length)} closest partial match(es) — treat them as leads, not answers.`;
      return (
        head +
        "\n\n" +
        hits
          .slice(0, limit)
          .map((h, i) => `## Result ${i + 1}\nSource: ${h.source}\n\n${h.passage}`)
          .join("\n\n")
      );
    },
  },
  {
    name: "get_webkul_documentation_page",
    description: "Fetch one marketplace documentation page as raw markdown, by slug.",
    inputSchema: {
      type: "object",
      properties: { page: { type: "string", description: "Page slug, e.g. 'installation'." } },
      required: ["page"],
    },
    async run({ page }) {
      const slug = String(page || "").trim().replace(/^\/+|\.md$/g, "");
      if (!/^[a-z0-9-]+$/i.test(slug)) return "Invalid page slug.";
      for (const url of [`${MARKET}/documentation/${slug}.md`, `${MARKET}/${slug}.md`]) {
        try {
          return `Source: ${url}\n\n${await fetchText(url)}`;
        } catch {}
      }
      return `No page '${slug}'. Call list_webkul_documentation_pages for valid slugs.`;
    },
  },
  {
    name: "list_webkul_documentation_pages",
    description: "List the marketplace documentation pages with descriptions.",
    inputSchema: { type: "object", properties: {} },
    async run() {
      const items = parseIndex(await fetchText(`${MARKET}/llms.txt`), "Documentation");
      return (
        `${items.length} pages:\n\n` +
        items
          .map((i) => `- ${i.url.replace(/^.*\//, "").replace(/\.md$/, "")} — ${i.title}${i.description ? ": " + i.description : ""}`)
          .join("\n")
      );
    },
  },
  {
    name: "list_webkul_plugin_guides",
    description: "List every Webkul WordPress/WooCommerce plugin documented on this site.",
    inputSchema: { type: "object", properties: {} },
    async run() {
      const items = parseIndex(await fetchText(`${ORIGIN}/llms.txt`), "Plugin documentation");
      return `${items.length} guides:\n\n` + items.map((i) => `- ${i.title} — ${i.url}`).join("\n");
    },
  },
];

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Mcp-Session-Id, MCP-Protocol-Version",
};

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...CORS },
  });

const rpc = (id, result) => ({ jsonrpc: "2.0", id, result });
const rpcErr = (id, code, message) => ({ jsonrpc: "2.0", id, error: { code, message } });

async function handleRpc(msg) {
  const { id, method, params } = msg || {};
  switch (method) {
    case "initialize":
      return rpc(id, {
        protocolVersion: PROTOCOL_VERSION,
        capabilities: { tools: { listChanged: false } },
        serverInfo: { name: NAME, version: VERSION },
        instructions:
          "Read-only access to Webkul's WooCommerce Multi-Vendor Marketplace documentation. Search before fetching whole pages. If the docs do not answer a question, say so and point to https://webkul.uvdesk.com/ rather than guessing.",
      });
    case "notifications/initialized":
      return null;
    case "ping":
      return rpc(id, {});
    case "tools/list":
      return rpc(id, {
        tools: TOOLS.map(({ name, description, inputSchema }) => ({ name, description, inputSchema })),
      });
    case "tools/call": {
      const tool = TOOLS.find((t) => t.name === params?.name);
      if (!tool) return rpcErr(id, -32602, `Unknown tool: ${params?.name}`);
      try {
        const out = await tool.run(params.arguments || {});
        return rpc(id, { content: [{ type: "text", text: out }], isError: false });
      } catch (e) {
        return rpc(id, { content: [{ type: "text", text: `Error: ${e.message}` }], isError: true });
      }
    }
    default:
      return rpcErr(id, -32601, `Method not found: ${method}`);
  }
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });

    if (url.pathname === "/.well-known/mcp/server-card.json") {
      return json({
        serverInfo: { name: NAME, version: VERSION },
        protocolVersion: PROTOCOL_VERSION,
        transport: { type: "streamable-http", endpoint: `${url.origin}/mcp` },
        endpoint: `${url.origin}/mcp`,
        capabilities: { tools: { listChanged: false } },
        authentication: { type: "none" },
      });
    }

    if (url.pathname !== "/mcp") return json({ error: "Not found. MCP endpoint is /mcp" }, 404);
    if (request.method !== "POST")
      return json({ error: "Use POST with a JSON-RPC body." }, 405);

    let body;
    try {
      body = await request.json();
    } catch {
      return json(rpcErr(null, -32700, "Parse error"), 400);
    }

    if (Array.isArray(body)) {
      const out = (await Promise.all(body.map(handleRpc))).filter(Boolean);
      return out.length ? json(out) : new Response(null, { status: 202, headers: CORS });
    }
    const res = await handleRpc(body);
    return res ? json(res) : new Response(null, { status: 202, headers: CORS });
  },
};
