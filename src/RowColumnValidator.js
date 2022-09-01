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
      } else if (!this.hasCorrectSuffix(columnOrRow)) {
        error.push('Input must end with a valid CSS measurement')
      } else if (!this.isNumber(columnOrRow)) {
        error.push('Row and column values must be numbers')
      }
    }

    return !error.length ? undefined : error
  }

  /**
   * Checks if a Row or Column input has a correct unit suffix.
   *
   * @param {string} columnOrRow - The unit input to validate.
   * @returns {boolean} - true if column or row has a correct unit suffix, otherwis false.
   */
  hasCorrectSuffix (columnOrRow) {
    if (Object.values(Measurements).some(unit => columnOrRow.endsWith(unit))) {
      return true
    } else {
      return false
    }
  }

  /**
   * Checks if a string can be converted to a valid number.
   *
   * @param {string} columnOrRow - The string to validate.
   * @returns {boolean} true if the string can be converted to a valid number, otherwise false.
   */
  isNumber (columnOrRow) {
    let isNumber = true
    const extracedValue = this.removeUnitSuffix(columnOrRow)
    if ((typeof parseInt((extracedValue)) !== 'number') || isNaN(extracedValue)) {
      isNumber = false
    }
    return isNumber
  }

  /**
   * Takes a string and removes the unit suffix if any.
   *
   * @param {string} columnOrRow - The string to extract the suffix from.
   * @returns {string} - The string with the CSS unit suffix removed.
   */
  removeUnitSuffix (columnOrRow) {
    const unitSuffix = this.getUnitSuffix(columnOrRow)
    return columnOrRow.replace(unitSuffix, '')
  }

  /**
   * Takes a string and returns the unit suffix if any.
   *
   * @param {string} columnOrRow - The string to extract the suffix from.
   * @returns {string} - The CSS unit suffix.
   */
  getUnitSuffix (columnOrRow) {
    for (const unit of Object.values(Measurements)) {
      if (columnOrRow.endsWith(unit)) {
        return unit
      }
    }
  }
}
