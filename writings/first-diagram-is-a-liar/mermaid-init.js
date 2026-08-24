const diagrams = () => Array.from(document.querySelectorAll("[data-diagram-id]"));

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

function wireControls() {
  diagrams().forEach((card) => {
    const source = card.querySelector("[data-source]");
    const copy = card.querySelector("[data-copy-diagram]");
    if (!source || !copy) return;
    copy.addEventListener("click", async () => {
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
    track("diagram_render", { diagram_count: blocks.length, content_version: "v1.0" });
  } catch (error) {
    cards.forEach((card) => showFallback(card, error));
  }
}

function track(name, parameters = {}) {
  if (typeof window.gtag === "function") window.gtag("event", name, parameters);
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link || !link.href) return;
  const url = new URL(link.href, window.location.href);
  track(url.origin !== window.location.origin ? "outbound_click" : "cta_click", {
    content_version: "v1.0",
    destination_host: url.host,
    destination_path: url.pathname,
    link_text: link.textContent.trim().slice(0, 80),
  });
});

function start() {
  wireControls();
  renderDiagrams();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start, { once: true });
} else {
  start();
}