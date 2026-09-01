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
| `ARTICLE-1.0` | `fa4ed2f7348c15a164dbb529b8a4e162fc51da7c` (accepted local source snapshot; targeted count-label release deployed from the external production source) | 2026-08-24; count label approved 2026-08-31; deployed 2026-09-01 | **PASS** — GitHub Pages deployment `6192155562`, production commit `d509a4343753476557fc761ffcea251312282a86`, workflow run `33455326456` completed successfully at 2026-09-01T00:35:27Z | **PASS WITH LINK LIMITATION** — HTTP 200 at the canonical URL, no redirect, approved count present once, old count absent; verified 2026-09-01T00:36:56Z | **PASS** — Open Graph and Twitter fields present; image returned HTTP 200 as PNG, 1536 × 1024; verified 2026-09-01T00:33:20Z | Keep `ARTICLE-0.5` as the rollback target: archive snapshot `c02f0662944e3b950fdcc659b18f19f5b2826c60`, production commit `3d25419d700fe279bbdbd808e16bfbbd2d673e8b`, Pages deployment `6187760304` |

The `ARTICLE-1.0` row is intentionally a handoff gate, not a claim that the
editorial cut is live. Its immutable source snapshot is recorded above for the
external deployment owner. The approval above authorizes the wording, not the
deployment; no local validation or GitHub Pages run is evidence that the
external article changed.

## External release gate status

| Field | Recorded value |
|---|---|
| Accepted source snapshot | `fa4ed2f7348c15a164dbb529b8a4e162fc51da7c` |
| External deployment identifier | `OKHP3/OverKill-Hill` production commit `d509a4343753476557fc761ffcea251312282a86`; GitHub Pages deployment `6192155562`; workflow run `33455326456` (`Publish GitHub Pages`, run 14); deployment status `success` at 2026-09-01T00:35:27Z |
| External validation | Final `Site Validation` run `33455326569` (run 861) passed for the same commit at 2026-09-01T00:36:52Z; the earlier run `33455101186` failed only because the generated search index was stale, and that artifact was regenerated before the final release commit |
| Canonical verification | **PASS WITH LINK LIMITATION** — direct request to `https://overkillhill.com/writings/first-diagram-is-a-liar/` returned HTTP 200 with no redirect at 2026-09-01T00:36:56Z; title remained `The First Diagram Is Usually a Liar: v0.5 | OverKill Hill P³™`, one H1 was present, the canonical tag matched the URL, the approved wording appeared once, and both old `18 diagrams` phrasings were absent |
| Social-preview verification | **PASS** — `og:title`, `og:description`, `og:url`, `og:image`, `twitter:card`, `twitter:title`, `twitter:description`, and `twitter:image` were present; the image returned HTTP 200 as PNG, 1536 × 1024, at 2026-09-01T00:33:20Z |
| Link verification | The repository root link returned HTTP 200. Four deck download links and three deep archive links returned HTTP 404 because the production article still points at historical paths that are absent from the current archive repository; these are recorded as a limitation, not treated as deployment evidence |
| Rollback target | `ARTICLE-0.5`: archive snapshot `c02f0662944e3b950fdcc659b18f19f5b2826c60`; last externally verified production commit `3d25419d700fe279bbdbd808e16bfbbd2d673e8b`; GitHub Pages deployment `6187760304` |

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