import { GridValidator } from './GridValidator.js'
/**
 * Creates a string representing a CSS grid layout.
 */
export class GridGenerator {
  #rows
  #columns
  #rowGap
  #columnGap
  #gridValidator
  /**
   * Creates an instance of GridGenerator.
   */
  constructor () {
    this.#gridValidator = new GridValidator()
  }

  /**
   * Creates a string representation of a CSS grid layout template.
   *
   * @param {object} grid - An object containin all the grid properties in a css grid layout.
   * @param {Array} grid.rows - An array containing different values representing grid-template-row in a css grid layout.
   * @param {Array} grid.columns - An array containing different values representing grid-template-column properties in a css grid layout.
   * @param {string} grid.rowGap - A string representing the grid-row-gap property.
   * @param {string} grid.columnGap - A string representing the grid-column-gap property.
   * @returns {string|object} - The CSS grid layout template, or if input contains errors, returns an object with the error messages.
   */
  createGrid ({ rows = ['100%'], columns = ['100%'], rowGap = '0px', columnGap = '0px' }) {
    const error = this.#gridValidator.validateInput(rows, columns, rowGap, columnGap)
    if (!error) {
      const grid = `
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-rows: ${this.#rows.join(' ')};
      grid-template-columns: ${this.#columns.join(' ')};
      grid-row-gap: ${this.#rowGap}
      grid-column-gap: ${this.#columnGap}`
      return grid
    } else {
      return error
    }
  }
}
