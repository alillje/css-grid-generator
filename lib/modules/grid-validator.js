/**
 * Module for class GridValidator.
 *
 * @author Andreas Lillje
 * version 1.0.7
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
   * Validates all input values for a CSS grid layout.
   *
   * @param {object} gridParams - An object containin all the grid properties in a css grid layout.
   */
  validateAllParams (gridParams) {
    this.#rowColumnValidator.validate(gridParams.rows)
    this.#rowColumnValidator.validate(gridParams.columns)
    this.#gapValidator.validate(gridParams.rowGap)
    this.#gapValidator.validate(gridParams.columnGap)
  }

  /**
   * Validates input for positioning for a HTML element. Checks if input is a number, otherwise, it redfines value to undefined.
   *
   * @param {object} positions - An object containin all the position properties in a css grid.
   * @returns {object} - Object containing CSS position values.
   * @throws {(Error)} - If positions object contains no start or end values.
   */
  validatePositions (positions) {
    const positionsCopy = Object.assign({}, positions)
    for (const [key, value] of Object.entries(positionsCopy)) {
      if (!this.#isValidInputNumber(value)) {
        positionsCopy[key] = undefined
      }
    }
    this.#startRowAndColumnValueExist(positionsCopy)
    return positionsCopy
  }

  /**
   * Validates if a position value is of correct type.
   *
   * @param {number} position - Represents a position value in a CSS grid layout..
   * @returns {boolean} - True if the position value is a valid number, else false.
   */
  #isValidInputNumber (position) {
    return (!isNaN(position)) && (typeof position === 'number')
  }

  /**
   * Checks a position object if it has mandatory start and end values.
   *
   * @param {object} positions - An object containin all the position properties in a css grid.
   */
  #startRowAndColumnValueExist (positions) {
    if (!positions.startRow || !positions.startColumn) {
      throw new Error('Start values for row and column is mandatory')
    }
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
