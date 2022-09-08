import { RowColumnValidator } from '../row-column-validator.js'

const rowColumnValidator = new RowColumnValidator()

describe('Validates row and column parameters', () => {
  test('Correct parameter value', () => {
    expect(
      rowColumnValidator.validate(
        ['200px', '200px', '200px']
      )
    ).toBe(undefined)
  })
  test('Correct parameter value', () => {
    expect(
      rowColumnValidator.validate(
        ['100fr', '100fr']
      )
    ).toBe(undefined)
  })
  test('Incorrect parameter - Not an array', () => {
    /**
     * Wrapping function requried to test throws.
     */
    const t1 = () => {
      rowColumnValidator.validate(
        '100fr'
      )
    }
    expect(t1).toThrow(Error)
  })
  test('Incorrect parameter - invalid css unit', () => {
    /**
     * Wrapping function requried to test throws.
     */
    const t1 = () => {
      rowColumnValidator.validate(
        '100x'
      )
    }
    expect(t1).toThrow(Error)
  })
})
