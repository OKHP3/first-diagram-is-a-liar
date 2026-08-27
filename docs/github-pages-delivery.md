# GitHub Pages delivery evidence

**Result:** PASS  
**Verified:** 2026-08-27T11:49:56Z  
**Public route:** https://okhp3.github.io/first-diagram-is-a-liar/

## Release authority and approval

Future GitHub Pages publications from `main` require explicit approval from the
repository owner or from a maintainer the owner has explicitly delegated. A
code review or merge approval counts as the release approval only when that
owner or delegated maintainer clearly records that intent for the specific
release candidate.

This is a process gate, not a new GitHub Actions gate. The checked-in workflow
still deploys automatically on a push to `main`, and it still permits
`workflow_dispatch`; this task does not change either trigger or add required
environment reviewers. The approval must therefore be obtained before the
merge/push that will publish, or before a manual dispatch from `main`. A
successful Actions run or a healthy public route proves technical delivery,
not release authorization by itself.

## Hosted verification

| Check | Evidence |
| --- | --- |
| Public route | HTTP 200; effective URL remained `https://okhp3.github.io/first-diagram-is-a-liar/`; response size 737 bytes |
| Document | Browser-rendered title `The First Diagram Is Usually a Liar`; exactly one `h1`; React root rendered |
| CSS | `/first-diagram-is-a-liar/assets/index-EKJa3mPQ.css` returned HTTP 200 and loaded as `text/css` |
| JavaScript | `/first-diagram-is-a-liar/assets/index-Y2wfopiJ.js` returned HTTP 200 and loaded as JavaScript |
| Interaction | The hero `Start the field guide` control advanced the active rail step from 1 to 2; the next heading was `Measure what the picture bought.` |
| Browser errors | No app-blocking console errors, failed requests, or HTTP response failures during the hosted smoke test |

## Workflow and artifact evidence

The checked-in `Deploy tutorial to GitHub Pages` workflow was dispatched on remote
`main` and completed successfully:

- **Run:** [33068937691](https://github.com/OKHP3/first-diagram-is-a-liar/actions/runs/33068937691)
- **Run number:** 3
- **Event:** `workflow_dispatch`
- **Commit:** `422ac63d05beb085b545270378478a83a8fc294c`
- **Started:** 2026-08-27T11:47:33Z
- **Completed:** 2026-08-27T11:48:08Z
- **Conclusion:** `success`
- **Build job:** [98505922475](https://github.com/OKHP3/first-diagram-is-a-liar/actions/runs/33068937691/job/98505922475) — success
- **Deploy job:** [98506006145](https://github.com/OKHP3/first-diagram-is-a-liar/actions/runs/33068937691/job/98506006145) — success
- **Artifact:** `github-pages`, ID `9644914530`, 315,488 bytes, not expired

The build job completed all relevant steps successfully, including:

1. `npm ci`
2. `npm run check`
3. `npm run build`
4. `cp dist/index.html dist/404.html`
5. `actions/upload-pages-artifact`

The local production reproduction also confirmed:

- Vite emitted `/first-diagram-is-a-liar/` prefixes for the production assets.
- `dist/index.html` and the workflow-created `dist/404.html` were byte-identical.

## Contract and repository settings

- Remote `main` has `default_branch: main` and Pages enabled.
- The workflow uses the root app, production base path
  `/first-diagram-is-a-liar/`, the `dist` artifact, and the `404.html` fallback.
- Repository Actions were disabled when the verification began. They were enabled
  through the existing authorized GitHub connection before dispatching the
  workflow. The stale earlier Pages run had no jobs; run 3 is the successful
  replacement dispatched from the same checked-in workflow.
- No application, workflow, or deployment source files were changed for this
  verification. The local checkout contains separate unpushed work and was not
  force-synchronized over the newer remote `main`.

## Evidence procedure for future releases

For each future Pages publication, the release evidence record must identify:

1. the owner or explicitly delegated maintainer who approved the release;
2. the approval time and the durable GitHub record for the approval (for
   example, the release pull request or issue);
3. the exact `main` source commit and the Actions run URL, run number, event,
   conclusion, build job, deploy job, and artifact result; and
4. the public route, retrieval time, HTTP response, rendered title and
   five-step rail, loaded assets, and the first interactive transition.

The approval record is part of the release evidence, not an inference from the
deployment result. If approval is absent or does not identify the commit being
published, treat the run as technically observed but not authorized for
release. Retain the local validation matrix separately and name both local and
hosted commits whenever they differ.

## Evidence limitation

GitHub listed the uploaded artifact and its successful upload step, but the
artifact ZIP download returned HTTP 403 through the connector. The fallback is
therefore evidenced by the successful workflow step plus the local byte-identical
reproduction, rather than by independently listing the ZIP entries.