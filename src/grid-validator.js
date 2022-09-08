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
  validateParams (rows, columns, rowGap, columnGap) {
    this.#rowColumnValidator.validate(rows)
    this.#rowColumnValidator.validate(columns)
    this.#gapValidator.validate(rowGap)
    this.#gapValidator.validate(columnGap)
  }
}
