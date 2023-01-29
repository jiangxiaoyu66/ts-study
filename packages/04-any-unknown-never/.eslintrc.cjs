// module.exports = {
//   "rules": {
//     "@typescript-eslint/non-nullable-type-assertion-style": "warn"
//   }
// };
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
};