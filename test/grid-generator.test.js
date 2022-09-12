import { RowColumnValidator } from '../src/row-column-validator.js'
import { GapValidator } from '../src/gap-validator.js'
import { GridValidator } from '../src/grid-validator.js'

const rowColumnValidator = new RowColumnValidator()
const gapValidator = new GapValidator()
const gridValidator = new GridValidator()

/* ============================== */
/* == RowColumnValidator Tests == */
/* ============================== */
/* ============================== */
describe('RowColumnValidator - Extract unit suffix from an input value', () => {
  test('Correct input value - px', () => {
    expect(
      rowColumnValidator.getUnitSuffix('200px')
    ).toBe('px')
  })
  test('Correct input value - fr', () => {
    expect(
      rowColumnValidator.getUnitSuffix('1fr')
    ).toBe('fr')
  })
  test('Correct input value - cm', () => {
    expect(
      rowColumnValidator.getUnitSuffix('1000cm')
    ).toBe('cm')
  })
  test('Correct input value - pc', () => {
    expect(
      rowColumnValidator.getUnitSuffix('1000pc')
    ).toBe('pc')
  })

  test('Correct input value - mm', () => {
    expect(
      rowColumnValidator.getUnitSuffix('10mm')
    ).toBe('mm')
  })

  test('Correct input value - in', () => {
    expect(
      rowColumnValidator.getUnitSuffix('178in')
    ).toBe('in')
  })

  test('Correct input value - pt', () => {
    expect(
      rowColumnValidator.getUnitSuffix('1378pt')
    ).toBe('pt')
  })

  test('Correct input value - em', () => {
    expect(
      rowColumnValidator.getUnitSuffix('13em')
    ).toBe('em')
  })

  test('Correct input value - ex', () => {
    expect(
      rowColumnValidator.getUnitSuffix('113ex')
    ).toBe('ex')
  })

  test('Correct input value - ch', () => {
    expect(
      rowColumnValidator.getUnitSuffix('7ch')
    ).toBe('ch')
  })

  test('Correct input value - rem', () => {
    expect(
      rowColumnValidator.getUnitSuffix('7rem')
    ).toBe('rem')
  })

  test('Correct input value - vw', () => {
    expect(
      rowColumnValidator.getUnitSuffix('5vw')
    ).toBe('vw')
  })

  test('Correct input value - vmin', () => {
    expect(
      rowColumnValidator.getUnitSuffix('627vmin')
    ).toBe('vmin')
  })

  test('Correct input value - vmax', () => {
    expect(
      rowColumnValidator.getUnitSuffix('63vmax')
    ).toBe('vmax')
  })

  test('Correct input value - %', () => {
    expect(
      rowColumnValidator.getUnitSuffix('83%')
    ).toBe('%')
  })
})

describe('RowColumnValidator - Removes unit suffix from string and returns extracted number', () => {
  test('Correct input - px', () => {
    expect(rowColumnValidator.removeUnitSuffix('200px')).toBe('200')
  })
  test('Correct input - vh', () => {
    expect(rowColumnValidator.removeUnitSuffix('30vh')).toBe('30')
  })
  test('Correct input - em', () => {
    expect(rowColumnValidator.removeUnitSuffix('2em')).toBe('2')
  })
  test('Correct input - pc', () => {
    expect(rowColumnValidator.removeUnitSuffix('4000pc')).toBe('4000')
  })
  test('Correct input - rem', () => {
    expect(rowColumnValidator.removeUnitSuffix('70rem')).toBe('70')
  })
})

describe('RowColumnValidator - Input is parseable number', () => {
  test('Correct input - px', () => {
    expect(rowColumnValidator.isNumber('200px')).toBe(true)
  })
  test('Correct input - vh', () => {
    expect(rowColumnValidator.isNumber('30vh')).toBe(true)
  })
  test('Correct input - em', () => {
    expect(rowColumnValidator.isNumber('2em')).toBe(true)
  })
  test('Correct input - pc', () => {
    expect(rowColumnValidator.isNumber('4000pc')).toBe(true)
  })
  test('Correct input - rem', () => {
    expect(rowColumnValidator.isNumber('70rem')).toBe(true)
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
  test('Correct input', () => {
    expect(rowColumnValidator.hasCorrectSuffix('200px')).toBe(true)
  })
  test('Correct input', () => {
    expect(rowColumnValidator.hasCorrectSuffix('200vh')).toBe(true)
  })
  test('Correct input', () => {
    expect(rowColumnValidator.hasCorrectSuffix('200rem')).toBe(true)
  })
  test('Correct input', () => {
    expect(rowColumnValidator.hasCorrectSuffix('200vmax')).toBe(true)
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
    expect(t1).toThrow(Error)
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
    expect(t1).toThrow(Error)
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
    expect(t1).toThrow(Error)
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
    expect(t1).toThrow(Error)
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
    expect(t1).toThrow(Error)
  })
})

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
    expect(t1).toThrow(Error)
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
    expect(t1).toThrow(Error)
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
    expect(t1).toThrow(Error)
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
    expect(t1).toThrow(Error)
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
    expect(t1).toThrow(Error)
  })
})

/* ============================== */
/* ==== GridValidator Tests ===== */
/* ============================== */
/* ============================== */
