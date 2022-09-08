/**
 * Module for class GridGapValidator.
 *
 * @author Andreas Lillje
 * version 1.0.0
 */

import { RowColumnValidator } from './row-column-validator.js'

/**
 * Validates input values for a css grid layout
 *
 * @class
 */
export class GapValidator extends RowColumnValidator {
  /**
   * Validates the input value represening a gap property in a CSS grid layout.
   *
   * @param {string} gap - A string representing the gap property.
   * @returns {(string|undefined)} The error message corresponding to the error, otherwise undefined.
   */
  validate (gap) {
    let error = ''
    if (typeof gap !== 'string') {
      error = 'Input must be a string'
    } else if (!this.hasCorrectSuffix(gap)) {
      error = 'Input must end with a valid CSS measurement'
    } else if (!this.isNumber(gap)) {
      error = 'Gap values must be numbers'
    }
    return !error.length ? undefined : error
  }
}
