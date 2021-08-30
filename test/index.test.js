const config = require('../.stylelintrc')

describe('stylelint-config', () => {
  it('correct export', () => {
    const index = require('..')
    expect(index).toEqual(config)
  })
})
