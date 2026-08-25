const CONTENT_ID = "first-diagram-is-a-liar";
const CONTENT_VERSION = "v0.5";
const diagrams = () => Array.from(document.querySelectorAll("[data-diagram-id]"));

function track(name, parameters = {}) {
  if (typeof window.gtag === "function") window.gtag("event", name, parameters);
}

function campaignParameters() {
  const params = new URLSearchParams(window.location.search);
  return ["utm_source", "utm_medium", "utm_campaign", "utm_content"]
    .reduce((values, key) => {
      const value = params.get(key);
      if (value) values[key] = value.slice(0, 100);
      return values;
    }, {});
}

function showFallback(card, error) {
  const status = card.querySelector("[data-diagram-status]");
  const fallback = card.querySelector(".diagram-fallback");
  const block = card.querySelector(".mermaid");
  if (status) status.textContent = "Live render unavailable — static fallback shown";
  if (fallback) fallback.hidden = false;
  if (block) {
    block.classList.add("mermaid--fallback");
    block.setAttribute("aria-hidden", "true");
  }
  console.warn("Mermaid diagram fallback active", error);
}

function showLive(card) {
  const status = card.querySelector("[data-diagram-status]");
  const fallback = card.querySelector(".diagram-fallback");
  if (status) status.textContent = "Live Mermaid render";
  if (fallback) fallback.hidden = true;
}

function diagramAction(link) {
  const card = link.closest("[data-diagram-id]");
  if (!card) return;
  const action = link.hasAttribute("download")
    ? link.textContent.toLowerCase().includes("svg") ? "download_svg" : "download_source"
    : link.textContent.toLowerCase().includes("copy") ? "copy_source"
    : link.textContent.toLowerCase().includes("canonical") ? "view_canonical"
    : "view_fallback";
  track("diagram_action", {
    diagram_id: card.dataset.diagramId,
    action,
    content_id: CONTENT_ID,
    content_version: CONTENT_VERSION,
  });
}

function wireControls() {
  diagrams().forEach((card) => {
    const source = card.querySelector("[data-source]");
    const copy = card.querySelector("[data-copy-diagram]");
    if (!source || !copy) return;
    copy.addEventListener("click", async () => {
      track("diagram_action", {
        diagram_id: card.dataset.diagramId,
        action: "copy_source",
        content_id: CONTENT_ID,
        content_version: CONTENT_VERSION,
      });
      try {
        await navigator.clipboard.writeText(source.textContent.trim());
        copy.textContent = "Copied";
        setTimeout(() => { copy.textContent = "Copy source"; }, 1600);
      } catch (error) {
        copy.textContent = "Copy unavailable";
        console.warn("Diagram source copy unavailable", error);
      }
    });
  });
}

function wireDiagramViews() {
  if (!("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver((entries, current) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const card = entry.target;
      track("diagram_view", {
        diagram_id: card.dataset.diagramId,
        content_id: CONTENT_ID,
        content_version: CONTENT_VERSION,
      });
      current.unobserve(card);
    });
  }, { threshold: 0.35 });
  diagrams().forEach((card) => observer.observe(card));
}

async function renderDiagrams() {
  const cards = diagrams();
  const blocks = cards.map((card) => card.querySelector(".mermaid")).filter(Boolean);
  if (!blocks.length) return;

  try {
    const { default: mermaid } = await import("https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs");
    const styles = getComputedStyle(document.body);
    const value = (name, fallback) => styles.getPropertyValue(name).trim() || fallback;
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: "base",
      themeVariables: {
        primaryColor: value("--color-surface", "#111827"),
        primaryTextColor: value("--color-fg", "#e5e7eb"),
        primaryBorderColor: value("--color-accent", "#c46a2c"),
        lineColor: value("--color-accent", "#c46a2c"),
        secondaryColor: value("--color-surface-soft", "#181f26"),
        tertiaryColor: value("--color-surface-soft", "#181f26"),
        textColor: value("--color-fg", "#e5e7eb"),
        fontFamily: value("--font-body", '"DM Sans", system-ui, sans-serif'),
      },
      flowchart: { curve: "basis", nodeSpacing: 60, rankSpacing: 70 },
    });
    await mermaid.run({ nodes: blocks });
    cards.forEach(showLive);
    track("diagram_render", {
      diagram_count: blocks.length,
      content_id: CONTENT_ID,
      content_version: CONTENT_VERSION,
    });
  } catch (error) {
    cards.forEach((card) => showFallback(card, error));
  }
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link || !link.href) return;
  const url = new URL(link.href, window.location.href);
  const provider = link.dataset.referralProvider;
  const host = url.hostname;

  if (link.closest("[data-diagram-id]")) diagramAction(link);

  if (provider || host === "replit.com" || host === "mermaidchart.cello.so" || host === "ko-fi.com") {
    track("referral_click", {
      provider: provider || (host === "replit.com" ? "replit" : host === "ko-fi.com" ? "ko-fi" : "mermaid"),
      destination: host,
      content_id: CONTENT_ID,
      content_version: CONTENT_VERSION,
    });
    return;
  }

  if (host === "mermaid.ai") {
    track("provider_click", {
      provider: "mermaid",
      destination: "mermaid.ai",
      content_id: CONTENT_ID,
      content_version: CONTENT_VERSION,
    });
    return;
  }

  if (link.dataset.primaryCta) {
    track("cta_click", {
      surface: link.dataset.surface || "article",
      destination: host,
      content_id: CONTENT_ID,
      content_version: CONTENT_VERSION,
    });
  } else if (url.origin !== window.location.origin) {
    track("outbound_click", {
      destination_host: host,
      destination_path: url.pathname,
      content_id: CONTENT_ID,
      content_version: CONTENT_VERSION,
    });
  }
});

function start() {
  const campaign = campaignParameters();
  if (Object.keys(campaign).length >= 4) {
    track("campaign_landing", {
      content_id: CONTENT_ID,
      content_version: CONTENT_VERSION,
      ...campaign,
    });
  }
  wireControls();
  wireDiagramViews();
  renderDiagrams();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start, { once: true });
} else {
  start();
}