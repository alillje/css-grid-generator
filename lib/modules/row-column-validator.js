/**
 * Module for class RowColumnValidator.
 *
 * @author Andreas Lillje
 * version 1.0.8
 */

import { Measurements } from '../enum/css-measurments.js'
import { CssSizingKeywords } from '../enum/css-sizing-keywords.js'

/**
 * Validates input values for css grid rows or columns.
 *
 * @class
 */
export class RowColumnValidator {
  /**
   * Validates the input represening rows or columns css values in a CSS grid layout.
   *
   * @param {string[]} columnsOrRows - An array containing different values representing colum or row properties in a css grid layout.
   * @throws {(Error)} - If any invalid parameters are passed.
   */
  validate (columnsOrRows) {
    if (this.isArray(columnsOrRows)) {
      for (const columnOrRow of columnsOrRows) {
        if (!this.isString(columnOrRow)) {
          throw new TypeError('Row and column values must be a string')
        } else if (!this.hasCorrectSuffix(columnOrRow) && !this.isSizingKeyword(columnOrRow)) {
          throw new TypeError('Row and column values must end with a valid CSS measurement (px, fr, %) or a css sizing keyword')
        } else if (!this.isSizingKeyword(columnOrRow) && !this.isPositiveNumber(columnOrRow)) {
          throw new TypeError('Row and column values must be positive numbers followed by a CSS unit prefix')
        }
      }
    } else {
      throw new TypeError('Row and column values must be contained in an Array')
    }
  }

  /**
   * Checks if a CSS value has a correct unit suffix.
   *
   * @param {string} cssValue *
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
   * Takes a string representing a css value and removes the unit suffix if any.
   *
   * @param {string} cssValue *
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
   * @param {string} cssValue *
   * @returns {string} - The CSS unit suffix.
   */
  getUnitSuffix (cssValue) {
    for (const unit of Object.values(Measurements)) {
      if (cssValue.endsWith(unit)) {
        return unit
      }
    }
  }

  /**
   * Checks if a CSS value has the value of a valid css sizing keyword.
   *
   * @param {string} cssValue *
   * @returns {boolean} - true if column or row is a valid css sizing keyword, otherwie efalse.
   */
  isSizingKeyword (cssValue) {
    if (Object.values(CssSizingKeywords).some(keyword => cssValue.endsWith(keyword))) {
      return true
    } else {
      return false
    }
  }

  /**
   * Checks if a string representing a css value can be converted to a positive number.
   *
   * @param {string} cssValue *
   * @returns {boolean} true if the string can be converted to a valid number, otherwise false.
   */
  isPositiveNumber (cssValue) {
    let isPositiveNumber = true
    const extracedValue = this.removeUnitSuffix(cssValue)
    if ((typeof parseInt((extracedValue)) !== 'number') || isNaN(extracedValue) || parseInt(extracedValue) < 0) {
      isPositiveNumber = false
    }
    return isPositiveNumber
  }

  /**
   * Checks if the given argument is an array.
   *
   * @param {Array} rowsOrColumns *
   * @returns {boolean} - True if argument is an array, otherwise false.
   */
  isArray (rowsOrColumns) {
    return Array.isArray(rowsOrColumns)
  }

  /**
   * Checks if the given argument is a string.
   *
   * @param {string} htmlIdentifier *
   * @returns {boolean} - True if argument is a string, otherwise false.
   */
  isString (htmlIdentifier) {
    return typeof htmlIdentifier === 'string'
  }
}
