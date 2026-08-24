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
| Referral probes | CONDITIONAL PASS | Human browser checks on 2026-08-24 reached the intended Replit account-creation page (including the referral-bonus notice), the OverKill Hill P³ Ko-fi profile/tip form, and Mermaid's account-creation page (including the referral offer). Automated probes remain crawler-blocked or authorization-limited. |
| Mermaid hosted documents | PASS | Human browser checks on 2026-08-24 reached all 13 linked `mermaid.ai/d/` routes. The four routes previously recorded as blank were reopened and visibly rendered with the expected document title; all 13 now have a visible hosted diagram in the checked session. Automated requests still return an authorization-limited API response (HTTP 401), which is not render evidence; local `.mmd` and checked-in PNG fallbacks remain authoritative. |
| Repeatable hosted-render harness | NOT RUN | `pnpm run health:mermaid:browser` is checked in but requires Playwright and Chromium, which are not installed in this workspace. The command reports this as `NOT RUN`; it does not classify missing tooling as a render pass or failure. |

## Human browser checks — provider destinations

Checked 2026-08-24 in a normal browser session, without signing in or submitting
provider forms:

| Destination | Intended landing/render | Observation | Result |
|---|---|---|---|
| `https://replit.com/refer/overkillhillp3` | Replit referral account creation | Replit branding, “Create a Replit account”, Google/email options, and the “Referral bonus” notice naming Jamie Hill were visible. | USABLE |
| `https://ko-fi.com/T6T71HCY6A` | OverKill Hill P³ support profile | The OverKill Hill P³ profile loaded with Tip/Follow controls, “Buy a Coffee” amount controls, and the `$5` tip action. | USABLE |
| `https://mermaidchart.cello.so/UhVlNtC2MlS` | Mermaid referral signup | Mermaid’s “Create account” page loaded with Google, GitHub, SSO, email/password fields, Cloudflare verification, and the referral offer naming Jamie Hill. | USABLE |

## Human browser checks — hosted Mermaid documents

All 13 hosted document URLs linked from the article were opened on
2026-08-24. The routes reached Mermaid’s document shell and showed the expected
provider/version title. Ten displayed a visible diagram canvas:

`Copilot V2`, `Claude V2`, `Perplexity V2`, `Perplexity V1`, `Gemini V1`,
`ChatGPT V2pro`, `Notion V2`, `Claude V1`, and `Notion V1` (the
article’s featured `Replit V2` document also rendered visibly).

### Reverification of previously blank routes — 2026-08-24

The four routes previously recorded as **NOT RENDER-VERIFIED** were reopened
after provider-side changes. Each route displayed a non-empty diagram canvas,
and each matched the linked provider/version title:

| Provider/version | Hosted route title | Checked-in source | Checked-in fallback | Outcome |
|---|---|---|---|---|
| ChatGPT V2 | `ChatGPT V2` | `diagrams/v2/etch-ai-sketch-using-a-council-to-design-at-velocity-chatgpt-v2.mmd` | `images/v2/etch-ai-sketch-using-a-council-to-design-at-velocity-chatgpt-v2.png` | RENDER-VERIFIED |
| Gemini V2 | `Gemini V2` | `diagrams/v2/etch-ai-sketch-using-a-council-to-design-at-velocity-gemini-v2.mmd` | `images/v2/etch-ai-sketch-using-a-council-to-design-at-velocity-gemini-v2.png` | RENDER-VERIFIED |
| Copilot V1 | `Copilot V1` | `diagrams/v1/etch-ai-sketch-using-a-council-to-design-at-velocity-copilot-v1.mmd` | `images/v1/etch-ai-sketch-using-a-council-to-design-at-velocity-copilot-v1.png` | RENDER-VERIFIED |
| ChatGPT V1 | `ChatGPT V1` | `diagrams/v1/etch-ai-sketch-using-a-council-to-design-at-velocity-chatgpt-v1.mmd` | `images/v1/etch-ai-sketch-using-a-council-to-design-at-velocity-chatgpt-v1.png` | RENDER-VERIFIED |

The fresh browser captures are the render proof. Automated requests still
return an authorization-limited API response (HTTP 401); that response is not
treated as evidence that a hosted diagram renders or fails. The repository's
`.mmd` sources and checked-in PNG fallbacks remain authoritative if a hosted
canvas later becomes unavailable.

The repeatable harness is
`scripts/check-hosted-mermaid-browser.mjs`. It checks the four formerly blank
routes for the expected provider/version title and non-empty SVG/canvas content,
while reporting navigation HTTP status and authorization-limited responses
separately. Setup and capture instructions are in `docs/mermaid-delivery.md`.

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

## Seven-day review status — 2026-08-24

The observation window has not started. No GA4 export, DebugView capture,
post-window UTM readout, CTA/referral outcome report, comment review, or
confusion-signal sample can be attributed to 2026-08-25 through 2026-08-31
today. The evidence review is therefore **NOT YET OBSERVABLE**, not a pass or
failure.

### Required campaign evidence

| Measure or check | 2026-08-24 status |
|---|---|
| GA4 users, sessions, engaged sessions | NOT YET OBSERVABLE — window has not started |
| Campaign landings by source/medium | NOT YET OBSERVABLE — no post-window GA4 readout |
| `diagram_view` events | NOT YET OBSERVABLE — no post-window GA4 readout |
| `diagram_action` by action | NOT YET OBSERVABLE — no post-window GA4 readout |
| `provider_click` events | NOT YET OBSERVABLE — no post-window GA4 readout |
| `referral_click` events | NOT YET OBSERVABLE — no post-window GA4 readout |
| Primary `cta_click` events by source/medium | NOT YET OBSERVABLE — no post-window GA4 readout |
| UTM propagation and direct CTA/referral navigation | NOT YET REVIEWED — pre-window link checks are not campaign evidence |
| Comments and confusion signals | NOT YET OBSERVABLE — qualitative telemetry sample does not exist |

### Deployment gate result

**NOT SATISFIED / NOT RUN for v1.0.** The prepared editorial cut has no
recorded external deployment identifier, canonical/social verification, or
rollback target. The existing v0.5 public checks do not authorize dating the
unpublished v1.0 cut.

**Release decision:** keep v0.5 — Council-Assisted Scoring as the current public
release. Do not publish or date v1.0 on 2026-08-24. The earliest defensible
review date is **2026-09-01**, after the complete seven-day window closes.

## External-owner handoff

The remaining publication action is external: deploy the prepared editorial
cut only after editorial approval, then record its immutable source reference,
deployment identifier, timestamp, canonical response, social preview response,
and rollback target in `release-handoff.md`. This workspace does not infer
production publication from its API or component-preview workflows.