import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "components"),
    }),
  ],
  build: {
    outDir: resolve(__dirname, "build/www"),
  },
});
