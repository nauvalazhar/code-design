module.exports = {
  singleQuote: true,
  trailingComma: 'none',
  arrowParens: 'avoid',
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  bracketSameLine: false,
  bracketSpacing: true,
  tabWidth: 2,
  importOrder: ['^data/(.*)$', '^components/(.*)$', '^[./]'],
  importOrderBuiltinModulesToTop: true,
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: ['jsx', 'decorators-legacy', 'typescript'],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('@ianvs/prettier-plugin-sort-imports')
  ]
};
