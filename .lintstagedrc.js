module.exports = {
  // Lint & Prettify JSX and JS files
  "**/*.(jsx|js)": (filenames) => [
    `yarn lint`,
    `yarn prettier --write "${filenames.join('" "')}"`,
  ],

  // Prettify only JSON files
  "**/*.(json)": (filenames) =>
    `yarn prettier --write "${filenames.join('" "')}"`,
};
