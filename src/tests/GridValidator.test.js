import { GridValidator } from '../grid-validator.js'

const gridValidator = new GridValidator()

describe('Validates grid input parameters', () => {
  test('Correct Values at all parameters', () => {
    expect(
      gridValidator.validateParams(
        ['200px', '200px', '200px'],
        ['100px', '100px'],
        '5px',
        '5px'
      )
    ).toBe(undefined)
  })
})
