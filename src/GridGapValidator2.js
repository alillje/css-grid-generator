/**
 * Module for class GridGapValidator.
 *
 * @author Andreas Lillje
 * version 1.0.0
 */

import { Measurements } from './CssMeasures.js'

/**
 * Validates input values for a css grid layout
 *
 * @class
 */
export class GridGapValidator {
  /**
   * Validates the input value represening a gap property in a CSS grid layout.
   *
   * @param {string} gap - A string representing the gap property.
   * @returns {(string|undefined)} The error message corresponding to the error, otherwise undefined.
   */
  validateGaps (gap) {
    let error = ''
    if (typeof gap !== 'string') {
      error = 'Input must be a string'
    } else if (!Object.values(Measurements).some(value => gap.endsWith(value))) {
      error = 'Input must end with a valid CSS measurement'
    }
    return !error ? undefined : error
  }
}
