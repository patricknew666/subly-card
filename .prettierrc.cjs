const assetsSuffix = 'svg|png|css|scss';

module.exports = {
  arrowParens: 'always',
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  printWidth: 100,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    `^(?!(@\/)|(\\.)|(\\..)[a-z@]).(?!.*\\.(${assetsSuffix})$)`, // All imports from node_modules
    `^@\/(?!.*\\.(${assetsSuffix})$)`, // All imports starts with "@/"
    `^\\\..(?!.*\\.(${assetsSuffix})$)|^\\\.$`, // All imports starts with "."
    `^(?!(@\/)|(\\.)|(\\..)[a-z@]).*\\.(${assetsSuffix})$`, // All asserts imports from node_modules
    `^@\/.*\\\.(${assetsSuffix})$`, // All assets imports starts with "@/"
    `\\\.(${assetsSuffix})$`, // All assets imports starts with "."
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'classProperties', 'decorators-legacy', 'prettier-plugin-tailwindcss'],
};
