# Campaign Measurement Map

This is the operating map for the campaign, not a claim that engagement proves
diagram quality. The article is the primary v0.5 conversion surface. The local
v1.0 editorial cut is not a campaign destination until it is externally
published.

## Campaign matrix

`content_id` is stable across releases; `content_version` identifies the
published cut. Keep the destination visible and use the same values in links
and GA4 event parameters.

| Surface | Version | Source / medium | Content ID | Primary CTA and stable destination | Owner |
|---|---|---|---|---|---|
| LinkedIn article/post | v0.5 | `linkedin / organic-social` | `first-diagram-is-a-liar` | Read the article → `/writings/first-diagram-is-a-liar/` | Jamie Hill |
| Public article | v0.5 | `article / owned` | `first-diagram-is-a-liar` | Read on LinkedIn → LinkedIn Pulse URL | Jamie Hill |
| Council entries | round-1 / round-2 | `article / owned` | `etch-ai-sketch-council` | Open the selected Mermaid artifact → provider URL | Jamie Hill |
| Mermaid artifact | round-2 | `mermaid / referral` | `etch-ai-sketch-council` | Read the article → article URL | Jamie Hill |
| Replit V2 artifact | round-2 | `replit / referral` | `etch-ai-sketch-council` | Read the article → article URL | Jamie Hill |
| Deck/PDF share | v0.5 | `deck / owned` | `etch-ai-sketch-council` | Read the article → article URL | Jamie Hill |
| Ko-fi | v0.5 | `article / support` | `first-diagram-is-a-liar` | Support the forge → provider URL | Jamie Hill |
| Homepage | campaign landing | `homepage / owned` | `first-diagram-is-a-liar` | Read the article → article URL | Jamie Hill |

## UTM link register

These are copy-ready examples. Replace only `utm_content` when creating a
placement-specific link. Do not add UTM parameters to provider referral URLs:
the provider path must remain visible and intact.

| Placement | Copy-ready URL |
|---|---|
| LinkedIn post/article | `https://overkillhill.com/writings/first-diagram-is-a-liar/?utm_source=linkedin&utm_medium=organic-social&utm_campaign=first-diagram-is-a-liar&utm_content=v0-5-article` |
| Article v0.5 → LinkedIn | `https://www.linkedin.com/pulse/first-diagram-usually-liar-jamie-hill?utm_source=overkillhill&utm_medium=owned&utm_campaign=first-diagram-is-a-liar&utm_content=v0-5-article` |
| Council entry | `https://mermaid.ai/d/<artifact-id>?utm_source=overkillhill&utm_medium=owned&utm_campaign=first-diagram-is-a-liar&utm_content=round-1-copilot-v1` |
| Mermaid referral | `https://mermaidchart.cello.so/UhVlNtC2MlS` |
| Replit referral | `https://replit.com/refer/overkillhillp3` |
| Ko-fi support | `https://ko-fi.com/T6T71HCY6A` |
| Deck/PDF share | `https://overkillhill.com/writings/first-diagram-is-a-liar/?utm_source=deck&utm_medium=owned&utm_campaign=first-diagram-is-a-liar&utm_content=v0-5-pdf` |
| Homepage CTA | `https://overkillhill.com/writings/first-diagram-is-a-liar/?utm_source=homepage&utm_medium=owned&utm_campaign=first-diagram-is-a-liar&utm_content=v0-5-article` |

Provider destinations are intentionally not wrapped in redirects or decorated
with parameters that could invalidate referral attribution.

## Event contract

The article sends only low-cardinality, non-personal metadata:

| Event | When | Required parameters |
|---|---|---|
| `campaign_landing` | Page loads with a campaign parameter | `content_id`, `content_version`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` |
| `diagram_view` | A diagram enters the viewport | `diagram_id`, `content_version` |
| `diagram_render` | Mermaid successfully renders | `diagram_count`, `content_version` |
| `diagram_action` | View, source, copy, or SVG action | `diagram_id`, `action`, `content_version` |
| `provider_click` | Mermaid/provider artifact link clicked | `provider`, `destination`, `content_version` |
| `referral_click` | Replit, Mermaid, or Ko-fi referral clicked | `provider`, `destination`, `content_version` |
| `cta_click` | A declared primary CTA clicked | `surface`, `destination`, `content_version` |
| `outbound_click` | Other external link clicked | `destination_host`, `destination_path`, `content_version` |

Do not send email addresses, query-string values beyond the four named UTM
fields, cookies, user-entered text, or referral revenue. GA4's campaign
parameters remain available in the landing URL for attribution; event payloads
are allow-listed above.

The React/Vite tutorial application uses the same GA4 property and stable
`content_id`, with `content_version=spa-v1`. GA4's automatic page view captures
application visits; the SPA additionally sends:

| Event | When | Required parameters |
|---|---|---|
| `campaign_landing` | SPA loads with all four campaign parameters | `content_id`, `content_version`, the four named UTM fields |
| `tutorial_step_view` | A tutorial step becomes active | `content_id`, `content_version`, `step` |
| `cta_click` | Hero, handoff, or primary action is used | `content_id`, `content_version`, `surface`, `destination` |
| `outbound_click` | A receipt/archive link is opened | `content_id`, `content_version`, `destination_host`, `destination_path` |

The SPA never sends slider values, checklist text, copied brief text, or other
user-entered content. An untagged SPA visit does not emit `campaign_landing`,
but still records ordinary page, step, CTA, and outbound activity.

## Debug procedure

1. Open the tagged article URL in a private browser window with DevTools
   Network and Console visible. Confirm the URL contains only the expected
   `utm_*` keys and no personal data.
2. In GA4 Admin → DebugView, use the same browser and confirm
   `campaign_landing`, `diagram_view`, and `cta_click` arrive with the expected
   `content_version`, `content_id`, and destination values.
3. Scroll each diagram into view; click View fallback, Download source, Copy
   source, and Download SVG. Confirm one `diagram_action` per action and no
   source text in the payload.
4. Click one council/provider link and each referral link. Confirm
   `provider_click` or `referral_click`, and confirm the browser navigates directly
   to the visible provider/referral URL.
5. Repeat with an untagged URL. No `campaign_landing` event should be emitted;
   ordinary diagram and CTA events should still work.
6. Record the date, GA4 property, release version, and observed event names in
   the launch worksheet. Never paste DebugView screenshots containing user IDs.

## Launch readout worksheet

| Window | Baseline | Target | Owner | Interpretation |
|---|---|---|---|---|
| First 7 days | Record users, sessions, engaged sessions, campaign landings, `diagram_view`, `diagram_action` by action, provider clicks, referral clicks, and primary CTA clicks by source/medium | Establish baseline; no diagram-quality claim | Jamie Hill | Separate acquisition from interaction; investigate missing events or broken destinations first |
| First 30 days | Compare the same measures with the 7-day mix, version, and destination; reconcile provider dashboards where available | Identify strongest surface and reliable CTA path; document variance from 7-day baseline | Jamie Hill | Provider reporting is required before claiming referral conversion or revenue |

## Observation timing record

As of 2026-08-24, the seven-day window scheduled for 2026-08-25 through
2026-08-31 has not begun. GA4 events, UTM propagation, CTA/referral paths,
comments, and confusion signals must remain **not yet observable** until the
window closes. The first valid review date is 2026-09-01; do not fill the
worksheet with projections or treat pre-window checks as campaign evidence.

## In-window checkpoint — 2026-08-25

The observation window has opened but is not complete. The first valid
seven-day readout remains **2026-09-01**, after the 2026-08-31 close. No GA4
export or DebugView readout is available in this workspace, so users, sessions,
engaged sessions, campaign landings, diagram views/actions, provider clicks,
referral clicks, and primary CTA clicks by source/medium remain **not yet
observable** rather than zero.

Tagged and untagged UTM behavior, direct CTA/referral navigation, comments, and
confusion signals are also **not yet reviewed as campaign evidence**. Any
pre-window or partial-window link check must remain a contract check only. Keep
v0.5 current until the complete readout and the external v1.0 deployment gates
are recorded.