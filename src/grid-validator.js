/**
 * Module for class GridValidator.
 *
 * @author Andreas Lillje
 * version 1.0.0
 */

import { RowColumnValidator } from './row-column-validator.js'
import { GapValidator } from './gap-validator.js'

/**
 * Validates input values for a css grid layout.
 *
 * @class
 */
export class GridValidator {
  #rowColumnValidator
  #gapValidator
  /**
   * Creates an instance of GridValidator.
   */
  constructor () {
    this.#rowColumnValidator = new RowColumnValidator()
    this.#gapValidator = new GapValidator()
  }

  /**
   * Validates different input values in a CSS grid layout.
   *
   * @param {Array} rows - An array containing different values representing grid-template-row in a css grid layout.
   * @param {Array} columns - An array containing different values representing grid-template-column properties in a css grid layout.
   * @param {string} rowGap - A string representing the grid-row-gap property.
   * @param {string} columnGap - A string representing the grid-column-gap property.
   */
  invalidParams (rows, columns, rowGap, columnGap) {
    // const errors = {
    this.#rowColumnValidator.validate(rows)
    this.#rowColumnValidator.validate(columns)
    this.#gapValidator.validate(rowGap)
    this.#gapValidator.validate(columnGap)
    // }
    // const valid = this.checkIfErrors(errors)
    // return !valid ? errors : undefined
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
