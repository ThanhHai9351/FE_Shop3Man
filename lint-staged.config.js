module.exports = {
  '*': ['eslint --fix --no-warn-ignored'],
  "*.{ts,tsx}": ["eslint --fix", "npm run check-types"],
};
