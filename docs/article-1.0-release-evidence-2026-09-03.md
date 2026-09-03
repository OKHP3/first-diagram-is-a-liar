# ARTICLE-1.0 Release Evidence — 2026-09-03

## Decision

**Final release decision: DEFERRED.**

The full `ARTICLE-1.0` editorial cut is frozen and technically reviewable, but
it is not owner-approved for publication and has not been deployed as the
v1.0 article. The public article remains labelled `v0.5`. The approved
count-label correction was a bounded external release on 2026-09-01; it did
not promote the surrounding article to `ARTICLE-1.0`.

This record closes the evidence-gathering milestone without publishing,
scheduling, dating, or approving the full editorial cut.

## Frozen source and approval boundary

| Item | Evidence |
|---|---|
| Frozen local editorial source | Local commit `366a43343da0850c8bcb4d2daaa76adb88a18ccb`, reviewed 2026-09-03 |
| Immutable editorial source tree | `archive/editorial-cut/` tree `6c89c14647689de2bfb3649e77c03d2ffe202af2` |
| Prepared source | [`archive/editorial-cut/index.html`](../archive/editorial-cut/index.html) and its local `.mmd`/SVG pairs |
| Owner-approved scope | Count wording only: “15 diagram records across V1 and V2, presented in an 18-slide deck”, approved 2026-08-31 |
| Full-cut approval | **PENDING** — no owner approval record for the complete `ARTICLE-1.0` editorial cut was supplied |
| Full-cut external deployment | **NOT RUN** — no v1.0 production deployment identifier exists |

The earlier `fa4ed2f7348c15a164dbb529b8a4e162fc51da7c` record remains the
accepted local source snapshot for the targeted count-label candidate. The
current frozen tree is recorded separately so the full editorial source is not
silently conflated with that bounded correction.

## External surfaces checked

Retrieval date for the checks below: **2026-09-03** unless another date is
shown.

| Surface | Result | Evidence and limitation |
|---|---|---|
| Public article | **PASS WITH VERSION LIMITATION** | `https://overkillhill.com/writings/first-diagram-is-a-liar/` returned HTTP 200 with no redirect. The title and one H1 were present; the displayed release remains v0.5. The approved count wording is present and the old “18 diagrams” wording is absent. |
| Canonical metadata | **PASS** | The canonical tag and `og:url` match the article URL. The page exposes `og:title`, `og:description`, `og:image`, `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, and `twitter:image`. |
| Social image | **PASS** | The configured image returned HTTP 200 as PNG and measured 1536 × 1024. Alt text is present in both Open Graph and Twitter metadata. |
| Repaired deck/archive links | **PASS** | The four deck links and three deep archive links were checked at the live article and returned HTTP 200 on 2026-09-01T01:17:40Z. The current article response contains no stale historical archive prefix. |
| Tutorial Pages surface | **PASS** | `https://okhp3.github.io/first-diagram-is-a-liar/` returned HTTP 200 on 2026-09-03 and served the React root with the expected asset prefix. The last recorded browser interaction smoke test passed on 2026-08-27; the Pages workflow from remote `main` also passed on 2026-09-01 (run `33459481352`, commit `d52803b894320ad9c96819ac24beca33681746d9`). This is tutorial evidence, not article-publication evidence. |
| Provider and referral destinations | **PASS WITH AUTOMATION LIMITATION** | Mermaid referral redirected to its sign-up page with HTTP 200; the live article's Mermaid routes returned HTTP 200. Replit and Ko-fi automated probes returned HTTP 403, while the latest human browser checks on 2026-08-24 reached the intended account/support surfaces. No referral conversion is claimed. |
| Attribution and external assets | **PASS WITH LIMITS** | The archive names Jamie Hill as author/editor/adjudicator, names providers as contributors, labels third-party avatars and hosted renders as external, and preserves local Mermaid source/PNG fallbacks. Availability or reuse permission for third-party services remains provider-controlled. |

## Hosted Mermaid verification

The four-route release harness was rerun on 2026-09-03 against the installed
system Chromium using the same repository check logic:

```text
RENDER-VERIFIED: ChatGPT V2 (status=200, authorizationLimited=false, titleMatches=true, nonEmptyCanvas=true)
RENDER-VERIFIED: Gemini V2 (status=200, authorizationLimited=false, titleMatches=true, nonEmptyCanvas=true)
RENDER-VERIFIED: Copilot V1 (status=200, authorizationLimited=false, titleMatches=true, nonEmptyCanvas=true)
RENDER-VERIFIED: ChatGPT V1 (status=200, authorizationLimited=false, titleMatches=true, nonEmptyCanvas=true)
Hosted Mermaid browser check: PASS (4 formerly blank routes rendered)
```

The full release-relevant archive set was also opened in Chromium on
2026-09-03: **15 of 15** linked Mermaid documents returned HTTP 200, matched
their provider/version title, and contained a non-empty rendered SVG. This
includes the previously unresolved ChatGPT V2 route. The repository index
contains 15 routes, so the older QA note saying “13” is retained as historical
wording; this closure record uses the current 15-route inventory.

The browser check is hosted-render evidence, not proof of authorship or
semantic correctness. Local `.mmd` sources and checked-in SVG/PNG fallbacks
remain the recovery path if a hosted document later changes or disappears.

## First complete campaign readout — 2026-08-25 through 2026-08-31

**Readout status: UNAVAILABLE as of 2026-09-03 — not zero.**

No dated GA4/DebugView export or equivalent owner-approved readout is available
in this workspace to attach for the completed observation window. The
measurement map and event contract remain documented, but a contract is not an
observed result.

| Evidence family | Measures | Status | Boundary |
|---|---|---|---|
| Acquisition and attribution | Users, sessions, engaged sessions, `campaign_landing`, and UTM source/medium/campaign/content | **UNAVAILABLE** | No audience, reach, or source-performance conclusion |
| Interactions | `diagram_view`, `diagram_render`, and `diagram_action` by action | **UNAVAILABLE** | No interaction, usage, or engagement conclusion |
| CTA/referral activity | Primary `cta_click`, `provider_click`, `referral_click`, destination activity, and provider-dashboard conversion/revenue | **UNAVAILABLE** | No CTA, referral conversion, support, or revenue conclusion |
| Qualitative observations | Comments, questions, confusion signals, and new angles | **UNAVAILABLE** | No comprehension, confusion, sentiment, or audience-response conclusion |
| Diagram quality | Render health, title matching, source/fallback availability, and link reachability | **SEPARATE TECHNICAL EVIDENCE** | QA/delivery evidence only; not a campaign result or diagram-quality claim |

The dated HTTP and human-browser link checks above are delivery-contract
evidence only. They do not substitute for campaign analytics, provider
dashboards, UTM attribution, or qualitative feedback. No missing measure is
entered as zero, no performance or campaign conclusion is made, and no
tracking was added to the client-only tutorial.

If the owner later supplies a readout, it must be attached with its retrieval
date, source or GA4 property, observation window, release version, and observed
measures before it is used for a performance conclusion. This evidence update
does not claim `ARTICLE-1.0` publication.

## Rollback verification

`ARTICLE-0.5` remains the usable rollback point:

- archive source snapshot:
  `c02f0662944e3b950fdcc659b18f19f5b2826c60`;
- last externally verified production commit:
  `3d25419d700fe279bbdbd808e16bfbbd2d673e8b`;
- GitHub Pages deployment: `6187760304`.

The targeted count correction and subsequent archive-link repair are retained
as separate historical production records. Restoring v0.5 means restoring the
source/deployment identifiers above; it does not delete or rewrite the later
evidence.

## Validation matrix

The repository validation matrix is run against the reviewed local source after
the documentation updates:

**Run date:** 2026-09-03 (local checkout, with the managed `Start application`
workflow available for browser acceptance).

| Check | Result | Boundary |
|---|---|---|
| `npm run check` | **PASS** — `tsc --noEmit` | Local TypeScript evidence |
| `npm run build` | **PASS** — Vite production bundle emitted | Local production-build evidence |
| `npm run check:archive` | **PASS** — 5 authority anchors | Authority-anchor evidence |
| `npm run health:mermaid` | **PASS** — 3 featured pairs and 0 broken canonical destinations | Local source/fallback and destination evidence |
| `npm run test:acceptance` | **PASS** — 19 checks in Chromium | Local browser behavior only |
| `git diff --check` | **PASS** | Documentation formatting |

The matrix passed on the reviewed local source. None of these checks can
authorize external article publication.

## Owner action required

To move from **DEFERRED** to an eligible publication decision, the owner must
approve the exact frozen editorial source and scope, then the external
production owner must deploy that exact source and record the deployment,
canonical, social-preview, link, campaign/readout, and rollback evidence. Until
then, use “prepared local `ARTICLE-1.0` editorial cut” and “current public
article v0.5”; do not use “published ARTICLE-1.0”, a v1.0 publication date, or
performance results.