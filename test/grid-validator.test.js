import { GridValidator } from '../lib/modules/grid-validator.js'
const gridValidator = new GridValidator()

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
