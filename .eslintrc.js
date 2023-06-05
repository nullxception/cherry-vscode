module.exports = {
  extends: ["semistandard", "prettier"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      plugins: ["@babel/plugin-syntax-import-assertions"],
    },
  },
};
