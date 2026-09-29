# Mermaid styling expansion review

Date: September 29, 2026. Historical expansion snapshot; the later resource-link revision and current counts are in resource-link-review.md. Public article release remains pending.

## Requested change and result

The user requested roughly 30% more length, targeting 10,000-11,000 words, with stronger treatment of inconsistent Mermaid appearance and a practical pathway through personal Agent Skills or plugins. The article now has **10,798 visible words**, up from 8,239: **2,559 additional words, approximately 31.1%**. The LinkedIn plain-text fallback is **73,914 characters**; the revised feed announcement is **1,659 characters**.

Master SHA256: `41F9F747FFDE930A60E9EC3D036300123EC904DC413A9A9CCC7CEB27BDA4748F`.

The original short visual-consistency section became four connected sections:

1. Make visual consistency serve the work: separate model, Mermaid, host, and export responsibilities; connect the repeated styling burden to Theme Builder.
2. Package the preference so the next prompt can use it: entry instructions, JSON profile, color/font choices, semantic roles, precedence, examples, provenance and private-context separation.
3. Give each diagram family an example it can actually follow: flowcharts, architecture, fishbone/Ishikawa, Venn, and extensions; native syntax/version checks; CSS versus configuration; explicit fallbacks.
4. One prompt for the user, a repeatable workflow for the agent: invocation, optional Python helper, source preservation, execution limits, plugin packaging, first-result expectations and maintenance.

The measurement section now proposes comparing first-result style adherence, correction turns, total effort, rendering failures and semantic defects. The close ties reusable visual preferences back to the central argument. The historical V1/V2 artifacts and their caveats are unchanged.

## Evidence and editorial judgments

Primary Mermaid documentation was checked for theme configuration, flowchart class styling, the configuration schema, and architecture/Venn/Ishikawa syntax. The Agent Skills specification was checked for package structure and implementation-dependent script support. Theme Builder's public project description and local sibling README/exporter were inspected. Links and claim tiers are recorded in `source-ledger.md`.

Confirmed building blocks are distinguished from the proposed integrated workflow. The article does not claim that Theme Builder already installs a universal personal skill, that every major platform has identical support, or that a profile guarantees correctness or pixel-identical output. It does not reproduce unsupported quantitative marketing claims about average prompt savings. Example palette/font choices are explicitly illustrative.

The CSS distinction is concrete: Theme Builder's CSS export contains static design tokens. A skill/helper must map them to supported configuration or diagram statements. The article identifies family and destination checks rather than promising a universal stylesheet.

Voice pass retained short purposeful lines, the decisive close, practical examples and supplied article destinations. It added no em dashes, employer details, actual private workflow, invented user preference or measured outcome. Final public-context scrub applied after prose changes. The announcement retains one primary CTA and its after-publication gate.

## Checks

| Check | Status | Evidence and scope |
|---|---|---|
| Current 10,000-11,000-word target | PASS | Assembler counts 10,798 visible words |
| LinkedIn article/feed budgets | PASS | 73,914 and 1,659 characters respectively; prior article-limit source retained |
| HTML prose parity | PASS | Existing assembler parses both article bodies and compares normalized master text |
| Historical figures/caveats | PASS | Two original images, alt text, captions and original-source links preserved in both HTML candidates |
| Notion targeted update | PASS | Three exact replacements succeeded; unrelated sections preserved |
| Notion readback | PASS | Normalized prose matches supplied candidate; all 30 supplied link/image destinations retained; no truncation or unknown-block indicator |
| Notion automatic links | PASS with declared difference | Existing Mermaid.ai product-name autolink remains. An unintended SKILL.md link was corrected to inline-code filename formatting, which is also generated in the local Notion source |
| Prose/public boundary | PASS | No em dash, serial article labels, private Notion locator or unsupported universal capability claim in the master |
| File scope | PASS | Changes confined to `docs/final-publication/`; source diagrams and repository-local skills unchanged |
| Local diff formatting | PASS | `git diff --check`; line-ending advisories do not indicate content errors |
| Expanded visual/native-editor inspection | NOT RUN | No new LinkedIn editor or website render pass; previous local-file browser restriction remains respected |
| Real personal skill/plugin implementation | NOT RUN | This request expands the article; the described package and evaluation remain proposals |
| Fresh three-loop multi-agent review | NOT RUN | The earlier three-loop record is historical; this revision received focused source, editorial and conversion checks |

Raw Notion before/after receipts and replacement payloads remain in ignored `.local/publication-preparation/`. Public packet manifests exclude those private locators. `candidate-manifest.json` records current substantive files; `packet-sha256.json` covers the packet.

## Handoff limits

The same Notion candidate page now contains the expanded manuscript. Website and LinkedIn candidate files are regenerated, and the feed announcement reflects the new emphasis. These revisions are uncommitted; no public article replacement or deployment occurred. A release still requires owner acceptance, native platform formatting/image inspection, saved/live body comparison, and publication receipts. The prior historical archive and metadata issues retain their separate dispositions.
