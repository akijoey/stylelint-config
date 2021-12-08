// .stylelintrc.js

const extend = syntax => {
  return [
    'stylelint-config-standard',
    syntax && `./lib/${syntax}`,
    'stylelint-config-recess-order',
    'stylelint-config-prettier'
  ].filter(Boolean)
}

module.exports = {
  extends: extend(),
  overrides: [
    {
      files: ['**/*.scss'],
      extends: extend('scss')
    },
    {
      files: ['**/*.sass'],
      extends: extend('sass')
    },
    {
      files: ['**/*.less'],
      extends: extend('less')
    },
    {
      files: ['**/*.styl'],
      extends: extend('stylus')
    }
  ]
}
