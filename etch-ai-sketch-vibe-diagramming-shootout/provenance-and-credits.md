# Provenance and Credits


## Human ownership and editorial work

- **Jamie Hill** is the human author, orchestrator, editor, and final
  acceptance authority.
- **OverKill Hill P³™** is the publishing identity and brand context.
- Human work includes the brief, prompt sequencing, participant selection,
  judging criteria, adjudication, synthesis direction, fact checking, editing,
  link selection, and publication decisions.

## Ownership and roles

| Material | Responsible party | Record |
|---|---|---|
| Article thesis, orchestration, selection, editing, and publication | Jamie Hill / OverKill Hill P³™ | The public article and this archive |
| Prompt sequence | Jamie Hill, lightly cleaned for readability | `prompts/` |
| Council V1/V2 source files | The named model/provider, preserved by the human editor | `diagrams/v1/` and `diagrams/v2/` |
| Replit deliberations | Replit entry plus human archive notes | `member-deliberations/replit/` |
| Public Mermaid renders | Mermaid-hosted links, indexed by the archive | `diagram-manifest.csv` |
| Slide decks and exports | Human-assembled project artifacts using the archived source material | `slides/` and `../archive/source-captures/presentation-imports/` |

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

## Diagrams and reproducibility

Every archived V1/V2 diagram has:

1. a stable row in [`diagram-manifest.csv`](diagram-manifest.csv);
2. editable Mermaid source under [`diagrams/`](diagrams/);
3. a rendered PNG under [`images/`](images/); and
4. a public Mermaid.ai link where one exists.

The source file is the reproducible record. Public Mermaid links are hosted
third-party renders and may change or disappear; the checked-in source and PNG
are the archive fallback.


## Historical-source note

The captured drafts disagree on AutoCAD version and exact origin date
(AutoCAD 10 / 1991 versus AutoCAD 12 / early 1990s). The canonical public
wording uses the non-specific “early 1990s” formulation. Future edits must not
reintroduce a more precise claim unless a primary source is added.

## Third-party assets and permissions

The public page and Replit V2 source reference:

- Mermaid and Replit GitHub avatar images, used as linked third-party marks:
  [Mermaid avatar](https://avatars.githubusercontent.com/u/57169982?s=60&v=4)
  and [Replit avatar](https://avatars.githubusercontent.com/u/983879?s=60&v=4).
- The OverKill Hill P³™ mascot hosted at
  `overkillhill.com/assets/img/OverKillHillP%C2%B3-Sentinel-Waiting-Square-1024.png`,
  owned or controlled by the publisher.
- Referral destinations for Replit, Mermaid, and Ko-fi, clearly labeled as
  referral/support links in the source notes.

Third-party logo/avatar permission was not separately recorded in the source
materials. Treat those remote images as attribution-dependent references:
retain the URLs and provider attribution, do not repackage them as owned
assets, and replace or remove them if permission or availability changes.


## Model-generated work

ChatGPT, Claude, Copilot, Gemini, Perplexity, Notion, and Replit generated
draft language and/or Mermaid submissions under the conditions documented in
[`council-brief.md`](council-brief.md). The model names identify providers or
tools used in the experiment; they are not human authors, legal rights holders,
or independent publishers. ChatGPT V2 Pro is an exhibition-tier variant and
is not directly comparable to the Core Five.

The council roster is intentionally tiered:

- **Core Five:** ChatGPT, Claude, Copilot, Perplexity, Gemini.
- **Exhibition:** ChatGPT V2 Pro.
- **Specialty roles:** Notion (archivist/synthesizer) and Replit (late entry).
- **Attempted and excluded:** Mermaid AI, because it did not engage the
  meaning-focused brief.
