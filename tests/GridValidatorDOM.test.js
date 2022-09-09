import { GridValidator } from '../src/grid-validator.js'

const gridValidator = new GridValidator()
/**
 * @jest-environment jsdom
 */
test('use jsdom in this test file', () => {
  const element = document.createElement('div')
  expect(element).not.toBeNull()
})
