import { GapValidator } from '../lib/modules/gap-validator.js'
const gapValidator = new GapValidator()

/* ============================== */
/* ===== GapValidator Tests ===== */
/* ============================== */
/* ============================== */

describe('GapValidator - Validates gap parameters', () => {
  test('Correct parameter value', () => {
    expect(
      gapValidator.validate(
        '200px'
      )
    ).toBe(undefined)
  })
  test('Correct parameter value', () => {
    expect(
      gapValidator.validate(
        '1fr'
      )
    ).toBe(undefined)
  })
  test('Incorrect parameter - Not a string', () => {
    /**
     * Wrapping function requried to test throws.
     */
    const t1 = () => {
      gapValidator.validate(
        1
      )
    }
    expect(t1).toThrow(TypeError)
  })
  test('Incorrect parameter - Not a string', () => {
    /**
     * Wrapping function requried to test throws.
     */
    const t1 = () => {
      gapValidator.validate(
        true
      )
    }
    expect(t1).toThrow(Error)
  })

  test('Incorrect parameter - Invalid css unit', () => {
    /**
     * Wrapping function requried to test throws.
     */
    const t1 = () => {
      gapValidator.validate(
        '100sa'
      )
    }
    expect(t1).toThrow(TypeError)
  })
  test('Incorrect parameter - Invalid css unit', () => {
    /**
     * Wrapping function requried to test throws.
     */
    const t1 = () => {
      gapValidator.validate(
        '100x'
      )
    }
    expect(t1).toThrow(TypeError)
  })
  test('Incorrect parameter - Does not contain a parseable number', () => {
    /**
     * Wrapping function requried to test throws.
     */
    const t1 = () => {
      gapValidator.validate(
        'sf45g3x'
      )
    }
    expect(t1).toThrow(TypeError)
  })
  test('Incorrect parameter - Does not contain a parseable number', () => {
    /**
     * Wrapping function requried to test throws.
     */
    const t1 = () => {
      gapValidator.validate(
        'yHS'
      )
    }
    expect(t1).toThrow(TypeError)
  })
})
