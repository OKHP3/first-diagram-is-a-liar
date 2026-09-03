---
name: Pure TypeScript contracts
description: Runtime choice for framework-free tests of the application’s TypeScript modules.
---

Use Node’s native TypeScript type stripping for small pure-module contract runners, copying source modules to an isolated temporary ESM directory and adding explicit `.ts` import extensions there.

**Why:** The installed TypeScript 7 package does not expose the traditional compiler API through its main runtime export, and adding a test transpiler would be disproportionate for these browser-independent contracts.

**How to apply:** Keep the runner dependency-free, invoke it with `node --experimental-strip-types`, and remove the temporary module directory after imports have completed.