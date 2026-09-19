# Technology version report

Retrieved: 2026-09-19T04:08:55.497Z (UTC).

Source HEAD: 79e4cd71d9476db0755231a4c90f5c46e7c5f16d. Working tree: modified.

In-place npm versions come from the lock contract, not this machine's node_modules.
Floating selectors do not prove which patch ran. Registry latest excludes prereleases.
Node.js comparisons use LTS; newest Current is recorded separately. Transitive updates need parent compatibility.

## direct

| Technology | In place / selector | Latest stable | Status | Evidence |
|---|---|---|---|---|
| @tailwindcss/vite | 4.3.3 | 4.3.3 | current | [publisher](https://registry.npmjs.org/%40tailwindcss%2Fvite/latest); package-lock.json:node_modules/@tailwindcss/vite |
| @types/node | 26.3.0 | 26.6.2 | update | [publisher](https://registry.npmjs.org/%40types%2Fnode/latest); package-lock.json:node_modules/@types/node |
| @types/react | 19.2.18 | 19.3.0 | update | [publisher](https://registry.npmjs.org/%40types%2Freact/latest); package-lock.json:node_modules/@types/react |
| @types/react-dom | 19.2.5 | 19.3.0 | update | [publisher](https://registry.npmjs.org/%40types%2Freact-dom/latest); package-lock.json:node_modules/@types/react-dom |
| @vitejs/plugin-react | 6.1.0 | 6.1.1 | update | [publisher](https://registry.npmjs.org/%40vitejs%2Fplugin-react/latest); package-lock.json:node_modules/@vitejs/plugin-react |
| react | 19.2.8 | 19.3.0 | update | [publisher](https://registry.npmjs.org/react/latest); package-lock.json:node_modules/react |
| react-dom | 19.2.8 | 19.3.0 | update | [publisher](https://registry.npmjs.org/react-dom/latest); package-lock.json:node_modules/react-dom |
| tailwindcss | 4.3.3 | 4.3.3 | current | [publisher](https://registry.npmjs.org/tailwindcss/latest); package-lock.json:node_modules/tailwindcss |
| typescript | 7.0.2 | 7.0.2 | current | [publisher](https://registry.npmjs.org/typescript/latest); package-lock.json:node_modules/typescript |
| vite | 8.2.2 | 8.3.0 | update | [publisher](https://registry.npmjs.org/vite/latest); package-lock.json:node_modules/vite |

## action

| Technology | In place / selector | Latest stable | Status | Evidence |
|---|---|---|---|---|
| actions/checkout | v7 | v7.0.1 | floating-current-line | [publisher](https://github.com/actions/checkout/releases/tag/v7.0.1); .github/workflows/deploy-pages.yml, .github/workflows/technology-version-review.yml |
| actions/setup-node | v7 | v7.0.0 | floating-current-line | [publisher](https://github.com/actions/setup-node/releases/tag/v7.0.0); .github/workflows/deploy-pages.yml, .github/workflows/technology-version-review.yml |
| actions/upload-pages-artifact | v5 | v5.0.0 | floating-current-line | [publisher](https://github.com/actions/upload-pages-artifact/releases/tag/v5.0.0); .github/workflows/deploy-pages.yml |
| actions/deploy-pages | v5 | v5.0.1 | floating-current-line | [publisher](https://github.com/actions/deploy-pages/releases/tag/v5.0.1); .github/workflows/deploy-pages.yml |
| actions/upload-artifact | v7 | v7.0.1 | floating-current-line | [publisher](https://github.com/actions/upload-artifact/releases/tag/v7.0.1); .github/workflows/technology-version-review.yml |

## external

| Technology | In place / selector | Latest stable | Status | Evidence |
|---|---|---|---|---|
| Mermaid benchmark | 11.12.0 | 12.0.0 | update | [publisher](https://registry.npmjs.org/mermaid/latest); scripts/benchmark-mermaid.mjs |
| Vite benchmark | 8.2.2 | 8.3.0 | update | [publisher](https://registry.npmjs.org/vite/latest); scripts/benchmark-mermaid.mjs |
| Mermaid editorial CDN | 10 | 12.0.0 | review-line | [publisher](https://registry.npmjs.org/mermaid/latest); archive/editorial-cut/mermaid-init.js |
| PptxGenJS historical authoring | Unknown | 4.0.1 | unknown-installed | [publisher](https://registry.npmjs.org/pptxgenjs/latest); archive/diagramming-shootout/slides/README.md |
| Node.js CI selector | 24 | v24.21.0 LTS; v26.9.0 Current | floating-current-line | [publisher](https://nodejs.org/dist/index.json); .nvmrc |
| Node.js Replit selector | 24 | v24.21.0 LTS; v26.9.0 Current | floating-current-line | [publisher](https://nodejs.org/dist/index.json); .replit |
| Python Replit selector | 3.13 | 3.14.7 | review-line | [publisher](https://www.python.org/api/v2/downloads/release/?is_published=true); .replit |

## environment

| Technology | In place / selector | Latest stable | Status | Evidence |
|---|---|---|---|---|
| Node.js audit host | v24.11.1 | v24.21.0 LTS; v26.9.0 Current | update | [publisher](https://nodejs.org/dist/index.json); process.version |
| npm audit host | 11.6.2 | 12.0.2 | update | [publisher](https://registry.npmjs.org/npm/latest); npm user agent; unknown when invoked directly with node |

## transitive

| Technology | In place / selector | Latest stable | Status | Evidence |
|---|---|---|---|---|
| @jridgewell/gen-mapping | 0.3.13 | 0.3.13 | current | [publisher](https://registry.npmjs.org/%40jridgewell%2Fgen-mapping/latest); package-lock.json:node_modules/@jridgewell/gen-mapping |
| @jridgewell/remapping | 2.3.5 | 2.3.5 | current | [publisher](https://registry.npmjs.org/%40jridgewell%2Fremapping/latest); package-lock.json:node_modules/@jridgewell/remapping |
| @jridgewell/resolve-uri | 3.1.2 | 3.1.2 | current | [publisher](https://registry.npmjs.org/%40jridgewell%2Fresolve-uri/latest); package-lock.json:node_modules/@jridgewell/resolve-uri |
| @jridgewell/sourcemap-codec | 1.5.5 | 1.6.0 | update | [publisher](https://registry.npmjs.org/%40jridgewell%2Fsourcemap-codec/latest); package-lock.json:node_modules/@jridgewell/sourcemap-codec |
| @jridgewell/trace-mapping | 0.3.31 | 0.3.31 | current | [publisher](https://registry.npmjs.org/%40jridgewell%2Ftrace-mapping/latest); package-lock.json:node_modules/@jridgewell/trace-mapping |
| @oxc-project/types | 0.146.0 | 0.150.0 | update | [publisher](https://registry.npmjs.org/%40oxc-project%2Ftypes/latest); package-lock.json:node_modules/@oxc-project/types |
| @rolldown/binding-android-arm-eabi | 1.2.5 | 1.2.9 | update | [publisher](https://registry.npmjs.org/%40rolldown%2Fbinding-android-arm-eabi/latest); package-lock.json:node_modules/@rolldown/binding-android-arm-eabi |
| @rolldown/binding-android-arm64 | 1.2.5 | 1.2.9 | update | [publisher](https://registry.npmjs.org/%40rolldown%2Fbinding-android-arm64/latest); package-lock.json:node_modules/@rolldown/binding-android-arm64 |
| @rolldown/binding-darwin-arm64 | 1.2.5 | 1.2.9 | update | [publisher](https://registry.npmjs.org/%40rolldown%2Fbinding-darwin-arm64/latest); package-lock.json:node_modules/@rolldown/binding-darwin-arm64 |
| @rolldown/binding-darwin-x64 | 1.2.5 | 1.2.9 | update | [publisher](https://registry.npmjs.org/%40rolldown%2Fbinding-darwin-x64/latest); package-lock.json:node_modules/@rolldown/binding-darwin-x64 |
| @rolldown/binding-freebsd-x64 | 1.2.5 | 1.2.9 | update | [publisher](https://registry.npmjs.org/%40rolldown%2Fbinding-freebsd-x64/latest); package-lock.json:node_modules/@rolldown/binding-freebsd-x64 |
| @rolldown/binding-linux-arm-gnueabihf | 1.2.5 | 1.2.9 | update | [publisher](https://registry.npmjs.org/%40rolldown%2Fbinding-linux-arm-gnueabihf/latest); package-lock.json:node_modules/@rolldown/binding-linux-arm-gnueabihf |
| @rolldown/binding-linux-arm64-gnu | 1.2.5 | 1.2.9 | update | [publisher](https://registry.npmjs.org/%40rolldown%2Fbinding-linux-arm64-gnu/latest); package-lock.json:node_modules/@rolldown/binding-linux-arm64-gnu |
| @rolldown/binding-linux-arm64-musl | 1.2.5 | 1.2.9 | update | [publisher](https://registry.npmjs.org/%40rolldown%2Fbinding-linux-arm64-musl/latest); package-lock.json:node_modules/@rolldown/binding-linux-arm64-musl |
| @rolldown/binding-linux-ppc64-gnu | 1.2.5 | 1.2.9 | update | [publisher](https://registry.npmjs.org/%40rolldown%2Fbinding-linux-ppc64-gnu/latest); package-lock.json:node_modules/@rolldown/binding-linux-ppc64-gnu |
| @rolldown/binding-linux-s390x-gnu | 1.2.5 | 1.2.9 | update | [publisher](https://registry.npmjs.org/%40rolldown%2Fbinding-linux-s390x-gnu/latest); package-lock.json:node_modules/@rolldown/binding-linux-s390x-gnu |
| @rolldown/binding-linux-x64-gnu | 1.2.5 | 1.2.9 | update | [publisher](https://registry.npmjs.org/%40rolldown%2Fbinding-linux-x64-gnu/latest); package-lock.json:node_modules/@rolldown/binding-linux-x64-gnu |
| @rolldown/binding-linux-x64-musl | 1.2.5 | 1.2.9 | update | [publisher](https://registry.npmjs.org/%40rolldown%2Fbinding-linux-x64-musl/latest); package-lock.json:node_modules/@rolldown/binding-linux-x64-musl |
| @rolldown/binding-openharmony-arm64 | 1.2.5 | 1.2.9 | update | [publisher](https://registry.npmjs.org/%40rolldown%2Fbinding-openharmony-arm64/latest); package-lock.json:node_modules/@rolldown/binding-openharmony-arm64 |
| @rolldown/binding-win32-arm64-msvc | 1.2.5 | 1.2.9 | update | [publisher](https://registry.npmjs.org/%40rolldown%2Fbinding-win32-arm64-msvc/latest); package-lock.json:node_modules/@rolldown/binding-win32-arm64-msvc |
| @rolldown/binding-win32-x64-msvc | 1.2.5 | 1.2.9 | update | [publisher](https://registry.npmjs.org/%40rolldown%2Fbinding-win32-x64-msvc/latest); package-lock.json:node_modules/@rolldown/binding-win32-x64-msvc |
| @rolldown/pluginutils | 1.0.1 | 1.0.1 | current | [publisher](https://registry.npmjs.org/%40rolldown%2Fpluginutils/latest); package-lock.json:node_modules/@rolldown/pluginutils |
| @tailwindcss/node | 4.3.3 | 4.3.3 | current | [publisher](https://registry.npmjs.org/%40tailwindcss%2Fnode/latest); package-lock.json:node_modules/@tailwindcss/node |
| @tailwindcss/oxide | 4.3.3 | 4.3.3 | current | [publisher](https://registry.npmjs.org/%40tailwindcss%2Foxide/latest); package-lock.json:node_modules/@tailwindcss/oxide |
| @tailwindcss/oxide-android-arm64 | 4.3.3 | 4.3.3 | current | [publisher](https://registry.npmjs.org/%40tailwindcss%2Foxide-android-arm64/latest); package-lock.json:node_modules/@tailwindcss/oxide-android-arm64 |
| @tailwindcss/oxide-darwin-arm64 | 4.3.3 | 4.3.3 | current | [publisher](https://registry.npmjs.org/%40tailwindcss%2Foxide-darwin-arm64/latest); package-lock.json:node_modules/@tailwindcss/oxide-darwin-arm64 |
| @tailwindcss/oxide-darwin-x64 | 4.3.3 | 4.3.3 | current | [publisher](https://registry.npmjs.org/%40tailwindcss%2Foxide-darwin-x64/latest); package-lock.json:node_modules/@tailwindcss/oxide-darwin-x64 |
| @tailwindcss/oxide-freebsd-x64 | 4.3.3 | 4.3.3 | current | [publisher](https://registry.npmjs.org/%40tailwindcss%2Foxide-freebsd-x64/latest); package-lock.json:node_modules/@tailwindcss/oxide-freebsd-x64 |
| @tailwindcss/oxide-linux-arm-gnueabihf | 4.3.3 | 4.3.3 | current | [publisher](https://registry.npmjs.org/%40tailwindcss%2Foxide-linux-arm-gnueabihf/latest); package-lock.json:node_modules/@tailwindcss/oxide-linux-arm-gnueabihf |
| @tailwindcss/oxide-linux-arm64-gnu | 4.3.3 | 4.3.3 | current | [publisher](https://registry.npmjs.org/%40tailwindcss%2Foxide-linux-arm64-gnu/latest); package-lock.json:node_modules/@tailwindcss/oxide-linux-arm64-gnu |
| @tailwindcss/oxide-linux-arm64-musl | 4.3.3 | 4.3.3 | current | [publisher](https://registry.npmjs.org/%40tailwindcss%2Foxide-linux-arm64-musl/latest); package-lock.json:node_modules/@tailwindcss/oxide-linux-arm64-musl |
| @tailwindcss/oxide-linux-x64-gnu | 4.3.3 | 4.3.3 | current | [publisher](https://registry.npmjs.org/%40tailwindcss%2Foxide-linux-x64-gnu/latest); package-lock.json:node_modules/@tailwindcss/oxide-linux-x64-gnu |
| @tailwindcss/oxide-linux-x64-musl | 4.3.3 | 4.3.3 | current | [publisher](https://registry.npmjs.org/%40tailwindcss%2Foxide-linux-x64-musl/latest); package-lock.json:node_modules/@tailwindcss/oxide-linux-x64-musl |
| @tailwindcss/oxide-wasm32-wasi | 4.3.3 | 4.3.3 | current | [publisher](https://registry.npmjs.org/%40tailwindcss%2Foxide-wasm32-wasi/latest); package-lock.json:node_modules/@tailwindcss/oxide-wasm32-wasi |
| @tailwindcss/oxide-win32-arm64-msvc | 4.3.3 | 4.3.3 | current | [publisher](https://registry.npmjs.org/%40tailwindcss%2Foxide-win32-arm64-msvc/latest); package-lock.json:node_modules/@tailwindcss/oxide-win32-arm64-msvc |
| @tailwindcss/oxide-win32-x64-msvc | 4.3.3 | 4.3.3 | current | [publisher](https://registry.npmjs.org/%40tailwindcss%2Foxide-win32-x64-msvc/latest); package-lock.json:node_modules/@tailwindcss/oxide-win32-x64-msvc |
| @typescript/typescript-aix-ppc64 | 7.0.2 | 7.0.2 | current | [publisher](https://registry.npmjs.org/%40typescript%2Ftypescript-aix-ppc64/latest); package-lock.json:node_modules/@typescript/typescript-aix-ppc64 |
| @typescript/typescript-darwin-arm64 | 7.0.2 | 7.0.2 | current | [publisher](https://registry.npmjs.org/%40typescript%2Ftypescript-darwin-arm64/latest); package-lock.json:node_modules/@typescript/typescript-darwin-arm64 |
| @typescript/typescript-darwin-x64 | 7.0.2 | 7.0.2 | current | [publisher](https://registry.npmjs.org/%40typescript%2Ftypescript-darwin-x64/latest); package-lock.json:node_modules/@typescript/typescript-darwin-x64 |
| @typescript/typescript-freebsd-arm64 | 7.0.2 | 7.0.2 | current | [publisher](https://registry.npmjs.org/%40typescript%2Ftypescript-freebsd-arm64/latest); package-lock.json:node_modules/@typescript/typescript-freebsd-arm64 |
| @typescript/typescript-freebsd-x64 | 7.0.2 | 7.0.2 | current | [publisher](https://registry.npmjs.org/%40typescript%2Ftypescript-freebsd-x64/latest); package-lock.json:node_modules/@typescript/typescript-freebsd-x64 |
| @typescript/typescript-linux-arm | 7.0.2 | 7.0.2 | current | [publisher](https://registry.npmjs.org/%40typescript%2Ftypescript-linux-arm/latest); package-lock.json:node_modules/@typescript/typescript-linux-arm |
| @typescript/typescript-linux-arm64 | 7.0.2 | 7.0.2 | current | [publisher](https://registry.npmjs.org/%40typescript%2Ftypescript-linux-arm64/latest); package-lock.json:node_modules/@typescript/typescript-linux-arm64 |
| @typescript/typescript-linux-loong64 | 7.0.2 | 7.0.2 | current | [publisher](https://registry.npmjs.org/%40typescript%2Ftypescript-linux-loong64/latest); package-lock.json:node_modules/@typescript/typescript-linux-loong64 |
| @typescript/typescript-linux-mips64el | 7.0.2 | 7.0.2 | current | [publisher](https://registry.npmjs.org/%40typescript%2Ftypescript-linux-mips64el/latest); package-lock.json:node_modules/@typescript/typescript-linux-mips64el |
| @typescript/typescript-linux-ppc64 | 7.0.2 | 7.0.2 | current | [publisher](https://registry.npmjs.org/%40typescript%2Ftypescript-linux-ppc64/latest); package-lock.json:node_modules/@typescript/typescript-linux-ppc64 |
| @typescript/typescript-linux-riscv64 | 7.0.2 | 7.0.2 | current | [publisher](https://registry.npmjs.org/%40typescript%2Ftypescript-linux-riscv64/latest); package-lock.json:node_modules/@typescript/typescript-linux-riscv64 |
| @typescript/typescript-linux-s390x | 7.0.2 | 7.0.2 | current | [publisher](https://registry.npmjs.org/%40typescript%2Ftypescript-linux-s390x/latest); package-lock.json:node_modules/@typescript/typescript-linux-s390x |
| @typescript/typescript-linux-x64 | 7.0.2 | 7.0.2 | current | [publisher](https://registry.npmjs.org/%40typescript%2Ftypescript-linux-x64/latest); package-lock.json:node_modules/@typescript/typescript-linux-x64 |
| @typescript/typescript-netbsd-arm64 | 7.0.2 | 7.0.2 | current | [publisher](https://registry.npmjs.org/%40typescript%2Ftypescript-netbsd-arm64/latest); package-lock.json:node_modules/@typescript/typescript-netbsd-arm64 |
| @typescript/typescript-netbsd-x64 | 7.0.2 | 7.0.2 | current | [publisher](https://registry.npmjs.org/%40typescript%2Ftypescript-netbsd-x64/latest); package-lock.json:node_modules/@typescript/typescript-netbsd-x64 |
| @typescript/typescript-openbsd-arm64 | 7.0.2 | 7.0.2 | current | [publisher](https://registry.npmjs.org/%40typescript%2Ftypescript-openbsd-arm64/latest); package-lock.json:node_modules/@typescript/typescript-openbsd-arm64 |
| @typescript/typescript-openbsd-x64 | 7.0.2 | 7.0.2 | current | [publisher](https://registry.npmjs.org/%40typescript%2Ftypescript-openbsd-x64/latest); package-lock.json:node_modules/@typescript/typescript-openbsd-x64 |
| @typescript/typescript-sunos-x64 | 7.0.2 | 7.0.2 | current | [publisher](https://registry.npmjs.org/%40typescript%2Ftypescript-sunos-x64/latest); package-lock.json:node_modules/@typescript/typescript-sunos-x64 |
| @typescript/typescript-win32-arm64 | 7.0.2 | 7.0.2 | current | [publisher](https://registry.npmjs.org/%40typescript%2Ftypescript-win32-arm64/latest); package-lock.json:node_modules/@typescript/typescript-win32-arm64 |
| @typescript/typescript-win32-x64 | 7.0.2 | 7.0.2 | current | [publisher](https://registry.npmjs.org/%40typescript%2Ftypescript-win32-x64/latest); package-lock.json:node_modules/@typescript/typescript-win32-x64 |
| csstype | 3.2.3 | 3.2.3 | current | [publisher](https://registry.npmjs.org/csstype/latest); package-lock.json:node_modules/csstype |
| detect-libc | 2.1.2 | 2.1.2 | current | [publisher](https://registry.npmjs.org/detect-libc/latest); package-lock.json:node_modules/detect-libc |
| enhanced-resolve | 5.24.5 | 5.25.1 | update | [publisher](https://registry.npmjs.org/enhanced-resolve/latest); package-lock.json:node_modules/enhanced-resolve |
| fdir | 6.5.0 | 6.5.0 | current | [publisher](https://registry.npmjs.org/fdir/latest); package-lock.json:node_modules/fdir |
| fsevents | 2.3.3 | 2.3.3 | current | [publisher](https://registry.npmjs.org/fsevents/latest); package-lock.json:node_modules/fsevents |
| graceful-fs | 4.2.11 | 4.2.11 | current | [publisher](https://registry.npmjs.org/graceful-fs/latest); package-lock.json:node_modules/graceful-fs |
| jiti | 2.7.0 | 2.7.0 | current | [publisher](https://registry.npmjs.org/jiti/latest); package-lock.json:node_modules/jiti |
| lightningcss | 1.32.0 | 1.33.0 | update | [publisher](https://registry.npmjs.org/lightningcss/latest); package-lock.json:node_modules/lightningcss |
| lightningcss-android-arm64 | 1.32.0 | 1.33.0 | update | [publisher](https://registry.npmjs.org/lightningcss-android-arm64/latest); package-lock.json:node_modules/lightningcss-android-arm64 |
| lightningcss-darwin-arm64 | 1.32.0 | 1.33.0 | update | [publisher](https://registry.npmjs.org/lightningcss-darwin-arm64/latest); package-lock.json:node_modules/lightningcss-darwin-arm64 |
| lightningcss-darwin-x64 | 1.32.0 | 1.33.0 | update | [publisher](https://registry.npmjs.org/lightningcss-darwin-x64/latest); package-lock.json:node_modules/lightningcss-darwin-x64 |
| lightningcss-freebsd-x64 | 1.32.0 | 1.33.0 | update | [publisher](https://registry.npmjs.org/lightningcss-freebsd-x64/latest); package-lock.json:node_modules/lightningcss-freebsd-x64 |
| lightningcss-linux-arm-gnueabihf | 1.32.0 | 1.33.0 | update | [publisher](https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/latest); package-lock.json:node_modules/lightningcss-linux-arm-gnueabihf |
| lightningcss-linux-arm64-gnu | 1.32.0 | 1.33.0 | update | [publisher](https://registry.npmjs.org/lightningcss-linux-arm64-gnu/latest); package-lock.json:node_modules/lightningcss-linux-arm64-gnu |
| lightningcss-linux-arm64-musl | 1.32.0 | 1.33.0 | update | [publisher](https://registry.npmjs.org/lightningcss-linux-arm64-musl/latest); package-lock.json:node_modules/lightningcss-linux-arm64-musl |
| lightningcss-linux-x64-gnu | 1.32.0 | 1.33.0 | update | [publisher](https://registry.npmjs.org/lightningcss-linux-x64-gnu/latest); package-lock.json:node_modules/lightningcss-linux-x64-gnu |
| lightningcss-linux-x64-musl | 1.32.0 | 1.33.0 | update | [publisher](https://registry.npmjs.org/lightningcss-linux-x64-musl/latest); package-lock.json:node_modules/lightningcss-linux-x64-musl |
| lightningcss-win32-arm64-msvc | 1.32.0 | 1.33.0 | update | [publisher](https://registry.npmjs.org/lightningcss-win32-arm64-msvc/latest); package-lock.json:node_modules/lightningcss-win32-arm64-msvc |
| lightningcss-win32-x64-msvc | 1.32.0 | 1.33.0 | update | [publisher](https://registry.npmjs.org/lightningcss-win32-x64-msvc/latest); package-lock.json:node_modules/lightningcss-win32-x64-msvc |
| magic-string | 0.30.21 | 1.4.1 | update | [publisher](https://registry.npmjs.org/magic-string/latest); package-lock.json:node_modules/magic-string |
| nanoid | 3.3.18 | 6.0.1 | update | [publisher](https://registry.npmjs.org/nanoid/latest); package-lock.json:node_modules/nanoid |
| picocolors | 1.1.1 | 1.1.1 | current | [publisher](https://registry.npmjs.org/picocolors/latest); package-lock.json:node_modules/picocolors |
| picomatch | 4.0.7 | 4.0.7 | current | [publisher](https://registry.npmjs.org/picomatch/latest); package-lock.json:node_modules/picomatch |
| postcss | 8.5.26 | 8.5.28 | update | [publisher](https://registry.npmjs.org/postcss/latest); package-lock.json:node_modules/postcss |
| rolldown | 1.2.5 | 1.2.9 | update | [publisher](https://registry.npmjs.org/rolldown/latest); package-lock.json:node_modules/rolldown |
| scheduler | 0.27.0 | 0.28.0 | update | [publisher](https://registry.npmjs.org/scheduler/latest); package-lock.json:node_modules/scheduler |
| source-map-js | 1.2.1 | 1.2.1 | current | [publisher](https://registry.npmjs.org/source-map-js/latest); package-lock.json:node_modules/source-map-js |
| tapable | 2.3.3 | 2.3.3 | current | [publisher](https://registry.npmjs.org/tapable/latest); package-lock.json:node_modules/tapable |
| tinyglobby | 0.2.17 | 0.2.17 | current | [publisher](https://registry.npmjs.org/tinyglobby/latest); package-lock.json:node_modules/tinyglobby |
| undici-types | 8.3.0 | 8.10.2 | update | [publisher](https://registry.npmjs.org/undici-types/latest); package-lock.json:node_modules/undici-types |
| lightningcss | 1.33.0 | 1.33.0 | current | [publisher](https://registry.npmjs.org/lightningcss/latest); package-lock.json:node_modules/vite/node_modules/lightningcss |
| lightningcss-android-arm64 | 1.33.0 | 1.33.0 | current | [publisher](https://registry.npmjs.org/lightningcss-android-arm64/latest); package-lock.json:node_modules/vite/node_modules/lightningcss-android-arm64 |
| lightningcss-darwin-arm64 | 1.33.0 | 1.33.0 | current | [publisher](https://registry.npmjs.org/lightningcss-darwin-arm64/latest); package-lock.json:node_modules/vite/node_modules/lightningcss-darwin-arm64 |
| lightningcss-darwin-x64 | 1.33.0 | 1.33.0 | current | [publisher](https://registry.npmjs.org/lightningcss-darwin-x64/latest); package-lock.json:node_modules/vite/node_modules/lightningcss-darwin-x64 |
| lightningcss-freebsd-x64 | 1.33.0 | 1.33.0 | current | [publisher](https://registry.npmjs.org/lightningcss-freebsd-x64/latest); package-lock.json:node_modules/vite/node_modules/lightningcss-freebsd-x64 |
| lightningcss-linux-arm-gnueabihf | 1.33.0 | 1.33.0 | current | [publisher](https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/latest); package-lock.json:node_modules/vite/node_modules/lightningcss-linux-arm-gnueabihf |
| lightningcss-linux-arm64-gnu | 1.33.0 | 1.33.0 | current | [publisher](https://registry.npmjs.org/lightningcss-linux-arm64-gnu/latest); package-lock.json:node_modules/vite/node_modules/lightningcss-linux-arm64-gnu |
| lightningcss-linux-arm64-musl | 1.33.0 | 1.33.0 | current | [publisher](https://registry.npmjs.org/lightningcss-linux-arm64-musl/latest); package-lock.json:node_modules/vite/node_modules/lightningcss-linux-arm64-musl |
| lightningcss-linux-x64-gnu | 1.33.0 | 1.33.0 | current | [publisher](https://registry.npmjs.org/lightningcss-linux-x64-gnu/latest); package-lock.json:node_modules/vite/node_modules/lightningcss-linux-x64-gnu |
| lightningcss-linux-x64-musl | 1.33.0 | 1.33.0 | current | [publisher](https://registry.npmjs.org/lightningcss-linux-x64-musl/latest); package-lock.json:node_modules/vite/node_modules/lightningcss-linux-x64-musl |
| lightningcss-win32-arm64-msvc | 1.33.0 | 1.33.0 | current | [publisher](https://registry.npmjs.org/lightningcss-win32-arm64-msvc/latest); package-lock.json:node_modules/vite/node_modules/lightningcss-win32-arm64-msvc |
| lightningcss-win32-x64-msvc | 1.33.0 | 1.33.0 | current | [publisher](https://registry.npmjs.org/lightningcss-win32-x64-msvc/latest); package-lock.json:node_modules/vite/node_modules/lightningcss-win32-x64-msvc |

Rows: 122; review/update signals: 49; lookup failures: 0.

See docs/technology-inventory.md for scope, managed services, formats, workstation observations, and the update plan.
