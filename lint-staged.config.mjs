/** @type {import('lint-staged').Config} */
const config = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix --max-warnings=0', 'prettier --write'],
  '*.{css,scss}': ['stylelint --fix', 'prettier --write'],
  '*.{json,yml,yaml,mjs,cjs}': ['prettier --write'],
};

export default config;
