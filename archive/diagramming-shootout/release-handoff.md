# Public Article Release Handoff

This is the reproducible handoff record for the external article at
`https://overkillhill.com/writings/first-diagram-is-a-liar/`. It separates local
source preparation from the external deployment and prevents a healthy
workspace workflow from being mistaken for production publication.

## Owner/editorial approval record — count label correction

| Field | Value |
|---|---|
| Decision | Approved for the next authorized external editorial release |
| Approver | Jamie Hill / OverKill Hill P³™ — owner/editorial authority |
| Recorded | 2026-08-31 |
| Release candidate | The count-label correction in the local `ARTICLE-1.0` editorial cut; this does not authorize an in-place rewrite of the deployed `ARTICLE-0.5` page |
| Approved public wording | **15 diagram records across V1 and V2, presented in an 18-slide deck** |
| Scope | Replace the literal “18 diagrams” wording only through the external release process; retain the deployed v0.5 wording as historical copy until that release is deployed and verified |
| Approval evidence | Owner-approved project assignment for this release candidate, recorded before the source edit |

## Release records

| Release | Source snapshot | Prepared/released date | External deployment | Canonical verification | Social preview | Rollback |
|---|---|---|---|---|---|---|
| `ARTICLE-0.5` | `c02f0662944e3b950fdcc659b18f19f5b2826c60` (committed source snapshot) | 2026-08-24 | Verified public state; deployment system is external to this workspace | Verified 2026-08-24 at the canonical URL; see `release-manifest.md` | Metadata is present in the source; re-check at the canonical URL before republishing | Restore the last externally verified `ARTICLE-0.5` source/deployment |
| `ARTICLE-1.0` | `fa4ed2f7348c15a164dbb529b8a4e162fc51da7c` (accepted local source snapshot) | 2026-08-24; count label approved 2026-08-31 | Pending external deployment; do not describe as published | Pending external canonical verification | Pending external social-preview verification | Keep `ARTICLE-0.5` as the rollback target until all external gates pass |

The `ARTICLE-1.0` row is intentionally a handoff gate, not a claim that the
editorial cut is live. Its immutable source snapshot is recorded above for the
external deployment owner. The approval above authorizes the wording, not the
deployment; no local validation or GitHub Pages run is evidence that the
external article changed.

## External release gate status

| Field | Recorded value |
|---|---|
| Accepted source snapshot | `fa4ed2f7348c15a164dbb529b8a4e162fc51da7c` |
| External deployment identifier | Not recorded; the external deployment has not been run from this workspace |
| Canonical verification | Not run for `ARTICLE-1.0`; the deployed v0.5 article remains the verified public state |
| Rollback target | `ARTICLE-0.5`, source snapshot `c02f0662944e3b950fdcc659b18f19f5b2826c60`; external deployment identifier is not recorded in this workspace |

## ARTICLE-1.0 synthesis package

The prepared final copy, evidence route, final LinkedIn companion draft, and
preflight decision ledger are assembled in
[`v1.0-synthesis-handoff.md`](v1.0-synthesis-handoff.md). That package names
2026-09-10 as a target readiness date only. It does not assign a publication
date or satisfy any external gate.

## Handoff sequence

### 1. Prepare source

- Confirm the intended release ID matches `release-manifest.md`.
- Check the article, local Mermaid sources, SVG fallbacks, and links.
- Commit the exact source tree.
- Copy the full commit hash into this record and retain the release date.

### 2. Deploy externally

- Give the external deployment owner the exact commit/ref.
- Record the external deployment identifier, timestamp, and result.
- Do not infer deployment from the API or component-preview workflows in this
  workspace.

### 3. Verify the canonical URL

At the final URL, record:

- HTTP status and redirect destination;
- page title and description;
- `rel="canonical"` value;
- article release label;
- representative internal, external, Mermaid source, fallback, and download
  links.

### 4. Verify the social preview

Check the final URL with the intended crawler/debugger and record:

- `og:title`, `og:description`, `og:url`, and `og:image`;
- Twitter/X card type and image;
- image response status and dimensions, if available;
- any crawler cache limitation or known exception.

### 5. Preserve rollback

The rollback point is the last release that passed all external gates. Keep its
source commit and deployment identifier in this record. A failed or superseded
release is never erased from the archive; mark its result and retain the notes
for diagnosis.

## Ownership

Jamie Hill / OverKill Hill P³™ owns editorial acceptance and publication
decisions. The external production repository and hosting owner performs the
deployment. This workspace owns the reproducible archive and prepared source,
not the production runtime.