import { RowColumnValidator } from '../lib/modules/row-column-validator.js'
import { GapValidator } from '../lib/modules/gap-validator.js'
import { GridGenerator } from '../lib/modules/grid-generator.js'
import { GridValidator } from '../lib/modules/grid-validator.js'

const rowColumnValidator = new RowColumnValidator()
const gapValidator = new GapValidator()
const gridGenerator = new GridGenerator()
const gridValidator = new GridValidator()

// MISSING UNIT TEST FOR:
// GridValidator.validateParams()
// ----------
// GridGenerator.setGrid() && GridGenerator.setPosition(), tested manually with testApp

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

/* ============================== */
/* ==== GridGenerator Tests ===== */
/* ============================== */
/* ============================== */
describe('GridGenerator - Generate a CSS template based on input', () => {
  test('Correct parameter value', () => {
    expect(
      gridGenerator.getGridCss({ rows: ['100px', '100px'], columns: ['100px', '100px', '100px'], rowGap: '5px', columnGap: '5px' })
    ).toBeDefined()
  })

  test('Correct parameter value', () => {
    expect(
      gridGenerator.getGridCss({ rows: ['1fr', '1fr'], columns: ['1fr', '2fr', '1fr'] })
    ).toBeDefined()
  })

  test('Correct parameter value', () => {
    expect(
      gridGenerator.getGridCss({ rows: ['50%', '50%'], columns: ['25%', '25%', '25%', '25%'], rowGap: '10px', columnGap: '10px' })
    ).toBeDefined()
  })

  test('Incorrect parameter value', () => {
    let errorMessage = ''
    try {
      gridGenerator.getGridCss({ rows: ['100p', '100px'], columns: ['100px', '100px', '100px'], rowGap: '5px', columnGap: '5px' })
    } catch (e) {
      errorMessage = e.message
    }
    expect(errorMessage).toBe('Row and column values must end with a valid CSS measurement (px, fr, %) or a css sizing keyword')
  })

  test('Incorrect parameter value', () => {
    let errorMessage = ''
    try {
      gridGenerator.getGridCss({ rows: ['100px', '100px'], columns: ['100px', '100px', '100px'], rowGap: '5', columnGap: '5px' })
    } catch (e) {
      errorMessage = e.message
    }
    expect(errorMessage).toBe('Gap value must end with a valid CSS measurement')
  })

  test('Incorrect parameter value', () => {
    let errorMessage = ''
    try {
      gridGenerator.getGridCss({ rows: ['100', '100'], columns: ['abc', '354', '300'], rowGap: '5', columnGap: '5px' })
    } catch (e) {
      errorMessage = e.message
    }
    expect(errorMessage
    ).toBe('Row and column values must end with a valid CSS measurement (px, fr, %) or a css sizing keyword')
  })
})

describe('GridGenerator - Generate a CSS position template based on input', () => {
  test('Correct parameter value', () => {
    expect(
      gridGenerator.getPositionCss({ startRow: 1, endRow: 2, startColumn: 2, endColumn: 3 })
    ).toBeDefined()
  })

  test('Correct parameter value', () => {
    expect(
      gridGenerator.getPositionCss({ startRow: 3, endRow: 4, startColumn: 1, endColumn: 5 })
    ).toBeDefined()
  })

  test('Correct parameter value', () => {
    expect(
      gridGenerator.getPositionCss({ startRow: 3, startColumn: 4 })
    ).toBeDefined()
  })

  test('Correct parameter value', () => {
    expect(
      gridGenerator.getPositionCss({ startRow: 1, startColumn: 2 })
    ).toBeDefined()
  })

  test('Incorrect parameter value', () => {
    let errorMessage = ''
    try {
      gridGenerator.getPositionCss({ startRow: 'abc', endRow: 5, startColumn: 2, endColumn: 3 })
    } catch (e) {
      errorMessage = e.message
    }
    expect(errorMessage).toBe('Start values for row and column is mandatory')
  })

  test('Incorrect parameter value', () => {
    let errorMessage = ''
    try {
      gridGenerator.getPositionCss({ startRow: 1, endRow: 4, startColumn: false, endColumn: 3 })
    } catch (e) {
      errorMessage = e.message
    }
    expect(errorMessage).toBe('Start values for row and column is mandatory')
  })
})

/**
 * @jest-environment jsdom
 */
describe('GridGenerator - Validate input when setting a row value for an element', () => {
  test('Setting rows with suffix px', () => {
    document.body.innerHTML = '<div></div>'
    gridGenerator.setRows(['200px', '200px', '200px'], 'div')
    expect(
      document.body.innerHTML
    ).toBe('<div style="grid-template-rows: 200px 200px 200px;"></div>')
  })
  test('Setting rows with suffix fr', () => {
    document.body.innerHTML = '<div></div>'
    gridGenerator.setRows(['1fr', '1fr', '1fr'], 'div')
    expect(
      document.body.innerHTML
    ).toBe('<div style="grid-template-rows: 1fr 1fr 1fr;"></div>')
  })
  test('Setting rows with suffix %', () => {
    document.body.innerHTML = '<div></div>'
    gridGenerator.setRows(['30%', '30%', '40%'], 'div')
    expect(
      document.body.innerHTML
    ).toBe('<div style="grid-template-rows: 30% 30% 40%;"></div>')
  })
  test('Setting rows with mixed suffixes', () => {
    document.body.innerHTML = '<div></div>'
    gridGenerator.setRows(['30%', '1fr', '70px'], 'div')
    expect(
      document.body.innerHTML
    ).toBe('<div style="grid-template-rows: 30% 1fr 70px;"></div>')
  })
})

describe('GridGenerator - Validate input when setting a column value for an element', () => {
  test('Setting columns with suffix px', () => {
    document.body.innerHTML = '<div></div>'
    gridGenerator.setColumns(['200px', '200px', '200px'], 'div')
    expect(
      document.body.innerHTML
    ).toBe('<div style="grid-template-columns: 200px 200px 200px;"></div>')
  })
  test('Setting columns with suffix fr', () => {
    document.body.innerHTML = '<div></div>'
    gridGenerator.setColumns(['1fr', '1fr', '1fr'], 'div')
    expect(
      document.body.innerHTML
    ).toBe('<div style="grid-template-columns: 1fr 1fr 1fr;"></div>')
  })
  test('Setting rocolumnsws with suffix %', () => {
    document.body.innerHTML = '<div></div>'
    gridGenerator.setColumns(['30%', '30%', '40%'], 'div')
    expect(
      document.body.innerHTML
    ).toBe('<div style="grid-template-columns: 30% 30% 40%;"></div>')
  })
  test('Setting columns with mixed suffixes', () => {
    document.body.innerHTML = '<div></div>'
    gridGenerator.setColumns(['30%', '1fr', '70px'], 'div')
    expect(
      document.body.innerHTML
    ).toBe('<div style="grid-template-columns: 30% 1fr 70px;"></div>')
  })
})

/* ============================== */
/* ==== GridValidator Tests ===== */
/* ============================== */
/* ============================== */
describe('GridValidator - Validate position values when positioning an element in a grid layout', () => {
  test('Valid position values - All start and end parameters', () => {
    expect(
      gridValidator.validatePositions({ startRow: 1, endRow: 2, startColumn: 1, endColumn: 4 })
    ).toStrictEqual({ startRow: 1, endRow: 2, startColumn: 1, endColumn: 4 })
  })

  test('Valid position values - endRow value undefined', () => {
    expect(
      gridValidator.validatePositions({ startRow: 1, endRow: undefined, startColumn: 1, endColumn: 4 })
    ).toStrictEqual({ startRow: 1, endRow: undefined, startColumn: 1, endColumn: 4 })
  })

  test('Valid position values - endRow & endColumn value undefined', () => {
    expect(
      gridValidator.validatePositions({ startRow: 1, endRow: undefined, startColumn: 1, endColumn: undefined })
    ).toStrictEqual({ startRow: 1, endRow: undefined, startColumn: 1, endColumn: undefined })
  })

  test('Valid position values - endRow value not a number', () => {
    expect(
      gridValidator.validatePositions({ startRow: 1, endRow: 'test', startColumn: 1, endColumn: 7 })
    ).toStrictEqual({ startRow: 1, endRow: undefined, startColumn: 1, endColumn: 7 })
  })

  test('Valid position values - endRow & endColumn value not a number', () => {
    expect(
      gridValidator.validatePositions({ startRow: 1, endRow: 'test', startColumn: 1, endColumn: 'test2' })
    ).toStrictEqual({ startRow: 1, endRow: undefined, startColumn: 1, endColumn: undefined })
  })

  test('Invalid position values - startRow undefined', () => {
    /**
     * Wrapping function requried to test throws.
     */
    const t1 = () => {
      gridValidator.validatePositions({ startRow: undefined, endRow: 4, startColumn: 1, endColumn: 5 })
    }
    expect(t1).toThrow(Error)
  })

  test('Invalid position values - startColumn undefined', () => {
    /**
     * Wrapping function requried to test throws.
     */
    const t1 = () => {
      gridValidator.validatePositions({ startRow: 1, endRow: 4, startColumn: undefined, endColumn: 5 })
    }
    expect(t1).toThrow(Error)
  })

  test('Invalid position values - startRow not a number', () => {
    /**
     * Wrapping function requried to test throws.
     */
    const t1 = () => {
      gridValidator.validatePositions({ startRow: 'test', endRow: 4, startColumn: 1, endColumn: 5 })
    }
    expect(t1).toThrow(Error)
  })

  test('Invalid position values - startColumn not a number', () => {
    /**
     * Wrapping function requried to test throws.
     */
    const t1 = () => {
      gridValidator.validatePositions({ startRow: 1, endRow: 4, startColumn: true, endColumn: 5 })
    }
    expect(t1).toThrow(Error)
  })

  describe('GridValidator - Validates if a html identifier is a string', () => {
    test('Valid input string', () => {
      expect(
        gridValidator.isString('testElement')
      ).toBe(true)
    })
    test('Valid input string', () => {
      expect(
        gridValidator.isString('mockElement')
      ).toBe(true)
    })

    test('Invalid input - not a string', () => {
      /**
       * Wrapping function requried to test throws.
       */
      const t1 = () => {
        gridValidator.validatePositions(true)
      }
      expect(t1).toThrow(Error)
    })
    test('Invalid input - not a string', () => {
      /**
       * Wrapping function requried to test throws.
       */
      const t1 = () => {
        gridValidator.validatePositions(2)
      }
      expect(t1).toThrow(Error)
    })
    test('Invalid input - not a string', () => {
      /**
       * Wrapping function requried to test throws.
       */
      const t1 = () => {
        gridValidator.validatePositions(['200', 'test'])
      }
      expect(t1).toThrow(Error)
    })
  })
})
