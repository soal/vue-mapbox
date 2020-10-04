import css from "rollup-plugin-css-only";
import { terser } from "rollup-plugin-terser";
// import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import babel from "@rollup/plugin-babel";

export default {
  input: "src/main.js",
  external: ["mapbox-gl", "vue", "map-promisified"],
  output: [
    {
      file: "dist/vue-mapbox.umd.js",
      name: "vue-mapbox",
      format: "umd",
      globals: {
        "map-promisified": "promisify"
      }
    },
    {
      file: "dist/vue-mapbox.umd.min.js",
      name: "vue-mapbox",
      format: "umd",
      plugins: [terser()],
      globals: {
        "map-promisified": "map-promisified"
      }
    }
  ],
  plugins: [
    css({ output: "dist/vue-mapbox.css" }),
    babel({ babelHelpers: "runtime" })
  ]
};
