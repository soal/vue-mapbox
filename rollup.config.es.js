import css from "rollup-plugin-css-only";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/main.js",
  external: ["mapbox-gl", "vue", "map-promisified"],
  output: [
    {
      file: "dist/vue-mapbox.js",
      name: "vue-mapbox",
      format: "es"
    },
    {
      file: "dist/vue-mapbox.min.js",
      name: "vue-mapbox",
      format: "es",
      plugins: [terser()]
    }
  ],
  plugins: [css({ output: "dist/vue-mapbox.css" })]
};
