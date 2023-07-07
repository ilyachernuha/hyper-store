import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default {
  base: "/hyper-store/",
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "components"),
    }),
  ],
};
