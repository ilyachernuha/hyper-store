import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";
import { rm } from "node:fs/promises";

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "components"),
    }),
    {
      name: "Cleaning assets folder",
      async buildStart() {
        await rm(resolve(__dirname, "build/www/assets"), {
          recursive: true,
          force: true,
        });
      },
    },
  ],
  build: {
    outDir: resolve(__dirname, "build/www"),
    emptyOutDir: false,
  },
});
