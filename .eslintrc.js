module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
  ],
  reportUnusedDisableDirectives: true,
  env: {
    node: true,
    browser: false,
    jest: true,
  },
  plugins: ["@typescript-eslint", "prettier", "jest", "import"],
  parserOptions: {
    ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    project: "./tsconfig.json",
    impliedStrict: true,
    createDefaultProgram: true,
  },
  rules: {
    "prettier/prettier": "warn",
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "jest/expect-expect": [
      "error",
      {
        assertFunctionNames: ["expect", "request.get.expect"],
      },
    ],
    "@typescript-eslint/no-unsafe-argument": "off",
  },
}
