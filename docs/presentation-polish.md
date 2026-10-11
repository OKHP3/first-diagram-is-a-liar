# Presentation polish

Reviewed September 29, 2026. Scope: the First Diagram Pages application and its
generated reading edition. Source article and evidence archive remain intact.

## Reference comparison

| Surface | Observed reference | First Diagram implementation |
| --- | --- | --- |
| Header | [Skillz Forge](https://okhp3.github.io/skillz/) has a GitHub icon and Light / System / Dark controls | Accessible, labelled GitHub icon and three pressed-state buttons; preference stored separately from tutorial progress |
| Phone shortcut | [Chai Chasers](https://okhp3.github.io/glee-fully-chai-chasers/) supplies Apple name/capability metadata and a 180px touch icon | Short `First Diagram` name, Apple launch metadata and explicit icon dimensions |
| Android launcher | Chai has a dedicated maskable 512px image alongside regular icons | Separate full-bleed maskable image, with the essential loop safely inside the central 80%-diameter circle |
| Manifest | Both declare standalone display, scope, launch URL and theme colors | Preserved project scope and identity; current description, language, education/productivity categories, and workbench/reading shortcuts |
| Sharing | Both publish Open Graph and large Twitter/X cards with image dimensions and alternative text | Existing 1200 x 630 blueprint card preserved; metadata extended to the reading page with its own canonical URL, title and article type |
| Tab/pinning | Reference apps include raster favicons and Apple touch icons | Existing SVG, 16px/32px PNG, ICO, Safari mask and Windows tile assets retained; ICO fallback linked explicitly |

Reference manifests: [Skillz](https://okhp3.github.io/skillz/manifest.webmanifest)
and [Chai Chasers](https://okhp3.github.io/glee-fully-chai-chasers/manifest.webmanifest).

## Brand and implementation

Applied `okhp3-overkill-hill-brand` profile 1.1.0. The app's established ink,
teal, amber, orange, slab headings and blueprint motif remain the identity.
Light mode uses warm paper, dark ink and stronger orange/amber text for contrast.
Chai's game imagery and Skillz's mascot are not borrowed.

`public/appearance.js` runs before the app renders, resolves System through
`prefers-color-scheme`, tracks OS changes, updates browser theme color and syncs
the preference between tabs. Storage failure falls back to an in-page choice.
`src/index.css` uses shared color tokens for panels, text, diagrams and controls.
The existing reduced-motion rule remains active.

The maskable source is a new hand-authored SVG revision-loop mark, rasterized
to an opaque PNG. Its essential strokes occupy roughly x=131..365, y=161..348
within a 512px square. Existing regular/Apple icons and social artwork are retained.

## Asset contract

| Asset | Format and size | Use |
| --- | --- | --- |
| `favicon.svg`, `favicon.ico`, `favicon-16.png`, `favicon-32.png` | SVG, ICO, 16/32px PNG | Browser tabs |
| `apple-touch-icon.png` | Opaque PNG, 180 x 180 | iOS home screen |
| `icon-192.png`, `icon-512.png` | Opaque PNG, 192/512px | Regular app icons |
| `icon-maskable-512.png` | Opaque PNG, 512 x 512 | Android shape masks |
| `og-image.png` | Opaque PNG, 1200 x 630 | Website link previews |
| `github-social-preview.png` | Opaque PNG, 1280 x 640 | Available GitHub repository preview asset |

## Evidence boundaries

Local production build and typecheck passed. Local browser inspection confirmed
light/dark selection, reload persistence, workbench readability and mobile control
layout. PNG dimensions and opacity were inspected. No new test suite was added.
The normal GitHub workflow supplies its existing automated release checks.

Physical iPhone/Android installation and third-party social scraper caches are
separate from asset delivery. No service worker or offline promise is introduced.
The repository social-preview setting is not changed by adding website metadata.
Each deployment still needs a successful Pages run and live inspection.
