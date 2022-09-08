import { GridValidator } from '../grid-validator.js'

const gridValidator = new GridValidator()

describe('Validates grid input parameters', () => {
  test('Correct Values at all parameters', () => {
    expect(
      gridValidator.invalidParams(
        ['200px', '200px', '200px'],
        ['100px', '100px'],
        '5px',
        '5px'
      )
    ).toBe(undefined)
  })
  test('Missing one parameter', () => {
    expect(
      gridValidator.invalidParams(
        ['100px', '100px'],
        '5px',
        '5px'
      )
    ).toBeInstanceOf(Object)
  })
  test('Missing one parameter', () => {
    expect(
      gridValidator.invalidParams(
        ['300px', '300px', '400px', '500%'],
        ['100px', '100px'],
        '5px'
      )
    ).toBeInstanceOf(Object)
  })
  test('Missing two parameters', () => {
    expect(
      gridValidator.invalidParams(
        ['300px', '300px', '400px', '500%'],
        '5px'
      )
    ).toBeInstanceOf(Object)
  })
  test('Missing two parameters', () => {
    expect(
      gridValidator.invalidParams(
        ['300px', '300px', '400px', '500%'],
        ['100px', '100px']
      )
    ).toBeInstanceOf(Object)
  })
  test('Missing two parameters', () => {
    expect(
      gridValidator.invalidParams(
        '5px',
        '5px'
      )
    ).toBeInstanceOf(Object)
  })
  test('Missing three parameters', () => {
    expect(
      gridValidator.invalidParams(
        '5px'
      )
    ).toBeInstanceOf(Object)
  })
  test('Missing three parameters', () => {
    expect(
      gridValidator.invalidParams(
        ['1fr', '1fr', '2fr', '1fr', '1fr']
      )
    ).toBeInstanceOf(Object)
  })
})
describe('Error handling', () => {
  test('Detects errors', () => {
    expect(
      gridValidator.checkIfErrors({ value1: ['test', 'test2'], value2: [2, [1, 3], 'error'] })
    ).toBe(false)
  })
  test('Detects errors', () => {
    expect(
      gridValidator.checkIfErrors({ value1: undefined, value2: ['error1', 'error2'], value3: undefined })
    ).toBe(false)
  })
  test('No errors to detect', () => {
    expect(
      gridValidator.checkIfErrors({ value1: undefined, value2: undefined })
    ).toBe(true)
  })
})
