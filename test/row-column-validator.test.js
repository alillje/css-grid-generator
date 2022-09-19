import { RowColumnValidator } from '../lib/modules/row-column-validator.js'
const rowColumnValidator = new RowColumnValidator()

/* ============================== */
/* == RowColumnValidator Tests == */
/* ============================== */
/* ============================== */

describe('RowColumnValidator - Extract unit suffix from an input value', () => {
  test('Correct unit suffix - px', () => {
    expect(
      rowColumnValidator.getUnitSuffix('200px')
    ).toBe('px')
  })
  test('Correct unit suffix - px', () => {
    expect(
      rowColumnValidator.getUnitSuffix('5px')
    ).toBe('px')
  })
  test('Correct unit suffix - px', () => {
    expect(
      rowColumnValidator.getUnitSuffix('4319px')
    ).toBe('px')
  })
  test('Correct unit suffix - fr', () => {
    expect(
      rowColumnValidator.getUnitSuffix('1fr')
    ).toBe('fr')
  })
  test('Correct unit suffix - fr', () => {
    expect(
      rowColumnValidator.getUnitSuffix('2fr')
    ).toBe('fr')
  })
  test('Correct unit suffix - fr', () => {
    expect(
      rowColumnValidator.getUnitSuffix('30fr')
    ).toBe('fr')
  })
  test('Correct unit suffix - %', () => {
    expect(
      rowColumnValidator.getUnitSuffix('100%')
    ).toBe('%')
  })
  test('Correct unit suffix - %', () => {
    expect(
      rowColumnValidator.getUnitSuffix('83%')
    ).toBe('%')
  })
  test('Correct unit suffix - %', () => {
    expect(
      rowColumnValidator.getUnitSuffix('2%')
    ).toBe('%')
  })
  test('Incorrect unit suffix', () => {
    expect(
      rowColumnValidator.getUnitSuffix('2x')
    ).toBe(undefined)
  })
  test('Incorrect unit suffix', () => {
    expect(
      rowColumnValidator.getUnitSuffix('20rem')
    ).toBe(undefined)
  })
  test('Incorrect unit suffix', () => {
    expect(
      rowColumnValidator.getUnitSuffix('1cm')
    ).toBe(undefined)
  })
  test('Incorrect unit suffix', () => {
    expect(
      rowColumnValidator.getUnitSuffix('500')
    ).toBe(undefined)
  })
  test('Incorrect unit suffix', () => {
    expect(
      rowColumnValidator.getUnitSuffix('500.75')
    ).toBe(undefined)
  })
})

describe('RowColumnValidator - Removes unit suffix from string and returns extracted number', () => {
  test('Correct unit suffix - px', () => {
    expect(rowColumnValidator.removeUnitSuffix('200px')).toBe('200')
  })
  test('Correct unit suffix - px', () => {
    expect(rowColumnValidator.removeUnitSuffix('25px')).toBe('25')
  })
  test('Correct unit suffix - px', () => {
    expect(rowColumnValidator.removeUnitSuffix('3px')).toBe('3')
  })
  test('Correct unit suffix - fr', () => {
    expect(rowColumnValidator.removeUnitSuffix('1fr')).toBe('1')
  })
  test('Correct unit suffix - fr', () => {
    expect(rowColumnValidator.removeUnitSuffix('20fr')).toBe('20')
  })
  test('Correct unit suffix - fr', () => {
    expect(rowColumnValidator.removeUnitSuffix('353fr')).toBe('353')
  })
  test('Correct unit suffix - %', () => {
    expect(rowColumnValidator.removeUnitSuffix('100%')).toBe('100')
  })
  test('Correct unit suffix - %', () => {
    expect(rowColumnValidator.removeUnitSuffix('43%')).toBe('43')
  })
  test('Correct unit suffix - %', () => {
    expect(rowColumnValidator.removeUnitSuffix('2%')).toBe('2')
  })
  test('Incorrect unit suffix', () => {
    expect(rowColumnValidator.removeUnitSuffix('2')).toBe(undefined)
  })
  test('Incorrect unit suffix', () => {
    expect(rowColumnValidator.removeUnitSuffix('1000')).toBe(undefined)
  })
  test('Incorrect unit suffix', () => {
    expect(rowColumnValidator.removeUnitSuffix('aByO')).toBe(undefined)
  })
  test('Incorrect unit suffix', () => {
    expect(rowColumnValidator.removeUnitSuffix('200rem')).toBe(undefined)
  })
  test('Incorrect unit suffix', () => {
    expect(rowColumnValidator.removeUnitSuffix('200em')).toBe(undefined)
  })
})

describe('RowColumnValidator - Input is parseable number', () => {
  test('Correct input - px', () => {
    expect(rowColumnValidator.isNumber('200px')).toBe(true)
  })
  test('Correct input - px', () => {
    expect(rowColumnValidator.isNumber('30px')).toBe(true)
  })
  test('Correct input - px', () => {
    expect(rowColumnValidator.isNumber('1px')).toBe(true)
  })
  test('Correct input - fr', () => {
    expect(rowColumnValidator.isNumber('400fr')).toBe(true)
  })
  test('Correct input - fr', () => {
    expect(rowColumnValidator.isNumber('30fr')).toBe(true)
  })
  test('Correct input - fr', () => {
    expect(rowColumnValidator.isNumber('1fr')).toBe(true)
  })
  test('Correct input - %', () => {
    expect(rowColumnValidator.isNumber('100%')).toBe(true)
  })
  test('Correct input - %', () => {
    expect(rowColumnValidator.isNumber('82%')).toBe(true)
  })
  test('Correct input - %', () => {
    expect(rowColumnValidator.isNumber('3%')).toBe(true)
  })
  test('Incorrect input', () => {
    expect(rowColumnValidator.isNumber('abcdef')).toBe(false)
  })
  test('Incorrect input', () => {
    expect(rowColumnValidator.isNumber('3xfF3vh')).toBe(false)
  })
  test('Incorrect input', () => {
    expect(rowColumnValidator.isNumber('uscem')).toBe(false)
  })
  test('Incorrect input', () => {
    expect(rowColumnValidator.isNumber('SFspc')).toBe(false)
  })
  test('Incorrect input', () => {
    expect(rowColumnValidator.isNumber('Asf')).toBe(false)
  })
})

describe('RowColumnValidator - Has valid CSS measurement suffix', () => {
  test('Correct unit suffix - px', () => {
    expect(rowColumnValidator.hasCorrectSuffix('200px')).toBe(true)
  })
  test('Correct unit suffix - px', () => {
    expect(rowColumnValidator.hasCorrectSuffix('30px')).toBe(true)
  })
  test('Correct unit suffix - px', () => {
    expect(rowColumnValidator.hasCorrectSuffix('4px')).toBe(true)
  })
  test('Correct unit suffix - fr', () => {
    expect(rowColumnValidator.hasCorrectSuffix('555fr')).toBe(true)
  })
  test('Correct unit suffix - fr', () => {
    expect(rowColumnValidator.hasCorrectSuffix('47fr')).toBe(true)
  })
  test('Correct unit suffix - fr', () => {
    expect(rowColumnValidator.hasCorrectSuffix('3fr')).toBe(true)
  })
  test('Correct unit suffix - %', () => {
    expect(rowColumnValidator.hasCorrectSuffix('100%')).toBe(true)
  })
  test('Correct unit suffix - %', () => {
    expect(rowColumnValidator.hasCorrectSuffix('33%')).toBe(true)
  })
  test('Correct unit suffix - %', () => {
    expect(rowColumnValidator.hasCorrectSuffix('6%')).toBe(true)
  })
  test('Incorrect input', () => {
    expect(rowColumnValidator.hasCorrectSuffix('200p')).toBe(false)
  })
  test('Incorrect input', () => {
    expect(rowColumnValidator.hasCorrectSuffix('300')).toBe(false)
  })
  test('Incorrect input', () => {
    expect(rowColumnValidator.hasCorrectSuffix('200r')).toBe(false)
  })
  test('Incorrect input', () => {
    expect(rowColumnValidator.hasCorrectSuffix('200ss')).toBe(false)
  })
})

describe('RowColumnValidator - Validates row and column parameters', () => {
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
    expect(t1).toThrow(TypeError)
  })
  test('Incorrect parameter - Invalid css unit', () => {
    /**
     * Wrapping function requried to test throws.
     */
    const t1 = () => {
      rowColumnValidator.validate(
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
      rowColumnValidator.validate(
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
      rowColumnValidator.validate(
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
      rowColumnValidator.validate(
        'yHS'
      )
    }
    expect(t1).toThrow(TypeError)
  })
})
