import css from "rollup-plugin-css-only";
import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "src/main.js",
  external: ["mapbox-gl", "vue"],
  output: [
    {
      file: "dist/vue-mapbox.umd.js",
      name: "vue-mapbox",
      format: "umd"
    },
    {
      file: "dist/vue-mapbox.umd.min.js",
      name: "vue-mapbox",
      format: "umd",
      plugins: [terser()]
    }
  ],
  plugins: [
    nodeResolve({ resolveOnly: ["map-promisified"] }),
    css({ output: "dist/vue-mapbox.css" }),
    babel({ babelHelpers: "runtime" })
  ]
};
