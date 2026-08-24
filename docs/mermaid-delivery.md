# Mermaid delivery contract

The article's featured set is intentionally small and stable:

| ID | Source | Local fallback | Canonical status |
| --- | --- | --- | --- |
| `words-structure-understanding` | `writings/first-diagram-is-a-liar/assets/words-structure-understanding.mmd` | matching SVG | article diagram |
| `feedback-loop` | `writings/first-diagram-is-a-liar/assets/feedback-loop.mmd` | matching SVG | article diagram |
| `replit-v2` | `writings/first-diagram-is-a-liar/assets/replit-v2.mmd` | matching SVG | safe-mode view; full canonical record is `member-deliberations/replit/v2-diagram.md` |

Each card exposes a view link, source download, copy action, and SVG download.
The SVG is present in the HTML before JavaScript runs and remains visible if the
Mermaid ESM import, renderer, network, CSP, or browser support fails. Mermaid is
configured with `securityLevel: "strict"` for the safe-mode page; the archived
Replit V2 record documents why its original HTML labels, remote images, loose
security, and click directives are not required for the dependable public view.

The page is designed for keyboard focus, narrow viewports, and reduced motion.
Verify the controls and static fallbacks in Chrome, Firefox, Safari, and a mobile
viewport before release. Run `pnpm run health:mermaid` from the repository root;
it checks the featured source/fallback pairs, required page assets, and the
canonical article and archive destinations.

## Verification record

Verified 2026-08-24:

- Static no-JavaScript smoke test: `index.html` and all six featured source/SVG
  files served successfully over HTTP.
- JavaScript syntax and whitespace checks: pass.
- Repository typecheck: pass for API server, component preview server, and
  scripts. The aggregate build requires the preview server's deployment
  `BASE_PATH` and `PORT` variables and is not the article's build.
- Health check: pass, covering 3 featured diagrams, canonical article URL,
  repository/archive destination, referral URLs, remote image assets, and zero
  broken canonical destinations.
- Referral endpoints returning `403` to automated probes are treated as
  reachable protected destinations, not silently treated as healthy content.
- Browser behavior contract: native links/buttons/details are keyboard
  focusable; SVG fallbacks are visible before JavaScript and on renderer/import
  failure; the reduced-motion media query disables control transitions. A
  manual release pass should still exercise Chrome, Firefox, Safari, and a
  narrow mobile viewport.

## Hosted-document browser regression check

The four routes that were previously blank are covered by the checked-in
`scripts/check-hosted-mermaid-browser.mjs` harness:

```text
pnpm add -Dw playwright
pnpm exec playwright install chromium
pnpm run health:mermaid:browser
```

Use `HEADED=1` for a visible browser session. Set `SCREENSHOT_DIR` to retain
one full-page capture per route and `RESULT_FILE` to write a JSON result:

```text
HEADED=1 SCREENSHOT_DIR=tmp/mermaid-captures \
RESULT_FILE=tmp/mermaid-browser.json pnpm run health:mermaid:browser
```

The check passes only when each expected provider/version title is present and
at least one sufficiently sized SVG or canvas has non-empty content. It reports
navigation status and `authorizationLimited` independently; HTTP 401/403
cannot be mistaken for a render failure. A missing Playwright dependency is
reported as `NOT RUN`, not as a false pass.