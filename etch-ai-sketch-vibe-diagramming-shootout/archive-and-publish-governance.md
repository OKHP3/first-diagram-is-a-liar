# Archive and Publish Governance

## Boundary

This repository has two intentionally separate responsibilities:

| Surface | Owner | Responsibility | Deployment status |
|---|---|---|---|
| `etch-ai-sketch-vibe-diagramming-shootout/` | Jamie Hill / OverKill Hill P³™ | Evidence archive: prompts, member submissions, rendered artifacts, provenance, and release records | Archive in this workspace; not the public host |
| `archive/editorial-cut/first-diagram-is-a-liar/` | Jamie Hill / OverKill Hill P³™ | Reproducible static source prepared for the external public article | Prepared source only; external deployment is managed and verified outside this workspace |
| `src/` and the Vite root configuration | Workspace development owner | Client-side First Diagram Field Guide tutorial | Prepared for GitHub Pages; live deployment is unverified |
| `archive/replit-workspace/` | Workspace development owner | Superseded API and component-preview infrastructure | Preserved source; not the active application runtime |

The public production repository and hosting account are external to this
workspace. A file being present here, or a workflow being healthy here, does
not mean that it has been deployed to `overkillhill.com`.

Do not imply that a local tutorial build, API, or mockup workflow publishes
`overkillhill.com`. The production URL is canonical only after external
deployment has been verified.

## Archive contract

Each `member-deliberations/{member}/` folder follows this contract:

1. `README.md` — member identity, role/tier, conditions, contribution summary,
   round inventory, ownership boundary, and links;
2. `{round}-diagram.md` — one file per submitted round, where `{round}` is
   `v1`, `v2`, or a clearly qualified variant such as `v2-pro`;
3. provider links, rendered-artifact links, and asset notes, clearly labelled
   as external;
4. an update note when the archive is corrected, with the date, reason, and
   affected record.

Every submission record must state:

- **Member/provider:** the named model or tool, without transferring authorship;
- **Round:** `Round 1 / V1`, `Round 2 / V2`, or an explicit exhibition/specialty
  qualifier;
- **Conditions:** whether the brief was cold, peer-informed, late-entry,
  exhibition, or otherwise non-comparable;
- **Contribution:** what the member supplied and what the human editor changed,
  if known;
- **Sources:** repository-relative source paths first, then external URLs;
- **Archive status:** `archived submission`, `specialty-role archive`,
  `exhibition archive`, `prepared`, or another specific status.

Use lowercase kebab-case for filenames and the member's stable directory name.
Use human-readable labels in headings and tables. Do not silently rename a
historical file: update links and the manifest together if normalization is
needed.

Do not invent missing deliberations, voting records, or model conditions.
When an entry is late, specialty, exhibition, or excluded, keep that status
visible in the member README and canonical story.

## Source and release record

Every article page version has a release identifier, release date, and
committed source snapshot. The release identifier belongs to the article
(`ARTICLE-0.5`, `ARTICLE-1.0`), not to a council diagram round. The release
manifest is the index; the handoff record is the operational evidence.

For a prepared but unpublished page, record the source commit and date while
marking deployment and canonical verification as pending. Do not call it
current public content until the external checks pass.

See [`release-handoff.md`](release-handoff.md) for the fill-in record and
verification sequence.

## Publication record

Before a public release, record:

- release identifier and date;
- source repository and immutable commit/ref;
- external deployment result and deployment identifier;
- canonical URL, redirect behavior, and HTTP result;
- social image and title/description metadata result;
- Mermaid render, fallback, source-download, and outbound-link result;
- analytics/debug result, when instrumentation is part of the release;
- rollback point: last verified commit/deployment identifier.

Publishing has five distinct gates:

1. **Prepare source:** edit, render, inspect, and commit the source snapshot.
2. **Deploy externally:** publish that exact snapshot through the production
   repository/host; record the deployment identifier.
3. **Verify canonical URL:** check the final URL, redirects, status, title,
   canonical tag, and representative links.
4. **Verify social preview:** check the Open Graph/Twitter image and text at
   the canonical URL; record a preview result or known crawler limitation.
5. **Record rollback:** preserve the prior verified release and the exact
   source/deployment point to restore.

The release is ready only when all five gates have evidence. An archive-only
preparation is not a public release: label it as prepared or unpublished until
the external page, metadata, and link checks are verified.

## Rollback

Rollback means returning the external production repository to the last
verified source snapshot. Do not delete archive evidence to make a release
look cleaner. Preserve the failed release notes and link checks for diagnosis.
