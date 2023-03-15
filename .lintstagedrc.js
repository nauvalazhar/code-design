module.exports = {
  // Lint & Prettify TSX, TS, JSX, and JS files
  '**/*.(tsx|ts|jsx|js)': filenames => [
    `yarn lint`,
    `yarn prettier --config ./.prettier.config.js -w ${filenames.join(' ')}`
  ],

  // Prettify only JSON files
  '**/*.(json)': filenames => `yarn prettier -w ${filenames.join(' ')}`
};
