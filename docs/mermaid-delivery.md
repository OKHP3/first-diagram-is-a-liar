# Mermaid archive delivery notes

The article's featured set is intentionally small and stable:

| ID | Source | Local fallback | Canonical status |
| --- | --- | --- | --- |
| `words-structure-understanding` | `archive/editorial-cut/assets/words-structure-understanding.mmd` | matching SVG | article diagram |
| `feedback-loop` | `archive/editorial-cut/assets/feedback-loop.mmd` | matching SVG | article diagram |
| `replit-v2` | `archive/editorial-cut/assets/replit-v2.mmd` | matching SVG | safe-mode view; full canonical record is `archive/member-deliberations/replit/v2-diagram.md` |

Each card exposes a view link, source download, copy action, and SVG download.
The SVG is present in the HTML before JavaScript runs and remains visible if the
Mermaid ESM import, renderer, network, CSP, or browser support fails. Mermaid is
configured with `securityLevel: "strict"` for the safe-mode page; the archived
Replit V2 record documents why its original HTML labels, remote images, loose
security, and click directives are not required for the dependable public view.

The archived article cut is preserved for reference. The root tutorial does not
render Mermaid at runtime. Verify changes to these archived source/fallback
pairs manually in Mermaid Live, and use `npm run check:archive` to confirm that
the tutorial still has its authority anchors.

## Verification record

Verified 2026-08-24:

- The three featured source/fallback pairs remain present in the preserved
  editorial cut.
- `npm run check:archive` passes for the five tutorial/archive authority
  anchors.
- The tutorial's browser smoke pass covered the journey controls, local
  checklist, copy action, and a 390px viewport. Mermaid rendering remains an
  archive maintenance concern rather than an application runtime dependency.
