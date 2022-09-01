/**
 * Module for class GridValidator.
 *
 * @author Andreas Lillje
 * version 1.0.0
 */

import { RowColumnValidator } from './RowColumnValidator.js'
import { GridGapValidator } from './GridGapValidator.js'

/**
 * Validates input values for a css grid layout.
 *
 * @class
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
   * @returns {(object|undefined)} - An object containing error messages corresponding to the propery.
   */
  validateGridParameters (rows, columns, rowGap, columnGap) {
    const errors = {
      columnErrors: this.#rowColumnValidator.validate(columns),
      rowErrors: this.#rowColumnValidator.validate(rows),
      columnGap: this.#gridGapValidator.validateGaps(columnGap),
      rowGap: this.#gridGapValidator.validateGaps(rowGap)

    }
    const valid = this.checkIfErrors(errors)
    return !valid ? errors : undefined
  }

  /**
   * Checks if every key in an object has a value that represents one or more errors.
   *
   * @param {object} errors - An object with arrays of errors for every value.
   * @returns {boolean} - true if errors are non-existen, otherwise false.
   */
  checkIfErrors (errors) {
    let valid = true
    for (const value of Object.values(errors)) {
      if (value) {
        valid = false
        break
      }
    }
    return valid
  }
}
