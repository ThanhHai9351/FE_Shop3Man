export default [
  {
    files: ["**/*.ts", "**/*.tsx"], // Target TypeScript files
    languageOptions: {
      parser: "@typescript-eslint/parser", // Specify the TypeScript parser
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
    },
    rules: {
      // Customize rules
      "no-unused-expressions": "off",
      "@typescript-eslint/no-unused-expressions": "error",
    },
  },
];
