# Public Release QA Record — 2026-08-24

## Decision

**Current public release:** Article v0.5 — Council-Assisted Scoring.

**v1.0 status:** Prepared local editorial cut only. It is not externally
published and must not be described as live until the external deployment owner
records a deployment identifier and the canonical/social/rollback gates pass.

**QA outcome:** v0.5 public surface passes the repository and canonical-page
checks below. The local v1.0 source had stale LinkedIn and social-image
destinations; those source references now use the verified v0.5 destinations.

## Evidence

| Gate | Result | Evidence |
|---|---|---|
| Canonical URL | PASS | `https://overkillhill.com/writings/first-diagram-is-a-liar/` returned HTTP 200 on 2026-08-24. |
| Story/version agreement | PASS | Live HTML labels the page v0.5; the manifest keeps v0.1, Round 1/V1, Round 2/V2, v0.5, and prepared v1.0 distinct. |
| Social metadata | PASS | Live HTML has matching Open Graph/Twitter title, description, canonical URL, image, alt text, dimensions, and `summary_large_image`. The image returned HTTP 200 and `image/png`. |
| LinkedIn CTA | PASS | The verified article destination is the published `...-lv3hc/` slug and returned HTTP 200. UTM parameters remain on owned CTA links. |
| Mermaid/source delivery | PASS | `pnpm run health:mermaid` passed: three featured diagrams, local `.mmd` sources and SVG fallbacks present, canonical destinations reachable. |
| Local relative assets | PASS | Every relative `href`/`src` in the local article resolves to a checked-in file. |
| Archive/deck sources | PASS | Council manifest, prompts, provenance, member archive, square/wide PDFs, and PPTX files are present and identified as valid file types. |
| Accessibility signals | PASS | Document language, one `h1`, ordered `h2` sections, skip link, labelled navigation, labelled diagram actions, meaningful image alt text, keyboard buttons, visible focus styles, and reduced-motion handling are present in source/CSS. |
| Referral probes | CONDITIONAL PASS | Replit and Ko-fi return crawler-blocked HTTP 403 responses but preserve their intended destinations; the Mermaid referral resolves to Mermaid's sign-up route. Provider policy prevents automated end-to-end verification. |
| Mermaid hosted documents | CONDITIONAL PASS | Public Mermaid document routes redirect automated requests to an API response requiring authorization (HTTP 401), so hosted-render correctness remains a reader/browser check; local `.mmd` and SVG fallbacks are authoritative. |

## Measurement and observation

The v0.5 measurement contract is implemented in `mermaid-init.js`: campaign
landing, CTA, referral, provider, outbound, diagram-view, diagram-action, and
diagram-render events carry stable content identifiers and version values.
Comments and confusion are treated as qualitative telemetry, not proof of
diagram correctness.

**Next observation window:** 2026-08-25 through 2026-08-31. Review GA4 event
delivery, UTM propagation, CTA/referral paths, comments, and confusion signals
after seven days. Use that evidence for a dated v1.0 changelog decision; do not
backdate v1.0 publication.

## External-owner handoff

The remaining publication action is external: deploy the prepared editorial
cut only after editorial approval, then record its immutable source reference,
deployment identifier, timestamp, canonical response, social preview response,
and rollback target in `release-handoff.md`. This workspace does not infer
production publication from its API or component-preview workflows.