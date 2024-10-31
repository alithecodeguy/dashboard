module.exports = {
  singleQuote: true,
  arrowParens: 'always',
  trailingComma: 'none',
  jsxBracketSameLine: true,
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  endOfLine: 'auto',
  useTabs: false,
  // Additional prettier options can be specified below.
  bracketSpacing: true, // Spaces between brackets in object literals.
  jsxSingleQuote: false, // Use single quotes instead of double quotes in JSX.
  htmlWhitespaceSensitivity: 'css', // Respect the default value of CSS display property.
  proseWrap: 'preserve', // Wrap prose if it exceeds the print width.
  vueIndentScriptAndStyle: true, // Indent scripts and styles in Vue files.
  embeddedLanguageFormatting: 'auto' // Format embedded code if Prettier can parse it.
};
