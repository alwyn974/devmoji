/* eslint-disable @typescript-eslint/ban-ts-comment */
import typescript from "@rollup/plugin-typescript"
import pkg from "./package.json"
import resolve from "@rollup/plugin-node-resolve"
import terser from "@rollup/plugin-terser"
import commonjs from "@rollup/plugin-commonjs"
// @ts-ignore
import progress from "rollup-plugin-progress"

// eslint-disable-next-line import/no-unresolved
import builtins from "builtin-modules"

export default {
  input: "src/cli.ts", // our source file
  output: [
    {
      freeze: false,
      dir: "lib",
      format: "cjs",
    },
  ],
  external: [...Object.keys(pkg.dependencies || {}), ...builtins],
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    progress(),
    resolve({
      preferBuiltins: true,
    }),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.build.json",
      // module: "esnext",
      // typescript: require("typescript"),
    }),
    terser(),
    // sizes(),
  ],
}
