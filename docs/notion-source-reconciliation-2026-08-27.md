# Notion source reconciliation

Reviewed 2026-08-27. This is a public-safe synthesis of the six supplied Notion pages plus three additional relevant article pages found through the connected workspace search for the First Diagram Is a Liar tutorial and evidence archive.

## Decision

The Notion material is implemented as a source room inside the tutorial and as this traceable repository note. It is a synthesis, not a wholesale mirror of private working pages. The repository remains the public source of truth for shipped assets, canonical article status, and evidence boundaries.

All six supplied links resolved as pages. Three additional relevant article pages were also fetched: v0.5, v0.6, and v1.0. Workspace search also located the adjacent Visual Language Diagram Types database. Its schema and 80 rows were queried and copied as a public-safe reference snapshot. The database belongs to the separate Mermaid Theme Builder effort, so it is surfaced as an adjacent reference rather than treated as a new tutorial feature.

## Source inventory

| Source | Captured | Role in the source set | Public-safe treatment |
| --- | --- | --- | --- |
| ROY x Mermaid - LinkedIn Post + Diagram Competition | 2026-08-24 | Experiment hub, thesis evolution, prompt and deliverable logic | Method stages, deliverable stack, and historical framing |
| Public Hub Working Copy - First Diagram Is a Liar | 2026-04-28 | Internal hub draft and long-form working copy | ROY explanation, Mermaid mechanism, scoring conditions, and release lineage |
| LinkedIn Article v0.1 | 2026-04-21 | Protoform article cut | Historical release note and origin of the public experiment |
| LinkedIn Article v0.4 | 2026-05-18 | Council-of-AIs article cut | Council method, fairness, and source-first Mermaid practice |
| LinkedIn Article v0.5 | 2026-08-27 | Current canonical article lineage | Council interviews, scoring dimensions, and current release boundary |
| LinkedIn Article v0.6 | 2026-08-27 | Notion specialist deep dive | Writer's room, PRD, consolidation, and documentarian role |
| LinkedIn Article v0.8 | 2026-04-28 | Proposed rematch article cut | Review-only release note about cleaner conditions and updated prompts |
| LinkedIn Article v0.9 | 2026-04-28 | Proposed Theme Builder article cut | Review-only release note about style governance |
| LinkedIn Article v1.0 | 2026-08-27 | Source-vault structure | Case-study receipts, rubric, and reusable method; not confirmed as published |

Private Notion URLs, page IDs, workspace ancestors, internal page links, and temporary signed image URLs are not reproduced here. They do not belong in a public GitHub source tree.

## Implemented copy

The tutorial's new **Source room** preserves the information that was net-new or complementary to the existing app:

- The central thesis: diagrams are claims about structure, and a tidy first pass can hide unresolved thinking.
- The ROY test: understanding produced divided by explanation invested. The point is not visual beauty or a literal word count; it is useful compression and shared understanding.
- The Mermaid mechanism: structured text makes a draft source-controlled, diffable, renderable, and cheap to revise.
- The working method: frame the expensive confusion, render an ugly first pass, compare disagreement under visible conditions, then hand off image, source, and feedback loop together.
- The deliverable stack: article or post for the argument, diagram for the proof, source for the receipt, and comments or polls for the next iteration.
- The council loop: fan out the same brief, compare outputs, question assumptions, synthesize deliberately, and patch the next version.
- The historical progression from v0.1 through the current v0.5, the v0.6 Notion specialist role, the incomplete v1.0 source-vault structure, and the clearly marked review-only v0.8 rematch and v0.9 style-governance directions.

These are implemented in `src/notion-sourced.ts` and rendered by the handoff step in `src/App.tsx`.

## Prompt loop retained from the experiment

The first source page records a more detailed sequence behind the compact tutorial. The public implementation keeps its logic in four stages and retains this expanded order in the source map:

`spark confusion -> name audience and decision -> draft the claim -> run the ROY check -> choose the diagram type -> render Mermaid V1 -> ask what is obvious in five seconds -> refactor labels, order, or scope -> kill clutter -> add hierarchy -> write the post -> trim words, not meaning -> render image and code -> publish with the source -> collect signals -> patch V2`

This is intentionally a method loop rather than a static checklist. The important handoff is from feedback back to revision.

## Reconciliation with the repository

The source pages complement, but do not replace, the repository's existing canonical material:

1. The five-step application journey remains the product spine: spot the lie, measure ROY, draw the truth, use disagreement, and ship the proof.
2. The archive remains authoritative for Mermaid source, rendered assets, prompts, release manifests, provenance, and fairness labels.
3. The current canonical article is v0.5. v0.6 through v0.9 are specialist or review-stage material, not published releases.
4. The adjacent diagram registry contributes support, notation, fidelity, and example-boundary vocabulary. It does not mean the tutorial implements every listed diagram type.
5. Precise historical claims that conflict across working pages, including exact AutoCAD chronology and participant counts, are not promoted into the copy. The public version uses the repository's more cautious language.
6. Council conditions remain distinct. Core Five, Exhibition, Specialty, and Attempted are not flattened into one ranking.

## Exclusions and open decisions

- The full historical article drafts are not duplicated into the app. The app needs a working journey, not a second reading surface for the same long copy.
- Temporary signed asset links are excluded. Checked-in archive assets and canonical public links remain the durable evidence path.
- The current state of GitHub Pages still requires deployment and live smoke-test confirmation. This source-room addition does not claim that hosting is live.
- The v0.8 and v0.9 directions remain review-only until an owner promotes them through the repository's release process.
- The related Mermaid Theme Builder taxonomy page is not copied wholesale because it describes another project. Its Visual Language Diagram Types database is represented by a public-safe 80-row snapshot because its support vocabulary directly informs the tutorial's warning against treating approximation as native notation.

## Evidence status

- **Confirmed:** six supplied Notion links plus three additional relevant article pages were retrievable as pages; the adjacent registry database exposed 80 rows; the source themes above were present; the tutorial and repository archive already existed.
- **Implemented:** public-safe source synthesis in the app, nine normalized page captures, an 80-row database snapshot, and this reconciliation note.
- **Inferred:** the release progression is treated as historical lineage, not as a promise that every draft was published.
- **Unknown:** any additional databases or private linked pages not included in the fetched page set.
