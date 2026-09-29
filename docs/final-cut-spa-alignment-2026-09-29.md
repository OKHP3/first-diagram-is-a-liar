# Final Cut field guide alignment

## Delivery decision

The owner authorized direct updates to the GitHub Pages tutorial and safe
synchronization of the existing Replit project. GitHub main and its existing
Pages workflow remain the delivery path. Replit is a synchronized development
environment; no Replit deployment is needed to update GitHub Pages.

The implementation starts from main `49adc76baba816585e0ffd845d0fe500354aa87d`
in a separate managed worktree. The owner's original Windows checkout,
unpublished local commit, and working changes remain intact.

## Alignment map

| Final Cut requirement | Application change |
|---|---|
| One complete argument | The premise links to a full reading edition generated from the committed article HTML, with figures, captions, section navigation, and source links. |
| ROY is a heuristic | Step 2 adds total effort, reader-task accuracy, comparison conditions, separate units, and the distinction between a ratio and net benefit. |
| Preserve V1/V2 | Teaching states and historical competition rounds are explicitly distinguished. Original sources and images are unchanged. |
| Bounded Council findings | Author selections, unequal access, evolving prompts, peer exposure, missing score provenance, and Claude V2's lost negative route are disclosed. |
| Consistent visual preferences | Step 3 adds an interactive palette, family and font profile with a copyable prompt and JSON preferences. |
| Host and family limits | The profile is explicitly an example; Mermaid rendering, installed skills, script execution and universal compatibility are not claimed. |
| Practical business use | Step 5 adds an illustrative purchase-request process, missing evidence, decision authority, decline paths, ownership, PNS and maintenance triggers. |
| Tool pathways | All twelve requested resource destinations and ten topic tags are present. |
| Historical scaffolding | Old source-room lineage is collapsed and relabeled as history. The false current-v0.5 and proposed-v0.8/v0.9 interpretations are removed. |

## Source and state boundaries

- `docs/final-publication/website-candidate.html` supplies the reading body.
  The Vite plugin changes only the document title, canonical URL and delivery
  banner, and emits `final-cut.html`. There is no independently maintained
  second article body. The same route is served in local development.
- The existing five-step session schema and handoff filenames remain stable.
  Handoff prose includes the fuller ROY and comparison limits. Redacted export
  remains the default; full export still requires deliberate confirmation.
- The visual-profile exercise is kept in component memory. It generates a
  prompt for explicit clipboard copying, with a selectable fallback. It does
  not install packages, invoke an AI, render Mermaid, persist preferences,
  or send the chosen palette to analytics.
- The existing production analytics behavior and its privacy filters remain.
- Deployment of this reading edition does not replace the external
  overkillhill.com or LinkedIn article. Those retain separate publication
  workflows and receipts.

## Replit intake evidence

The signed-in Replit shell reported `/home/runner/workspace`, clean `main`,
matching GitHub origin, no unmerged files or active merge, and HEAD `249b72a`.
After fetch it was zero commits ahead and one behind. A fast-forward to
`49adc76` completed with a clean status and `0 0` parity, bringing in the
Final Cut source packet. The Replit app connector separately reported expired
authentication; the browser shell operation succeeded independently.

The implementation PR, CI run, Pages deployment, live readback and final
Replit synchronization establish their own evidence after this source record.
No local application test suite was added or run for this change. The existing
repository CI checks continue to govern integration.
