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
| Mermaid hosted documents | CONDITIONAL PASS | Human browser checks on 2026-08-24 reached all 13 linked `mermaid.ai/d/` routes. Ten visibly rendered a diagram with the expected document title; four showed the Mermaid shell/title but a blank canvas in this session. Automated requests still return an authorization-limited API response (HTTP 401); local `.mmd` and SVG fallbacks remain authoritative. |

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

Four routes showed the Mermaid shell and title but no visible diagram in the
browser session: `ChatGPT V2`, `Gemini V2`, `Copilot V1`, and `ChatGPT V1`.
These are recorded as **NOT RENDER-VERIFIED**, not treated as broken provider
links, because the route itself loaded and the repository retains local
`.mmd` sources and SVG fallbacks for every featured diagram. The featured
Replit V2 route was visibly rendered and usable.

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