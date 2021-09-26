const baseConfigs = [
  "eslint:recommended",
  "standard-react",
  "plugin:@typescript-eslint/eslint-recommended",
  "plugin:import/recommended",
  "plugin:import/typescript",
  "plugin:jest/recommended",
  "plugin:react-hooks/recommended",
  "plugin:prettier/recommended",
]

const plugins = [
  "@emotion",
  "@typescript-eslint",
  "import",
  "jest",
  "testing-library",
  "unused-imports",
]

const prettierRules = {
  tabWidth: 2,
  singleQuote: false,
  trailingComma: "es5",
  semi: false,
  bracketSpacing: true,
  arrowParens: "avoid",
  endOfLine: "auto",
  jsxSingleQuote: false,
}

const importOrderRules = {
  groups: ["builtin", "external", "internal"],
  pathGroups: [
    {
      pattern: "react",
      group: "external",
      position: "before",
    },
  ],
  pathGroupsExcludedImportTypes: ["react"],
  "newlines-between": "always",
  alphabetize: {
    order: "asc",
    caseInsensitive: true,
  },
}

module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true,
    },
  },
  extends: baseConfigs,
  plugins: plugins,
  rules: {
    "@emotion/syntax-preference": [2, "string"],
    "unused-imports/no-unused-imports": "error",
    "@typescript-eslint/no-use-before-define": ["error"],

    "import/order": ["error", importOrderRules],
    "prettier/prettier": ["error", prettierRules],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
  overrides: [
    {
      files: ["src/**/*.test.ts?(x)"],
      extends: ["plugin:testing-library/react"],
    },
  ],
}
