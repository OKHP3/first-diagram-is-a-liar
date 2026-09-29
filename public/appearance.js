// Shared by the field guide and its static reading edition. Runs before paint.
(() => {
  const key = "first-diagram-appearance";
  const modes = ["light", "system", "dark"];
  const root = document.documentElement;
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  let mode = "system";
  try { mode = localStorage.getItem(key) || "system"; } catch { /* Session-only preference. */ }
  if (!modes.includes(mode)) mode = "system";
  function apply() {
    const theme = mode === "system" ? (media.matches ? "dark" : "light") : mode;
    root.dataset.colorMode = mode;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#111714" : "#f4f0e7");
    document.querySelectorAll("[data-color-mode]").forEach((button) => {
      if (button === root) return;
      button.setAttribute("aria-pressed", String(button.dataset.colorMode === mode));
    });
  }
  apply();
  document.addEventListener("DOMContentLoaded", apply);
  document.addEventListener("click", (event) => {
    const button = event.target instanceof Element ? event.target.closest("button[data-color-mode]") : null;
    if (!button || !modes.includes(button.dataset.colorMode)) return;
    mode = button.dataset.colorMode;
    try { localStorage.setItem(key, mode); } catch { /* The control still works without storage. */ }
    apply();
  });
  media.addEventListener("change", () => { if (mode === "system") apply(); });
  window.addEventListener("storage", (event) => {
    if (event.key !== key && event.key !== null) return;
    mode = modes.includes(event.newValue) ? event.newValue : "system";
    apply();
  });
})();
