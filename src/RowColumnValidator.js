/**
 * Module for class RowColumnValidator.
 *
 * @author Andreas Lillje
 * version 1.0.0
 */

import { Measurements } from './CssMeasures.js'
/**
 * Validates input values for a css grid layout.
 *
 * @class
 */
export class RowColumnValidator {
  /**
   * Validates the input value represening a gap property in a CSS grid layout.
   *
   * @param {Array} columnsOrRows - An array containing different values representing colum or row properties in a css grid layout.
   * @returns {(Array|undefined)} An array containing the error messages corresponding to the errors, otherwise undefined.
   */
  validate (columnsOrRows) {
    const error = []
    for (const columnOrRow of columnsOrRows) {
      if (typeof columnOrRow !== 'string') {
        error.push('Input must be a string')
        // Check if ending/measurement is valid
      } else if (!Object.values(Measurements).some(value => columnOrRow.endsWith(value))) {
        error.push('Input must end with a valid CSS measurement')
      }
    }

    return !error.length ? undefined : error
  }
}
