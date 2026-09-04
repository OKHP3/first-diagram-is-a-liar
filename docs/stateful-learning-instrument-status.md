# Stateful Learning Instrument Status

**Updated:** 2026-09-03  
**Scope:** root client-only tutorial

This record reconciles the implementation-planning PRD with the evolved
multi-task PRD. It keeps shipped behavior, deliberate deferrals, and unknown
owner decisions separate.

## Confirmed implemented in the tutorial

- Premise capture offers four lie patterns and an optional 160-character claim.
- ROY is a bounded browser-side heuristic with a visible formula, three teaching
  presets, manual range controls, feedback bands, and a non-scientific
  interpretation.
- The workbench compares source-backed V1 and V2 states, synchronizes each
  visual with its source and explanation, exposes revision loopbacks, and
  labels its SVG as illustrative rather than a live Mermaid renderer.
- Council conditions remain distinct: Core Five, Exhibition, Specialty Notion,
  Specialty Replit, and Attempted. Criterion selection and borrow/reject/combine
  synthesis are recorded without an overall ranking.
- A versioned session is validated on read, migrates the earlier checklist
  storage, persists locally when available, reports session-only mode when
  storage is blocked, supports reset, and follows dependency-free step hashes.
- The handoff is generated in-browser as deterministic Markdown with premise,
  ROY, workbench, Council, checklist, next test, public receipts, generated
  date, schema version, and an explicit non-validation boundary.
- Copy failure, local download failure, malformed storage, keyboard labels,
  reduced motion CSS, and the 390px responsive boundary have acceptance
  coverage.

## Deliberately deferred

- No real Mermaid parser or new renderer was added. The workbench remains an
  illustrative teaching SVG with selectable source and a text alternative.
- No analytics bridge was added. This task preserves the stricter evolved
  requirement of tracking-free operation rather than activating the older
  measurement proposal.
- No audience voting, provider ranking, overall Council winner, account,
  backend, database, remote persistence, identifier, or secret was introduced.
- No article, archive, historical release record, or public count statement was
  rewritten. Those remain under the separate editorial release process.

## Renderer decision

**Decision (2026-09-03): retain the illustrative SVG for the root tutorial and
do not add a local Mermaid renderer.**

This is a deliberate boundary, not an unfinished implementation:

- The root workbench has two fixed teaching states with four nodes and two
  revision paths. It does not need arbitrary user-authored Mermaid or
  notation coverage.
- The existing SVG is deterministic, loads without parsing or async runtime
  work, and keeps the visual, selectable source excerpt, and prose text
  alternative together. A Mermaid renderer would not automatically improve
  the accessible explanation and would add generated-SVG semantics to verify.
- The application dependency set has no Mermaid package. Adding one would
  increase the client bundle and dependency review surface without a current
  learner-facing capability that requires it.
- Mermaid remains appropriate for the preserved editorial archive, where
  source files and static SVG fallbacks are already maintained as a separate
  delivery concern. That archive boundary must not silently become a runtime
  dependency of the tutorial.

Reconsider this decision only if the tutorial needs user-authored or
source-executable diagrams, more than the fixed teaching states, or Mermaid
fidelity as a product requirement. Any future proposal must benchmark a pinned
local version, verify strict security settings, preserve a static fallback and
the text alternative, test parser and render failures, and set an explicit
bundle budget before changing this boundary.

## Owner policy: learner text in exported handoffs

**Decision (2026-09-03): keep learner-entered text included by default for an
explicit browser-local export; require an explicit redacted mode before adding
any shared or externally distributed export path.**

The current local packet includes the optional bounded premise claim, synthesis
sentence, and next test because the learner chose to copy or download the
working handoff. This remains safe within the current boundary: the packet is
assembled in the browser, is not uploaded, and is labelled as a working
snapshot rather than a verdict. A redacted mode is not a second current export
mode. Revisit this policy if a future release adds sharing, upload, hosted
storage, or any other export path outside the learner's local control.

## Unknown or owner-controlled

- Whether the normalized ROY scale should be renamed or calibrated differently.
- Whether anonymous measurement should ever be enabled under a future,
  explicitly approved contract.
- Whether review-only article material should be promoted.

## Mermaid evidence record

The renderer boundary has now been tested rather than left as an assumption.
The pinned local candidate `mermaid@11.12.0` was measured in an isolated Vite
fixture on 2026-09-04. It added approximately 2.6 MB of built JavaScript
against a documented 1 MB budget; cold module evaluation stayed roughly within
the 500 ms startup-delta budget (277.7 ms in the recorded run), but that
favorable result does not offset the bundle cost. The repeatable command is
`npm run benchmark:mermaid`, which does not add Mermaid to the root dependency
graph.

Contract and browser acceptance checks cover strict archive configuration,
parser/import/render fallback, failed-render accessibility, root SVG labels,
the existing prose alternative, and the explicit no-runtime boundary. The
decision is therefore **NO-GO for Mermaid in the root tutorial**; the
archive's separate static-first delivery remains the only current Mermaid
surface.

Local build and browser acceptance are source evidence only. They do not by
themselves establish a new hosted release.