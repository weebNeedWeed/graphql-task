const config = {
  plugins: ["prettier"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "no-console": "off",
    "no-empty": ["warn", { allowEmptyCatch: true }],
    "prettier/prettier": "warn",
    eqeqeq: "error",
    "no-unused-vars": "warn",
    "global-require": "warn",
    "no-mixed-operators": "error",
    "no-tabs": ["error", { allowIndentationTabs: true }],
    "no-var": "error",
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "prettier/standard",
    "prettier/babel",
    "prettier",
  ],
};

module.exports = config;
