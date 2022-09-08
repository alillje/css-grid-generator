/**
 * Module for class RowColumnValidator.
 *
 * @author Andreas Lillje
 * version 1.0.0
 */

import { Measurements } from './css-measurments.js'
/**
 * Validates input values for a css grid layout.
 *
 * @class
 */
export class RowColumnValidator {
  /**
   * Validates the input represening rows or columns css values in a CSS grid layout.
   *
   * @param {Array} columnsOrRows - An array containing different values representing colum or row properties in a css grid layout.
   * @returns {(Array|undefined)} An array containing the error messages corresponding to the errors, otherwise undefined.
   */
  validate (columnsOrRows) {
    const error = []
    if (Array.isArray(columnsOrRows)) {
      for (const columnOrRow of columnsOrRows) {
        if (typeof columnOrRow !== 'string') {
          error.push('Input must be a string')
        } else if (!this.hasCorrectSuffix(columnOrRow)) {
          error.push('Input must end with a valid CSS measurement')
        } else if (!this.isNumber(columnOrRow)) {
          error.push('Row and column values must be numbers')
        }
      }
    } else {
      error.push('Row and column values must be contained in an Array')
    }
    return !error.length ? undefined : error
  }

  /**
   * Checks if a CSS value has a correct unit suffix.
   *
   * @param {string} cssValue - The unit input to validate.
   * @returns {boolean} - true if column or row has a correct unit suffix, otherwis false.
   */
  hasCorrectSuffix (cssValue) {
    if (Object.values(Measurements).some(unit => cssValue.endsWith(unit))) {
      return true
    } else {
      return false
    }
  }

  /**
   * Checks if a string representing a css value can be converted to a valid number.
   *
   * @param {string} cssValue - The string to validate.
   * @returns {boolean} true if the string can be converted to a valid number, otherwise false.
   */
  isNumber (cssValue) {
    let isNumber = true
    const extracedValue = this.removeUnitSuffix(cssValue)
    if ((typeof parseInt((extracedValue)) !== 'number') || isNaN(extracedValue)) {
      isNumber = false
    }
    return isNumber
  }

  /**
   * Takes a string representing a css value and removes the unit suffix if any.
   *
   * @param {string} cssValue - The string to extract the suffix from.
   * @returns {string} - The string with the CSS unit suffix removed.
   */
  removeUnitSuffix (cssValue) {
    const unitSuffix = this.getUnitSuffix(cssValue)
    return cssValue.replace(unitSuffix, '')
  }

  /**
   * Takes a string representing a css value and returns the unit suffix if any.
   *
   * @param {string} cssValue - The string to extract the suffix from.
   * @returns {string} - The CSS unit suffix.
   */
  getUnitSuffix (cssValue) {
    for (const unit of Object.values(Measurements)) {
      if (cssValue.endsWith(unit)) {
        return unit
      }
    }
  }
}
