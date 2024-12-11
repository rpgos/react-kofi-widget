import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript(),
      terser(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "./dist/index.d.ts",
    output: [{ file: "dist/kofi-react-widget.d.ts", format: "es" }],
    plugins: [dts(),
      {
        name: "fix-dts-paths",
        resolveId(source) {
          if (source.includes("../")) {
            return source.replace("../", "./");
          }
          return null;
        },
      },
    ],
  },
];
