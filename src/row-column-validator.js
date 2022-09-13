/**
 * Module for class RowColumnValidator.
 *
 * @author Andreas Lillje
 * version 1.1.2
 */

import { Measurements } from './css-measurments.js'

/**
 * Validates input values for css grid rows or columns.
 *
 * @class
 */
export class RowColumnValidator {
  /**
   * Validates the input represening rows or columns css values in a CSS grid layout.
   *
   * @param {Array} columnsOrRows - An array containing different values representing colum or row properties in a css grid layout.
   * @throws {(Error)} - If any invalid parameters are passed.
   */
  validate (columnsOrRows) {
    if (Array.isArray(columnsOrRows)) {
      for (const columnOrRow of columnsOrRows) {
        if (typeof columnOrRow !== 'string') {
          throw new Error('Input must be a string')
        } else if (!this.hasCorrectSuffix(columnOrRow)) {
          throw new Error('Input must end with a valid CSS measurement (px, fr, %')
        } else if (!this.isNumber(columnOrRow)) {
          throw new Error('Row and column values must be numbers followed by a CSS unit prefix')
        }
      }
    } else {
      throw new Error('Row and column values must be contained in an Array')
    }
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
    if (unitSuffix) {
      return cssValue.replace(unitSuffix, '')
    }
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
