import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

const settings = [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "dist/index.ts",
        format: "cjs",
      },
      {
        file: "dist/index.es.ts",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      typescript(),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve(),
      terser(),
    ],
  },
];

export default settings;
