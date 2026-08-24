import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";

const styles = getComputedStyle(document.body);

const surface    = styles.getPropertyValue("--color-surface").trim()      || "#111827";
const surfaceSoft= styles.getPropertyValue("--color-surface-soft").trim() || "#181f26";
const fg         = styles.getPropertyValue("--color-fg").trim()           || "#e5e7eb";
const accent     = styles.getPropertyValue("--color-accent").trim()       || "#c46a2c";
const muted      = styles.getPropertyValue("--color-muted").trim()        || "#6b7280";
const fontBody   = styles.getPropertyValue("--font-body").trim()          ||
  '"DM Sans", system-ui, -apple-system, "Segoe UI", sans-serif';

mermaid.initialize({
  startOnLoad: false,
  securityLevel: "loose",
  theme: "base",
  themeVariables: {
    primaryColor:       surface,
    primaryTextColor:   fg,
    primaryBorderColor: accent,
    lineColor:          accent,
    secondaryColor:     surfaceSoft,
    tertiaryColor:      surfaceSoft,
    textColor:          fg,
    fontFamily:         fontBody,
    noteBkgColor:       surface,
    noteTextColor:      muted
  },
  flowchart: {
    curve:       "basis",
    nodeSpacing: 60,
    rankSpacing: 70
  }
});

function showFallback(block, error) {
  block.classList.add("mermaid--fallback");
  block.setAttribute("role", "img");
  block.setAttribute(
    "aria-label",
    "Diagram source is available below; the visual renderer could not load."
  );

  const notice = document.createElement("p");
  notice.className = "mermaid-fallback__notice";
  notice.textContent =
    "The live diagram could not render in this browser. The Mermaid source is preserved below.";
  block.parentNode.insertBefore(notice, block);

  // Keep diagnostics in the console without exposing implementation details
  // to readers or turning a renderer failure into a blank section.
  console.warn("Mermaid diagram fallback active", error);
}

async function renderDiagrams() {
  const blocks = Array.from(document.querySelectorAll(".mermaid"));
  if (!blocks.length) return;

  try {
    await mermaid.run({ nodes: blocks });
    track("diagram_render", {
      diagram_count: blocks.length,
      content_version: "v1.0",
    });
  } catch (error) {
    // A single malformed block should not erase the source for every diagram.
    blocks.forEach((block) => showFallback(block, error));
  }
}

function track(name, parameters = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", name, parameters);
  }
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link || !link.href) return;

  const url = new URL(link.href, window.location.href);
  const isExternal = url.origin !== window.location.origin;
  track(isExternal ? "outbound_click" : "cta_click", {
    content_version: "v1.0",
    destination_host: url.host,
    destination_path: url.pathname,
    link_text: link.textContent.trim().slice(0, 80),
  });
});

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderDiagrams, { once: true });
} else {
  renderDiagrams();
}
