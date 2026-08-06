# Technology Inventory

Reviewed: 2026-07-20

## Scope

This repository is a public writing and methodology archive, not an application
with a checked-in runtime. The inventory covers technologies used to author,
render, or package the archive. The `.agents/skills/` directory is repository
metadata for agent workflows and is not part of the archive's production
toolchain.

## Technologies in the archive

| Technology | Role in this repository | In-place version | Latest stable checked on 2026-07-20 | Version source | Tracking status |
|---|---|---:|---:|---|---|
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

## Technologies explicitly not used by the checked-in solution

There is no evidence of TypeScript, Vite, Tailwind CSS, a JavaScript source
project, Python application code, a package manager, a package manifest, a
lockfile, a container definition, a local Mermaid renderer, or a build system.
The GitHub Actions workflow added for version review is repository maintenance,
not an application runtime.

## Update policy

The repository cannot automatically upgrade Mermaid or PptxGenJS because their
source project and dependency manifest are not present. Instead, the scheduled
workflow compares the latest stable registry release with the last reviewed
baseline and opens an issue when review is needed. A maintainer should then
decide whether to re-render diagrams or regenerate decks before changing the
baseline in this document and in the workflow's machine-readable inventory.

Dependabot monitors the GitHub Actions used by the review workflow. It does not
invent package dependencies for the archive.
