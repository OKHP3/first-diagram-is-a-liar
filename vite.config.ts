import { defineConfig } from "vite";
import { readFileSync } from "node:fs";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/first-diagram-is-a-liar/" : "/",
  plugins: [react(), tailwindcss(), {
    name: "final-cut-reading-edition",
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        if (request.url?.split("?")[0] !== "/final-cut.html") return next();
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        response.end(finalCutReadingEdition());
      });
    },
    generateBundle() {
      this.emitFile({ type: "asset", fileName: "final-cut.html", source: finalCutReadingEdition() });
    },
  }],
  server: {
    host: "0.0.0.0",
    port: 5000,
    strictPort: true,
    allowedHosts: true,
  },
  build: { outDir: "dist", emptyOutDir: true },
});

// The committed publication candidate supplies the body and figure captions.
// Only the delivery wrapper changes; external publication states stay separate.
function finalCutReadingEdition() {
  return readFileSync(new URL("./docs/final-publication/website-candidate.html", import.meta.url), "utf8")
    .replace('<meta name="robots" content="noindex,nofollow">', '<link rel="canonical" href="https://okhp3.github.io/first-diagram-is-a-liar/final-cut.html">')
    .replace("The First Diagram Is Usually a Liar | Candidate", "The First Diagram Is Usually a Liar | Final Cut")
    .replace(/<aside>.*?<\/aside>/s, '<aside><a href="./">← Return to the interactive field guide</a><br><strong>The Final Cut · September 29, 2026.</strong> Reading edition of the unified thesis. The <a href="https://github.com/OKHP3/first-diagram-is-a-liar/tree/main/docs/final-publication">source and review records</a> remain inspectable. Website and LinkedIn editions have separate publication records.</aside>');
}
