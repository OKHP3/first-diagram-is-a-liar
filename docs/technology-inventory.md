# Technology Inventory

Reviewed: 2026-08-24

## Scope

This repository now has a small TypeScript tutorial application at the root,
with the original writing and methodology archive preserved under `archive/`.
The inventory covers both the tutorial runtime and the technologies used to
author, render, or package the preserved archive. The `.agents/skills/`
directory is repository metadata for agent workflows and is not part of the
application bundle.

## Technologies in the archive

| Technology | Role in this repository | In-place version | Latest stable checked on 2026-08-24 | Version source | Tracking status |
|---|---|---:|---:|---|---|
| TypeScript | Strict application language and type checking | 7.0.2 | 7.0.2 | [TypeScript releases](https://github.com/microsoft/TypeScript/releases) | Pinned in `package.json` and `package-lock.json` |
| React | Tutorial application UI runtime | 19.2.8 | 19.2.8 | [React releases](https://github.com/facebook/react/releases) | Pinned in `package.json` and `package-lock.json` |
| Vite | Local development server and production bundler | 8.2.2 | 8.2.2 | [Vite releases](https://github.com/vitejs/vite/releases) | Pinned in `package.json` and `package-lock.json` |
| Tailwind CSS | Utility CSS integration through the Vite plugin | 4.3.3 | 4.3.3 | [Tailwind CSS releases](https://github.com/tailwindlabs/tailwindcss/releases) | Pinned in `package.json` and `package-lock.json` |
| npm | Dependency installation and scripted validation | npm 11.x in the local validation environment | Platform-managed | [npm documentation](https://docs.npmjs.com/) | Lockfile committed; npm major is selected by the workflow's Node 22 setup |
| GitHub Pages | Static hosting target for the tutorial bundle | Workflow-managed | Platform-managed | [GitHub Pages documentation](https://docs.github.com/en/pages) | Deployment workflow checked in under `.github/workflows/` |
| Mermaid | `.mmd` diagram source language and external rendering workflow | Not pinned or disclosed | 11.15.0 | [Mermaid releases](https://github.com/mermaid-js/mermaid/releases) | Tracked by the scheduled technology review workflow |
| PptxGenJS | Tool named by the slide documentation as the generator for the PPTX decks | Not pinned or disclosed; generator source is not present | 4.0.1 | [PptxGenJS releases](https://github.com/gitbrent/PptxGenJS/releases) | Tracked by the scheduled technology review workflow |
| JavaScript | Language used by PptxGenJS, according to its project documentation; no source is checked in here | Not pinned or disclosed | Not applicable to this archive | [PptxGenJS project](https://github.com/gitbrent/PptxGenJS) | Informational only |
| Node.js | Possible execution host for the historical PptxGenJS generation step; no runtime or version file is checked in here | Not pinned or disclosed | Not applicable to this archive | [Node.js releases](https://nodejs.org/en/about/previous-releases) | Informational only |
| Open XML / PPTX | Distribution format for the checked-in slide decks | Format version not declared | Not applicable | [PptxGenJS project](https://github.com/gitbrent/PptxGenJS) | Artifact format only |
| PDF | Distribution format for the checked-in slide decks | Format version not declared | Not applicable | N/A | Artifact format only |
| MP4 | Preserved video artifact generated with Sora, as documented by the folder README | Codec and container profile not declared | Not applicable | N/A | Historical artifact only |
| Markdown | Editable format for the article archive, prompts, evaluations, and guidance | No version pinned | Not applicable | N/A | Repository content format |
| CSV | Machine-readable diagram manifest | No dialect or version pinned | Not applicable | N/A | Repository content format |
| GitHub Actions | Monthly maintenance workflow that checks external authoring-tool releases | Workflow syntax version not pinned | Platform-managed | [GitHub Actions documentation](https://docs.github.com/en/actions) | Repository maintenance |
| `actions/checkout` | Checks out the repository for the maintenance workflow | `v6` major tag | 6.0.2 | [checkout releases](https://github.com/actions/checkout/releases) | Tracked weekly by Dependabot |
| Dependabot | Opens update pull requests for the workflow action | Configuration schema version 2 | Platform-managed | [GitHub Dependabot documentation](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/auto-update-actions) | Tracks GitHub Actions only |

Mermaid frontmatter is present in the Copilot V1 source. Mermaid documents
frontmatter configuration as available from Mermaid 10.5.0 onward, but that
does not establish which Mermaid release rendered the checked-in images or
hosted diagrams.

## Technologies intentionally not used by the checked-in application

The tutorial has no backend, database, authentication layer, API, or local
Mermaid renderer. The preserved archive continues to use Markdown, CSV,
Mermaid source, PNG, PPTX, PDF, and MP4 artifacts.

## Update policy

The tutorial dependencies are pinned and installed from `package-lock.json`.
The repository cannot automatically upgrade Mermaid or PptxGenJS because their
source project and dependency manifest are not present. Instead, the scheduled
workflow compares the latest stable registry release with the last reviewed
baseline and opens an issue when review is needed. A maintainer should then
decide whether to re-render diagrams or regenerate decks before changing the
baseline in this document and in the workflow's machine-readable inventory.

Dependabot monitors the GitHub Actions used by the review workflow. It does not
invent package dependencies for the archive.
