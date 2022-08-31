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
   *
   * @param {Array} rows - An array containing different values representing grid-template-row in a css grid layout.
   * @param {Array} columns - An array containing different values representing grid-template-column properties in a css grid layout.
   * @param {string} rowGap - A string representing the grid-row-gap property.
   * @param {string} columnGap - A string representing the grid-column-gap property.
   */
  constructor ({ rows = ['100%'], columns = ['100%'], rowGap = '0px', columnGap = '0px' }) {
    this.#rows = rows
    this.#columns = columns
    this.#columnGap = columnGap
    this.#rowGap = rowGap
    this.#gridValidator = new GridValidator()
  }

  /**
   * Creates a string representation of a CSS grid layout template.
   * @returns {string|object} - The CSS grid layout template, or if input contains errors, returns an object with the error messages.
   */
  createGrid () {
    const error = this.#gridValidator.validateInput(this.#rows, this.#columns, this.#rowGap, this.#columnGap)
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
