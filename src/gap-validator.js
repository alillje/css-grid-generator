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
   * @throws {(Error)} - If any invalid parameters are passed.
   */
  validate (gap) {
    if (typeof gap !== 'string') {
      throw new Error('Input must be a string')
    } else if (!this.hasCorrectSuffix(gap)) {
      throw new Error('Input must end with a valid CSS measurement')
    } else if (!this.isNumber(gap)) {
      throw new Error('Gap values must be numbers')
    }
  }
}
