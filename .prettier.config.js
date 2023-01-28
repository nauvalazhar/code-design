module.exports = {
  singleQuote: true,
  trailingComma: "none",
  arrowParens: "avoid",
  proseWrap: "preserve",
  quoteProps: "as-needed",
  bracketSameLine: false,
  bracketSpacing: true,
  tabWidth: 2,
  plugins: [require("prettier-plugin-tailwindcss")],
};
