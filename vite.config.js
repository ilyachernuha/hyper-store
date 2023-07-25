import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "components"),
    }),
    {
      name: "lazysizes-data-src",
      transformIndexHtml(html) {
        const base = process.argv
          .find((arg) => arg.startsWith("--base="))
          ?.split("=")[1];
        if (!base) {
          return html;
        }
        let newHtml = html.replace(
          new RegExp(/(data-src=)['"](.*)['"]/, "g"),
          `$1"${base}$2"`
        );
        newHtml = newHtml.replace(
          new RegExp(/(data-srcset=)['"](.*)['"]/, "g"),
          (match, p1, p2) => {
            p2 = p2
              .split(", ")
              .map((src) => base + src)
              .join(", ");
            return `${p1}"${p2}"`;
          }
        );
        return newHtml;
      },
    },
  ],
  build: {
    outDir: resolve(__dirname, "build/www"),
  },
});
