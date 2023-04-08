module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "prettier"],
  overrides: [],
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    quotes: ["error", "double"],
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "react/react-in-jsx-scope": "off",
    "react/no-unknown-property": "off",
    "no-console": "off",
    "no-unused-vars": "off",
    "no-param-reassign": 0,
    "no-shadow": "off",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "func-names": ["error", "never"],
    "default-param-last": "off",
    "react/forbid-prop-types": "off",
    "import/no-duplicates": "off",
    "react/prop-types": 0,
    "jsx-a11y/media-has-caption": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", "jsx"],
      },
    },
    react: {
      version: "detect",
    },
  },
};
