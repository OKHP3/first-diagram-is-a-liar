# Provenance and Credits

## Ownership and roles

| Material | Responsible party | Record |
|---|---|---|
| Article thesis, orchestration, selection, editing, and publication | Jamie Hill / OverKill Hill P³™ | The public article and this archive |
| Prompt sequence | Jamie Hill, lightly cleaned for readability | `prompts/` |
| Council V1/V2 source files | The named model/provider, preserved by the human editor | `diagrams/v1/` and `diagrams/v2/` |
| Replit deliberations | Replit entry plus human archive notes | `member-deliberations/replit/` |
| Public Mermaid renders | Mermaid-hosted links, indexed by the archive | `diagram-manifest.csv` |
| Slide decks and exports | Human-assembled project artifacts using the archived source material | `slides/` and `attached_assets/` |

## Reproducibility rule

Every scored diagram must have:

1. a named source file in `diagrams/v1/` or `diagrams/v2/`;
2. a matching row in `diagram-manifest.csv`;
3. a public Mermaid link, when the hosted render remains available; and
4. a clear round and participant label.

If a hosted link fails, the local `.mmd` source remains the authoritative
recoverable artifact. A link failure must not be silently replaced with a
different render.

## External assets and destinations

The archive contains or references provider logos, the OverKill Hill P³™
mascot, Mermaid-hosted renders, Replit and Mermaid referral destinations, and
Ko-fi. These are external resources and should be checked before each public
release for availability, attribution requirements, and link policy changes.
The archive records the URLs used at capture time; it does not claim ownership
of third-party marks or images.

## Version policy

The deployed public article is **v0.5 — Council-Assisted Scoring**, verified
against the external page on 2026-08-24. The local v1.0 Editorial Cut is
prepared but unpublished and must not be cited as the current public release.
Future edits that change the story, roster, results, or evidence must update
`canonical-story.md`, this credits record, and the release changelog in the
same change. Cosmetic fixes that do not alter claims may use a patch note in
the changelog.