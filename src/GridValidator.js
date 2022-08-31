import { RowColumnValidator } from './RowColumnValidator.js'
import { GridGapValidator } from './GridGapValidator.js'

/**
 * Validates input values for a css grid layout.
 */
export class GridValidator {
  #rowColumnValidator
  #gridGapValidator
  /**
   * Creates an instance of GridGenerator.
   */
  constructor () {
    this.#rowColumnValidator = new RowColumnValidator()
    this.#gridGapValidator = new GridGapValidator()
  }

  /**
   * Validates different input values in a CSS grid layout.
   *
   * @param {Array} rows - An array containing different values representing grid-template-row in a css grid layout.
   * @param {Array} columns - An array containing different values representing grid-template-column properties in a css grid layout.
   * @param {string} rowGap - A string representing the grid-row-gap property.
   * @param {string} columnGap - A string representing the grid-column-gap property.
   * @returns {(object|undefined)} An object containing error messages corresponding to the propery.
   */
  validateInput (rows, columns, rowGap, columnGap) {
    let valid = true
    const errors = {
      columnErrors: this.#rowColumnValidator.validate(columns),
      rowErrors: this.#rowColumnValidator.validate(rows),
      columnGap: this.#gridGapValidator.validateGaps(columnGap),
      rowGap: this.#gridGapValidator.validateGaps(rowGap)

    }

    for (const value of Object.values(errors)) {
      if (value) {
        valid = false
      }
    }

    return !valid ? errors : undefined
  }
}
