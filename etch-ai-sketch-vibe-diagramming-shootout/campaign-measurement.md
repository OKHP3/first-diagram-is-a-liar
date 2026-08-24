# Campaign Measurement Map

The article is the primary v0.5 conversion surface. The local v1.0 editorial
cut is not a campaign destination until it is externally published. Analytics
identifies
interaction patterns; it does not determine diagram quality.

## Stable campaign fields

| Field | Values |
|---|---|
| `content_version` | `v0.1`, `v0.2`, `v0.3`, `v0.3.3`, `v0.4`, `v0.5`, `round-1`, `round-2`, `v1.0-prepared` |
| `surface` | `linkedin`, `article`, `mermaid`, `deck`, `archive`, `homepage` |
| `content_id` | `first-diagram-is-a-liar`, `etch-ai-sketch-council` |
| `destination` | `article`, `linkedin`, `mermaid`, `replit`, `kofi`, `archive` |

## UTM patterns

Use these templates when publishing new campaign links. Keep the destination
visible; do not use a redirect that hides referral intent.

```text
https://overkillhill.com/writings/first-diagram-is-a-liar/
  ?utm_source=linkedin&utm_medium=organic-social
  &utm_campaign=first-diagram-is-a-liar&utm_content=v0-5-article

https://overkillhill.com/writings/first-diagram-is-a-liar/
  ?utm_source=mermaid&utm_medium=referral
  &utm_campaign=first-diagram-is-a-liar&utm_content=replit-v2
```

Remove whitespace and line breaks before publishing. Referral URLs supplied by
providers remain unchanged; record their placement and the surrounding label.

## Events

The article emits:

- `diagram_render` after Mermaid successfully renders the page diagrams;
- `outbound_click` for external links, with destination host/path;
- `cta_click` for internal links, with destination host/path.

Events carry the deployed `content_version=v0.5` unless a later published
release is explicitly named. No email addresses, query-string values,
or user-entered text are sent.

## Readout worksheet

| Window | Baseline | Target | Owner | Interpretation |
|---|---:|---:|---|---|
| First 7 days | Record sessions, engaged sessions, `diagram_render`, outbound clicks, and primary CTA clicks | Establish baseline; no quality claim | Jamie Hill | Separate traffic acquisition from comprehension evidence |
| First 30 days | Compare against 7-day mix and source/medium | Identify strongest surface and broken destinations | Jamie Hill | Provider reporting is required before claiming referral conversion |