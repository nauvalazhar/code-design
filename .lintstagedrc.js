module.exports = {
  // Lint & Prettify JSX and JS files
  '**/*.(jsx|js)': filenames => [
    `yarn lint`,
    `yarn prettier --config ./.prettier.config.js -w ${filenames.join(' ')}`
  ],

  // Prettify only JSON files
  '**/*.(json)': filenames => `yarn prettier -w ${filenames.join(' ')}`
};
