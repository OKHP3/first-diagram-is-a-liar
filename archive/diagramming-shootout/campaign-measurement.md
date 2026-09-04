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
6. Record the date, a non-sensitive GA4 property alias, release version, and
   observed event names in the launch worksheet. Apply the evidence-handling
   boundary below before saving any screenshot or export; never paste an
   unredacted DebugView screenshot.

## Evidence handling, redaction, and retention boundary

The campaign archive may contain a **redacted aggregate readout**, but it is
not a public analytics dump. Treat every owner-supplied GA4, DebugView, provider
dashboard, CSV, JSON, or screenshot as restricted until it has been reviewed
against this boundary.

### What may be archived and shared

Keep only a summary of aggregate, low-cardinality results needed to interpret
the campaign:

- retrieval date, observation window, release/content version, and a source
  label or non-sensitive property alias;
- totals and grouped counts for the allow-listed events and measures in this
  map, such as users, sessions, engaged sessions, event counts, CTA/referral
  counts, and source/medium/campaign/content aggregates;
- the grouping dimensions, filters, thresholds, and known limitations needed to
  reproduce the interpretation; and
- a statement that the figures are aggregate campaign evidence, not a
  user-level dataset.

Suppress or combine small groups before archival where a breakdown could make
an individual or tiny audience recognizable. Do not publish a cell merely
because it is available in GA4; if the owner cannot confirm that a breakdown
is safe to share, keep the breakdown restricted and retain only a broader
aggregate.

### What must remain restricted

Do not commit, attach to a public release record, or send through a public
archive any raw or user-level material, including:

- `user_id`, `user_pseudo_id`, client/instance IDs, session IDs, device IDs,
  advertising IDs, or any other per-user or per-device identifier;
- event-level rows, raw timestamps that expose a person's activity pattern,
  raw API responses, DebugView streams, user explorers, or exports that can be
  joined back to a person;
- email addresses, phone numbers, names, free-text parameters, cookies,
  tokens, IP addresses, exact locations, demographics, audience membership,
  Google Signals data, or other sensitive dimensions; and
- full URLs or query strings containing personal or tracking identifiers,
  including unapproved parameters beyond the four named UTM fields. A
  `gclid`, click ID, or similar identifier is not an aggregate metric.

Raw exports remain in the owner's access-controlled analytics storage and are
not evidence that this repository or its public article may expose. If a
temporary local copy is needed to calculate the summary, delete it after the
redacted summary has been checked and do not place it in the repository,
attachments, screenshots, or public hosting. The redacted aggregate summary
may be retained with the campaign archive; the raw export follows the owner's
existing restricted analytics retention policy rather than a new public
retention commitment.

### Screenshot and attachment checklist

Before archival, crop or redact:

1. the signed-in account name, email, avatar, notifications, open tabs, and
   browser profile details;
2. GA4 account/property identifiers when they are not needed for provenance,
   plus user/device selectors and any DebugView user ID or device panel;
3. event parameter panels, custom dimensions, audience/device/geo detail, raw
   timestamps, and any value that is not in the aggregate summary;
4. address bars, landing URLs, DevTools Network request URLs, cookies,
   headers, payloads, and query strings that contain personal or unapproved
   identifiers;
5. provider-dashboard rows or screenshots that show account names, customer
   details, order/revenue records, or other user-level activity.

The attachment that enters the archive should be a redacted summary (or a
table transcribed from one), labelled **aggregate campaign evidence —
restricted raw source not attached**. Keep the source location and retrieval
date in the handoff note without copying the restricted export itself.

### Owner review record for visual attachments

Every campaign screenshot, dashboard image, chart capture, or other visual
attachment is **restricted and unapproved** until the owner completes a review
record. Filename and path checks are not a substitute for inspecting the
pixels: they cannot reliably detect account details, selectors, device panels,
event-parameter panels, or DevTools payloads.

Use one record per visual attachment. The record may live in the handoff note
or release-evidence packet, but it must contain all of the following before an
attachment enters shared evidence:

| Field | Required owner entry |
|---|---|
| Attachment reference | A non-sensitive local reference or owner-assigned ID; do not copy the restricted source into the repository |
| Source type | Screenshot, dashboard capture, chart, or other visual attachment, plus the provider/source label |
| Reviewer and review date | Named owner/editorial reviewer and the date the pixels were inspected |
| Retrieval date and observation window | When the source was retrieved and the campaign dates it represents |
| Release/content version | The release ID and `content_version` represented by the visual |
| Source label/property alias | A non-sensitive label or property alias only; do not record account or property identifiers that are not needed for provenance |
| Pixel checklist result | Explicit confirmation that every item in the Screenshot and attachment checklist above was cropped or redacted; record any exception as **not approved** |
| Aggregate-only result | Confirmation that the remaining content contains only low-cardinality aggregate totals/grouped counts and no user-level, event-level, or sensitive dimensions |
| Approved archive label | **aggregate campaign evidence — restricted raw source not attached** |
| Raw-source disposition | Confirmation that the raw source remains in the owner's access-controlled analytics storage under the existing restricted retention policy; any temporary local copy was deleted after checking the summary |
| Decision | `APPROVED FOR SHARED EVIDENCE` or `REJECTED — REMAINS RESTRICTED`, with the reason for rejection when applicable |

The owner must make the decision after the crop/redaction review, not merely
after a filename scan. A missing record, an unchecked checklist item, an
uncertain breakdown, or a source that still contains raw detail is a stop
signal: do not attach, commit, or link the visual. If a group could identify an
individual or tiny audience, suppress or combine it and repeat the review.
The approved archive copy must carry the exact approved archive label above;
the owner review record is evidence of handling approval, not permission to
disclose the restricted source.

### Repository privacy guard

Run `npm run check:campaign-evidence` before committing changes to campaign
records. The check scans this campaign archive and the release-evidence
records for likely GA4/DebugView exports, data-shaped user or device
identifiers, contact or network identifiers, cookies, tokens, tracking IDs,
and suspicious screenshots or attachments. It allows this documented
aggregate-summary label and ordinary event-contract prose, but it cannot
decide whether pixels in a novel image are safe; the completed owner review
record is the required human gate for that decision.

The same validation command runs the maintained fixture suite in
`scripts/campaign-evidence-fixtures`. When a new export format appears, add a
small fixture containing placeholders only, put it under `blocked/`, and add
its path and a short category label to `manifest.json`. Add approved summary or
contract examples under `safe/`. Run `npm run check:campaign-evidence` and
update a detection rule if the new restricted fixture is not rejected. The
fixture runner suppresses the guard's child-process output and reports only
category labels, so fixture values never appear in a failed validation log.

Raw CSV/JSON, event-level exports, DebugView streams, screenshots, and
provider-dashboard attachments remain owner-controlled in restricted
analytics storage. A failing check is a stop signal: remove the raw or
unreviewed attachment rather than committing it or weakening the guard.

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

## First complete campaign readout — 2026-09-03

The observation window **2026-08-25 through 2026-08-31** is closed. The first
complete owner readout was due after the 2026-08-31 close, but no dated
GA4/DebugView export or equivalent owner-approved readout is available in this
workspace as of **2026-09-03**. There is therefore no attachment to include,
and every unavailable measure remains **UNAVAILABLE**, not zero.

| Evidence family | Measures requested for the window | Status | Permitted interpretation |
|---|---|---|---|
| Acquisition and attribution | Users, sessions, engaged sessions, `campaign_landing`, and UTM source/medium/campaign/content breakdown | **UNAVAILABLE** | No audience size, campaign reach, or source-performance conclusion |
| Tutorial/article interactions | `diagram_view`, `diagram_render`, and `diagram_action` by action | **UNAVAILABLE** | No interaction-rate, diagram-usage, or engagement conclusion |
| CTA and referral activity | Primary `cta_click`, `provider_click`, `referral_click`, destination activity, and provider-dashboard conversion/revenue | **UNAVAILABLE** | No CTA, referral conversion, support, or revenue conclusion |
| Qualitative observations | Comments, questions, confusion signals, and observed new angles | **UNAVAILABLE** | No comprehension, confusion, sentiment, or audience-response conclusion |
| Diagram quality | Render health, source/fallback availability, title matching, and link reachability | **SEPARATE TECHNICAL EVIDENCE** | Delivery and artifact checks only; not a campaign or diagram-quality outcome |

The dated article and provider-link checks are delivery-contract evidence only.
They confirm reachable destinations and visible referral/support labels where
browser evidence exists; they do not substitute for the missing campaign
readout. In particular, technical render verification must not be converted
into a claim that the diagrams were clear, useful, or effective.

No tracking was added to the client-only tutorial as part of this closure, and
this record does not claim `ARTICLE-1.0` publication. If the owner later
supplies an approved readout, attach it with its retrieval date, property or
source, observation window, release version, and observed measures before
making any performance or campaign conclusion. Apply the evidence-handling
boundary first: attach only a redacted aggregate summary and record that any
raw export remains restricted and is not public evidence.