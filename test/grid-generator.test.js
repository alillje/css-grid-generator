import { GridGenerator } from '../lib/modules/grid-generator.js'
const gridGenerator = new GridGenerator()

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
