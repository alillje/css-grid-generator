/**
 * Module for class GridValidator.
 *
 * @author Andreas Lillje
 * version 1.0.5
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

  /**
   * Validates input for positioning for a HTML element. Checks if input is a number, otherwise, it redfines value to undefined.
   *
   * @param {object} positions - An object containin all the position properties in a css grid.
   * @returns {object} - Object containing CSS position values.
   * @throws {(Error)} - If positions object contains no start or end values.
   */
  validatePositions (positions) {
    const newPositions = Object.assign({}, positions)
    for (const [key, value] of Object.entries(newPositions)) {
      if (isNaN(value) || !value || typeof value === 'boolean') {
        newPositions[key] = undefined
      }
    }
    if (!newPositions.startRow || !newPositions.startColumn) {
      throw new Error('Start values for row and column is mandatory')
    }
    return newPositions
  }

  /**
   * Validates if an html element is passed as a string.
   *
   * @param {string} htmlElement - A sring represening a HTML DOM Element.
   * @returns {boolean} true if all passed arguments are valid, otherwise false.
   * @throws {(Error)} - If argument is not a string.
   */
  isString (htmlElement) {
    if (!this.#gapValidator.isString(htmlElement)) {
      throw new Error('HTML element identifier must be a string')
    } else {
      return true
    }
  }
}
