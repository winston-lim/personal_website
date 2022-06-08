// module.exports = {
//   // Run type-check on changes to TypeScript files
//   '**/*.ts?(x)': () => 'yarn type-check',
//   // Run ESLint on changes to JavaScript/TypeScript files
//   '**/*.(ts|js)?(x)': (filenames) => `yarn lint . ${filenames.join(' ')}`,
// }
const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  '**/*.ts?(x)': () => 'yarn type-check',
  '**/*.(ts|js)?(x)': [buildEslintCommand],
}
