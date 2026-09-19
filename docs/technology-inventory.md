# Technology inventory and update plan

Reviewed: 2026-09-18 America/Chicago; release lookups continued on 2026-09-19 UTC.

The baseline audit found ten direct npm dependencies and 108 locked package
entries in all, including seven direct dependencies and 36 transitive entries
with newer stable releases. These historical counts include optional native
packages for several operating systems; they are not 108 packages loaded by a
visitor's browser. The application table below reflects the subsequent reviewed
updates. Fresh Actions artifacts report the current lockfile in full.

The complete, dated comparison is in
[technology-versions.md](technology-review-2026-09-18/technology-versions.md),
with machine-readable evidence in
[technology-versions.json](technology-review-2026-09-18/technology-versions.json).
That report has 122 rows: 108 packages, five workflow actions, seven external
technology references, and two audit-host observations. Each lookup has a
publisher URL. It records the source HEAD and whether the checkout was modified.

## Scope and evidence

This is a repository inventory, not an inventory of every application installed
on a workstation. The root React tutorial, build chain, validation scripts,
GitHub delivery, Replit configuration, preserved archive, and executable skill
support files were inspected. The GitHub connector confirmed that the public
main package manifest matches the local dependency declarations.

The original audited HEAD was `79e4cd71d9476db0755231a4c90f5c46e7c5f16d`.
The dated report was generated from the local implementation before publication.
The automation and synchronization runbook were subsequently merged in
[PR #7](https://github.com/OKHP3/first-diagram-is-a-liar/pull/7), whose checks and
Pages deployment passed. React and its companion packages were upgraded in
[PR #8](https://github.com/OKHP3/first-diagram-is-a-liar/pull/8). The dated baseline
remains preserved rather than being rewritten as post-upgrade evidence.

- **Confirmed:** manifest and lock versions, source imports, workflow selectors,
  local command versions, artifact headers, and publisher release responses.
- **Inferred:** a newer package will be a useful upgrade candidate. A higher
  version alone does not establish compatibility.
- **Proposed:** adopt updates through tested pull requests, use the current Node
  LTS line, and review archive rendering separately.
- **Unknown:** hosted Mermaid renderer version and historical PptxGenJS
  version. Check the current hosted workflow run for
  its execution and artifact status.

The Replit connector returned `UNAUTHORIZED` with reauthentication required.
The browser Shell was verified separately on 2026-09-19 UTC: Node `24.13.0`,
npm `11.6.2`, Python `3.13.11`, and Chromium `138.0.7204.100`. Shell pull and
push succeeded independently of the expired connector session. The `.replit`
file alone is evidence of configuration, not of a running process or installed
executable.

## Application and build packages

All ten are exact pins in `package.json` and `package-lock.json`. Latest means
the publisher's stable npm `latest` channel, checked live, with prereleases
rejected. React and React DOM, their types, and each build-plugin family should
be reviewed together.

| Technology | Role | In place | Latest stable | Finding |
|---|---|---:|---:|---|
| TypeScript | Type checking and TS/TSX source | 7.0.2 | [7.0.2](https://registry.npmjs.org/typescript/latest) | Current |
| React | UI runtime | 19.3.0 | [19.3.0](https://registry.npmjs.org/react/latest) | Current |
| React DOM | Browser rendering | 19.3.0 | [19.3.0](https://registry.npmjs.org/react-dom/latest) | Current |
| Vite | Development server and production bundler | 8.3.0 | [8.3.0](https://registry.npmjs.org/vite/latest) | Current |
| Vite React plugin | React integration | 6.1.1 | [6.1.1](https://registry.npmjs.org/%40vitejs%2Fplugin-react/latest) | Current |
| Tailwind CSS | Utility styling | 4.3.3 | [4.3.3](https://registry.npmjs.org/tailwindcss/latest) | Current |
| Tailwind Vite plugin | CSS build integration | 4.3.3 | [4.3.3](https://registry.npmjs.org/%40tailwindcss%2Fvite/latest) | Current |
| `@types/node` | Build-script and Node API types | 26.6.2 | [26.6.2](https://registry.npmjs.org/%40types%2Fnode/latest) | Current; type declarations do not upgrade the Node 24 runtime |
| `@types/react` | React types | 19.3.0 | [19.3.0](https://registry.npmjs.org/%40types%2Freact/latest) | Current |
| `@types/react-dom` | React DOM types | 19.3.0 | [19.3.0](https://registry.npmjs.org/%40types%2Freact-dom/latest) | Current |

The baseline's remaining 98 lock entries are individually listed in the report. They
include Rolldown and its native bindings, Oxc, Lightning CSS, Tailwind Oxide,
TypeScript native distributions, React Scheduler, source-map tools, and their
helpers. Upgrade these through their owning packages and npm's resolver.
Do not force every transitive package onto an incompatible newest major.

## Runtimes, languages, and development tools

| Technology | In-place evidence | Latest stable checked | Update route |
|---|---|---|---|
| Node.js | Local `24.11.1`; original CI selector `22`; Replit selector `24`; this change makes CI read `24` from `.nvmrc` | [26.9.0 Current; 24.21.0 LTS; 22.23.2 in the old CI line](https://nodejs.org/dist/index.json) | CI resolves newest Node 24 patch with `check-latest`; new LTS line creates a review signal |
| npm | Local `11.6.2`; lockfile format `3`; no project npm pin | [12.0.2](https://registry.npmjs.org/npm/latest); Node 24.21.0 bundles 11.19.0 | Bundled npm follows CI Node; separately review npm major upgrades |
| JavaScript / ECMAScript | Executable `.mjs`, `.js`, `.cjs`; TypeScript target and libraries `ES2022`, modules `ESNext` | [ECMAScript 2026, ECMA-262 edition 17](https://ecma-international.org/publications-and-standards/standards/ecma-262/) | Browser-support decision, not an npm version to bump |
| Python | Replit module `python-base-3.13`; local launcher resolves `3.14.0rc1` | [3.14.7](https://www.python.org/downloads/) | Replace the local prerelease through the Python installer; verify Replit module support before editing configuration |
| Python standard library | 24 tracked Python files; import inspection found no third-party Python imports or pip manifest | Ships with Python | Skill support only; no Python in the tutorial runtime |
| Bash | `scripts/post-merge.sh`; local Git Bash `5.3.15(2)-release`; CI shell patch unpinned | [5.3 with patch 020, equivalent to 5.3.20](https://ftp.gnu.org/gnu/bash/bash-5.3-patches/) | Host package manager; do not replace Git Bash components independently of Git for Windows |
| Git | Local `2.55.0.windows.5` | [Git for Windows 2.55.0.windows.5](https://github.com/git-for-windows/git/releases/latest); [upstream Git 2.55.0](https://www.kernel.org/pub/software/scm/git/) | Workstation updater; GitHub runner maintains its Git |
| GitHub CLI | Local `2.96.0`; optional authenticated fallback for local action-release lookups | [2.101.0](https://github.com/cli/cli/releases/latest) | Workstation updater; new scheduled review uses Node HTTPS directly |
| Chrome / Chromium | Local Chrome `153.0.8010.52`; Replit requests unpinned `chromium`; CI uses runner Chrome and prints its actual version | [Chrome for Testing stable 153.0.8010.52](https://googlechromelabs.github.io/chrome-for-testing/last-known-good-versions.json) | Browser/runner updater; Chrome release is a reference, not proof of Replit Chromium's patch |
| Edge | Local `153.0.4234.32`; optional manual QA browser, not an app dependency | [Windows x64 stable 153.0.4234.48](https://edgeupdates.microsoft.com/api/products?view=enterprise) | Edge updater |
| Nix package environment | Replit channel `stable-25_05`; Nix executable version unknown | [NixOS/Nixpkgs stable release 26.05](https://nixos.org/blog/announcements/2026/nixos-2605/) | Verify Replit-supported channel names first; upstream NixOS version is not a Replit module identifier |
| Ubuntu / Linux runner | `ubuntu-latest`; exact image revision only available in a hosted job | [GitHub runner image release stream](https://github.com/actions/runner-images) | GitHub manages the moving image; record Set up job output when testing updates |

Node's [release policy](https://nodejs.org/en/about/previous-releases) recommends
LTS for production. The new CI selector intentionally follows LTS 24 rather
than adopting Node Current 26 just because its number is larger.

npm 12.0.2 declares Node `^22.22.2 || ^24.15.0 || >=26.0.0`.
The local Node 24.11.1 does not meet that requirement. Update Node first if
adopting npm 12 locally. The automation does not install system software.

The seven private skill `package.json` files are version `0.1.0`, have Node test
scripts, and declare no external package dependencies. Their package versions
are project metadata, not independently published technology releases.
`.agents/skills/` and its mirrored skill assets remain unchanged.

## Diagram and archive tooling

| Technology | In place | Latest stable | Treatment |
|---|---|---|---|
| Mermaid benchmark | Exact `11.12.0` in `scripts/benchmark-mermaid.mjs` | [12.0.0](https://registry.npmjs.org/mermaid/latest) | Experimental candidate, not installed in the root app; review breaking changes and benchmark before changing |
| Vite benchmark | Separate exact `8.2.2` in the same script | [8.3.0](https://registry.npmjs.org/vite/latest) | Review alongside the root Vite upgrade |
| Mermaid editorial renderer | CDN selector `mermaid@10` in the preserved article JavaScript; exact resolved patch unknown | [12.0.0](https://registry.npmjs.org/mermaid/latest) | Major migration requires visual and fallback checks; do not silently rewrite historical evidence |
| Hosted Mermaid / Mermaid Chart | Public hosted diagram references; renderer version not disclosed | Service-managed; [Mermaid source releases](https://github.com/mermaid-js/mermaid/releases) do not prove the hosted version | Check hosted output and retain `.mmd` plus static fallbacks |
| PptxGenJS | Named in `archive/diagramming-shootout/slides/README.md`; generator and installed version absent | [4.0.1](https://registry.npmjs.org/pptxgenjs/latest) | Monitor publisher release against reviewed baseline; no automatic deck regeneration |
| PowerPoint authoring metadata | Five PPTX files identify `Microsoft Office PowerPoint`, `AppVersion 16.0000` | Microsoft 365 is channel-managed; exact authoring build unknown | This generic metadata is not a PptxGenJS version or an exact Office build |
| AI authoring services | Historical Council and Sora provenance, not executable app integrations | Hosted service/model revisions, no installed semantic version | Preserve the original records; a new model release is not permission to regenerate experiments |

The root tutorial uses checked-in diagram assets. It has no Mermaid npm runtime,
backend, database, OAuth, authentication service, or Python server.

## Web standards, formats, and managed services

These are present, but most have no installed package version. Specification
editions are references, not mandatory file migrations.

| Technology | In-place contract | Current reference / latest published standard | Handling |
|---|---|---|---|
| HTML | HTML doctype; React-rendered DOM and preserved static pages | [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/) | Browser acceptance; no numbered HTML package |
| CSS | Custom CSS plus Tailwind; no declared CSS edition | [CSS Snapshot 2026](https://www.w3.org/TR/CSS/) | Feature support and visual checks; snapshot is not one implementation version |
| DOM, Web Storage, History, Clipboard, Blob, Fetch, URL, IntersectionObserver, WebSocket | Browser APIs; Chrome DevTools Protocol in acceptance scripts | Living browser standards; protocol follows tested browser | Exercise behavior; do not invent a single API version |
| Markdown | Repository prose, code fences, tables and handoff exports; parser unpinned | [CommonMark 0.31.2](https://spec.commonmark.org/), [GFM 0.29-gfm](https://github.github.com/gfm/) | GitHub/editor renderer-managed |
| YAML | Workflow, Dependabot and skill metadata; dialect not declared | [YAML 1.2.2](https://yaml.org/spec/1.2.2/) | Validate provider schema; Dependabot `version: 2` is its config schema, not YAML version |
| TOML | `.replit`; dialect not declared | [TOML 1.1.0](https://toml.io/en/) | Use syntax supported by Replit |
| JSON | Config, lockfile, structured captures and stored session contracts | [RFC 8259](https://www.rfc-editor.org/rfc/rfc8259) | Parse and validate; application schema versions are separate |
| JSON-LD | Preserved article structured metadata, `schema.org` context | [JSON-LD 1.1](https://www.w3.org/TR/json-ld11/) | Editorial surface only |
| Web App Manifest | `public/site.webmanifest`; no version declared | [Web Application Manifest](https://www.w3.org/TR/appmanifest/) is an evolving specification | Presence does not imply a service worker or offline PWA |
| CSV | Diagram manifest; dialect not declared | [RFC 4180](https://www.rfc-editor.org/rfc/rfc4180) convention | Preserve data and escaping |
| SVG | Icons and diagram fallbacks; no explicit version attribute found | [SVG 1.1 second edition Recommendation](https://www.w3.org/TR/SVG11/); SVG 2 work is a separate standards track | Browser-rendered; preserve source/render relationships |
| PNG | Public icons and archived raster diagrams; no per-file standard edition marker | [PNG third edition](https://www.w3.org/TR/PNG/) | No need to re-encode historical pixels for a standard increment |
| PPTX / Office Open XML / ZIP / XML | Five preserved slide files; OOXML conformance edition not declared | [ECMA-376](https://ecma-international.org/publications-and-standards/standards/ecma-376/) multipart standard | Preserve original bytes and provenance |
| PDF | Four archive PDF headers declare `1.6`; the separate privacy test fixture is not a publication artifact | [PDF 2.0, ISO 32000-2:2020](https://www.iso.org/standard/75839.html) | Preserve historical exports; a format revision does not require conversion |
| MP4 | One Sora artifact: `isom`, compatible `iso2`, `avc1`, `mp41` brands; exact codec profile not inspected | ISO media format family; no applicable package release | Preserve original video; brand data does not establish encoder version |
| Google Fonts | CSS API v2; Alfa Slab One, DM Sans, JetBrains Mono; exact font builds unpinned | [Managed Fonts CSS API](https://developers.google.com/fonts/docs/css2) | Provider-managed; test layout after changes |
| jsDelivr | Preserved article's Mermaid CDN | Managed CDN, no local version | Track the Mermaid selector, not a fictitious CDN version |
| Google Analytics / gtag | GA4 snippet in the preserved editorial HTML only; absent from root tutorial | Managed service, no pinned gtag implementation version | Keep archive/editorial boundary; no analytics added to tutorial |
| GitHub, GitHub Pages, Actions, Dependabot | Hosted services; source-controlled workflow and Dependabot schema 2 | Provider-managed | Track action packages below; verify deployment separately |
| Replit | `.replit` modules, Nix channel, preview workflow and merge hook | Hosted service; runtime modules have separate versions | Reauthenticate and verify remote state before claiming convergence |
| OverKill Hill theme/app assets, Notion, LinkedIn | External article styling, public evidence and publication links | Externally managed; no local release pin | Owned elsewhere; a repository update cannot upgrade these surfaces |

VS Code, File Explorer, ChatGPT Desktop, and the selected computer/browser
connectors are working tools, not required technologies shipped by this
repository. Their presence in a request does not make them application dependencies.

## GitHub Actions

The first four selectors already existed; the report-artifact action is added
by this change. Major tags float within their release line. They do not prove
which exact commit an earlier workflow executed.

| Action | Selected major | Latest stable checked |
|---|---|---|
| Checkout | `v7` | [v7.0.1](https://github.com/actions/checkout/releases/latest) |
| Setup Node | `v7` | [v7.0.0](https://github.com/actions/setup-node/releases/latest) |
| Upload Pages artifact | `v5` | [v5.0.0](https://github.com/actions/upload-pages-artifact/releases/latest) |
| Deploy Pages | `v5` | [v5.0.1](https://github.com/actions/deploy-pages/releases/latest) |
| Upload report artifact | `v7` | [v7.0.1](https://github.com/actions/upload-artifact/releases/latest) |

## Implemented update process

1. **Discover and propose:** `.github/dependabot.yml` now checks npm and GitHub
   Actions every Monday at 09:00 America/Chicago. React, Tailwind and Vite
   families are grouped. Other npm updates have their own group; majors are
   not ignored. npm security grouping is configured, but repository security
   updates must also be enabled in GitHub for that separate service to act.
   Exact direct pins and the lockfile are updated together in PRs.
2. **Verify before adoption:** every PR runs contract tests, audit-script tests,
   type checking, the production build, archive and campaign-evidence checks,
   Mermaid delivery checks, and Chrome browser acceptance. Deployment runs
   after a main push and successful checks. PR jobs have read-only repository
   permissions. The existing test scripts now work with Windows file URLs and
   wait for reload to finish before checking the new document.
3. **Report the gaps Dependabot cannot edit:** the technology review runs each
   Monday at 14:17 UTC, or manually. It discovers every locked package and
   workflow action, reads benchmark/CDN/Replit selectors from their source,
   and queries official npm, GitHub, Node and Python feeds. It writes a full
   job summary and retains JSON/Markdown artifacts for 90 days.
4. **Keep findings current:** one bot-owned review issue is created or updated
   when actionable findings change. Unchanged findings do not generate a new
   issue or comment. A fully clear report closes only that bot-owned issue.
   Transient lookup failures receive bounded retries; longer server backoff
   is reported for a later rerun. Failed lookups are recorded as unknown and fail the job; they cannot produce
   an all-current result. Unknown historical installed versions remain explicit.
5. **Review and merge:** the maintainer inspects release notes, compatibility,
   all checks and the resulting diff. There is no unattended auto-merge.
   GitHub reported auto-merge disabled, no classic protection on main, and no
   active main rules on this review date. Accordingly the workflow runs checks
   but does not itself prevent someone manually merging a failed PR. If
   mandatory enforcement is desired, require `contracts` and `build` in the
   repository's main rules. No repository security settings were changed here.
6. **Verify deployment and recovery:** after an accepted PR, confirm Actions
   and Pages complete, smoke-test the five-step route and export flow, and
   synchronize Replit separately. Revert the update PR if acceptance fails.
   Recreate dependencies with `npm ci` using the restored lockfile.

The weekly schedule produces tested update proposals, not an instant guarantee
that every upstream release is adopted. GitHub schedules can be delayed or
disabled on inactive public repositories. Check the workflow's last successful
run during monthly maintenance and use manual dispatch after a long pause.
[GitHub documents the default-branch requirement and Dependabot configuration](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-version-updates).

## Review routes beyond npm

| Surface | Trigger and owner action | Acceptance |
|---|---|---|
| Node CI | Weekly report flags a new LTS major; maintainer updates `.nvmrc`, reviews types, and checks available Replit modules | Full PR checks on the proposed LTS; latest patch in chosen major resolves automatically |
| npm | Report detects a newer major; maintainer first satisfies its Node engine requirement | Clean install and all project checks; do not globally install npm from this workflow |
| Python / skills | Report flags Replit minor drift; maintainer replaces local prerelease and selects a supported Replit module | Run the changed skills' Python tests; no root pip dependency set exists |
| Mermaid | Report reads both the benchmark pin and editorial CDN selector | Review migration notes, benchmark budget, actual diagram rendering, static fallback and source-copy behavior; preserve original outputs |
| PptxGenJS | Report compares publisher stable with reviewed baseline | Recover generator source and exact environment before regeneration; inspect resulting decks and PDFs |
| Nix / Chromium / Bash / Git / GitHub CLI / browsers | Host/browser updater plus monthly check of the publisher links above | Record actual host versions and rerun local acceptance; verify Replit-supported Nix channel before edits |
| Web standards, formats and services | Monthly maintainer review and provider notices; no generic semver updater applies | Change only for an actual compatibility or security need, with relevant layout, format or service checks |
| New dependencies or runtime systems | When adding one, use a manifest if available or extend `.github/technology-inventory.json` and the matching release adapter | Include it in the report and document the owner/update route |

## Running the review

```bash
npm run audit:technologies
npm run test:technology-audit
```

Reports default to ignored `.local/technology-review/`. To preserve a deliberate
dated review, pass `-- --out docs/technology-review-YYYY-MM-DD`. The local audit
only reads publisher feeds and writes local reports. It does not edit dependencies,
create issues, or install software. The separate issue updater is called only by
the scheduled or manually dispatched workflow and needs its scoped GitHub token.
When repository Issues are disabled, the workflow records that setting and keeps
the complete Actions summary and downloadable artifact. It does not enable
Issues or attempt an issue write. Authentication failures and unknown repository
settings still fail visibly. Dependabot pull requests work independently.

## Validation and activation

Confirmed locally with Node 24.11.1, npm 11.6.2, and Chrome 153.0.8010.52:

- Clean `npm ci`, TypeScript check and production build: PASS.
- Pure contracts: PASS, seven checks.
- Audit classification, unknown/error handling, dependency discovery, issue
  lifecycle and source anchors: PASS, eight tests.
- Archive integrity: PASS, five anchors.
- Campaign evidence: PASS, 86 paths and 11 fixtures.
- Mermaid source/link delivery: PASS, three featured diagrams, no broken
  canonical destinations. This is not proof of a new hosted renderer version.
- Browser acceptance: PASS, 23 checks, including persistence, exports, narrow
  layout and archive fallback/copy behavior.
- GitHub workflow syntax: PASS with official actionlint 1.7.12, downloaded
  locally and checked against its published checksum; this validator is not an
  application dependency.
- Live release inventory: PASS, 122 rows, zero failed lookups.

The results above are the local implementation snapshot. Activation requires
merging into the GitHub default branch and a successful
[Technology version review run](https://github.com/OKHP3/first-diagram-is-a-liar/actions/workflows/technology-version-review.yml)
with its complete report artifact. Inspect the
[Pages workflow](https://github.com/OKHP3/first-diagram-is-a-liar/actions/workflows/deploy-pages.yml)
and live site separately for deployment evidence. A successful review does not
upgrade application packages or the Replit runtime; passing dependency PRs still
need maintainer review and merge.
