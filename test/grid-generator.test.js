import { RowColumnValidator } from '../src/row-column-validator.js'

const rowColumnValidator = new RowColumnValidator()

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
