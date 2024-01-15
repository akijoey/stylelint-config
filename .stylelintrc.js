// .stylelintrc.js

const path = require('path')

// https://github.com/stylelint/stylelint/issues/5769
const resolve = dir => path.join(process.cwd(), dir)

const extend = syntax => {
  return [
    'stylelint-config-standard',
    syntax && `./lib/${syntax}`,
    'stylelint-config-recess-order'
  ].filter(Boolean)
}

module.exports = {
  extends: extend(),
  overrides: [
    {
      files: [resolve('**/*.scss')],
      extends: extend('scss')
    },
    {
      files: [resolve('**/*.sass')],
      extends: extend('sass')
    },
    {
      files: [resolve('**/*.less')],
      extends: extend('less')
    },
    {
      files: [resolve('**/*.styl')],
      extends: extend('stylus')
    }
  ]
}
