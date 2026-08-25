export type GuideSection = {
  id: string;
  number: string;
  label: string;
};

export const sections: GuideSection[] = [
  { id: 'orientation', number: '00', label: 'Orientation' },
  { id: 'contract', number: '01', label: 'The contract' },
  { id: 'preflight', number: '02', label: 'Preflight' },
  { id: 'implementation', number: '03', label: 'Implementation' },
  { id: 'validation', number: '04', label: 'Validation' },
  { id: 'troubleshooting', number: '05', label: 'Troubleshooting' },
  { id: 'boundaries', number: '06', label: 'Live boundaries' },
  { id: 'checklist', number: '07', label: 'Final checklist' },
];

export const checklistItems = [
  { id: 'base', label: 'Production base is /kierans-lifetrkr/ and dev base is /.' },
  { id: 'router', label: 'The app uses HashRouter for client-side routes.' },
  { id: 'scripts', label: 'package.json exposes build: vite build.' },
  { id: 'ci', label: 'The Pages workflow runs npm ci, then npm run build.' },
  { id: 'artifact', label: 'dist/404.html exists after the production build.' },
  { id: 'pages', label: 'GitHub Pages is configured to deploy from GitHub Actions.' },
  { id: 'proof', label: 'The deployed URL was checked in a fresh, signed-out browser.' },
  { id: 'no-gh-pages', label: 'No gh-pages package or branch-push workaround is involved.' },
];

export const contractRows = [
  ['Production base', '/kierans-lifetrkr/', 'The repository name is part of the URL.'],
  ['Development base', '/', 'Vite dev server still serves from the root.'],
  ['Router', 'HashRouter', 'Routes survive Pages without server rewrites.'],
  ['Deployment', 'GitHub Actions → Pages', 'The workflow uploads dist as the artifact.'],
  ['Fallback', 'dist/404.html', 'A static fallback preserves the shell on misses.'],
  ['Not in this guide', 'gh-pages workaround', 'Do not push a generated branch to paper over the pipeline.'],
] as const;

export const orientationFacts = [
  ['01', 'One repository', 'Source, workflow, and artifact stay legible.'],
  ['02', 'One base rule', 'Production lives under /kierans-lifetrkr/.'],
  ['03', 'One honest proof', 'Test the deployed shell, not just dist/.'],
] as const;

export const preflightSteps = [
  ['A', 'The lockfile is real', 'npm ci must be able to reproduce the dependency tree. If it cannot, fix the lockfile or the workflow before thinking about Pages.'],
  ['B', 'The build has a target', 'vite build should create dist. No “works in dev” interpretation belongs in this step.'],
  ['C', 'The fallback is visible', '404.html must be in the artifact that Actions uploads, not merely somewhere in the source tree.'],
] as const;

export const validationSteps = [
  ['01', 'Source', 'The config and router express the contract.', 'Static review'],
  ['02', 'Artifact', 'npm run build emits the expected files.', 'Local shell'],
  ['03', 'Workflow', 'Actions installs, builds, and uploads dist.', 'GitHub run'],
  ['04', 'Live site', 'A fresh browser can load the published shell and route.', 'Pages URL'],
] as const;

export const troubleshootingSteps = [
  ['The page is blank on Pages', 'Deployment / base', 'Open DevTools and inspect asset requests. If they point at /assets instead of /kierans-lifetrkr/assets, the production base is wrong.'],
  ['A deep link is a 404', 'Router / fallback', 'Confirm the app uses HashRouter and that dist/404.html was uploaded with the artifact. A server-side rewrite is not implied.'],
  ['Actions is green, site is old', 'Pages settings / cache', 'Confirm the Pages source is GitHub Actions, inspect the workflow run SHA, then test in a fresh browser before changing application code.'],
  ['npm ci fails in Actions', 'Reproducibility', 'Run npm ci from the same commit locally. The lockfile, Node version, or package registry assumptions must agree.'],
  ['A gh-pages branch appeared', 'Deployment strategy', 'Stop and remove the workaround from the plan. This guide uses the official Pages artifact flow; branch pushes obscure the actual output.'],
] as const;