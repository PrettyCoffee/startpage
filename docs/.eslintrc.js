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

module.exports = {
  extends: ["../.eslintrc.js", "plugin:mdx/recommended"],
  ignorePatterns: ["**/*.html"],
  settings: {
    "mdx/code-blocks": true,
  },
  overrides: [
    {
      files: ["*.mdx"],
      extends: ["plugin:mdx/overrides"],
      rules: {
        "unused-imports/no-unused-imports": "off",
        "no-unused-vars": "off",
        "prettier/prettier": ["error", prettierRules],
      },
    },
  ],
}
