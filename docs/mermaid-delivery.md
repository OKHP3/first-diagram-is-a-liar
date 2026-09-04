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

## Root renderer decision and candidate benchmark

The root tutorial's fixed V1/V2 workbench is intentionally not a Mermaid
runtime. It uses deterministic, inline SVG with a selectable source excerpt,
prose text alternative, and an explicit illustrative-only note. This keeps the
teaching surface available without parsing, async imports, generated-SVG
semantics, or renderer failure states.

Before changing that boundary, a local isolated fixture must run
`npm run benchmark:mermaid`. The benchmark uses the pinned candidate
`mermaid@11.12.0` and `vite@8.2.2`, installs them only in a temporary directory,
compares built JavaScript against an empty Vite fixture, and measures three cold
module-import samples. It does not modify the root lockfile or app dependencies.

### Budget and observed result

| Measure | Budget | Observed 2026-09-04 | Result |
| --- | ---: | ---: | --- |
| Additional built JavaScript | ≤ 1,000,000 bytes | 2,605,709 bytes | **NO-GO** |
| Startup delta over empty fixture | ≤ 500 ms | 277.7 ms | within budget |

The benchmark emitted baseline JavaScript of 785 bytes, candidate JavaScript of
2,606,494 bytes, and cold Mermaid import samples of 271.3, 279.6, and 283.2 ms
(median 279.6 ms), against a 1.9 ms median baseline import. Network/package
cache and machine load can change timings slightly; rerunning the command is
the source of truth for a new environment. The decision is intentionally
governed by the bundle budget, not by a favorable startup sample. The
candidate's package is about 66 MB unpacked before bundling, and the fixture's
generated output includes lazy notation chunks that are still part of the
runtime dependency surface.

**Decision:** retain the root tutorial's deterministic SVG and do not add the
candidate. A future proposal is a separate product decision and must provide
the same strict security, static fallback, text alternative, accessibility,
parser/render failure, and explicit-budget evidence before implementation.
The preserved editorial archive may continue to use its own static-first
Mermaid delivery path; it must not become an implicit root dependency.

## Acceptance coverage

The pure contract check covers:

- `securityLevel: "strict"` and `startOnLoad: false` in the archive renderer;
- import/parser/render failure routing to the static fallback;
- hiding a failed live-render block from assistive technology;
- root tutorial absence of a Mermaid runtime import;
- inline SVG `role="img"` and label, prose text alternative, and the explicit
  non-renderer boundary;
- archive source, copy, and static fallback affordances.

The browser acceptance check additionally visits the root workbench and verifies
the accessible SVG/text fallback contract while confirming no runtime Mermaid
block is present. It also visits the local archived editorial cut with the
Mermaid ESM URL blocked, verifying that all three featured cards retain their
loaded static image, readable alt text, source controls, source disclosure,
and explicit failure status. The archive is served as a separate path for
this check and is not a root tutorial dependency or a hosted-renderer
requirement. These checks protect the tutorial/archive boundary if the
tutorial grows.

## Verification record

Verified 2026-08-24:

- The three featured source/fallback pairs remain present in the preserved
  editorial cut.
- `npm run check:archive` passes for the five tutorial/archive authority
  anchors.
- The tutorial's browser smoke pass covered the journey controls, local
  checklist, copy action, and a 390px viewport. Mermaid rendering remains an
  archive maintenance concern rather than an application runtime dependency.

Verified 2026-09-04:

- `mermaid@11.12.0` was benchmarked in the isolated fixture described above.
- The candidate exceeded the documented 1,000,000-byte additional-JavaScript
  budget, so the root no-go decision remains in force.
