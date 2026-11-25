import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [solid()],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index"
    },
    rollupOptions: {
      external: ["solid-js", "solid-js/web", "@use-nyte/ui-core"]
    }
  }
});
