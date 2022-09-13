/**
 * Module for class GridGenerator.
 *
 * @author Andreas Lillje
 * version 1.1.0
 */

import { GridValidator } from './grid-validator.js'

/**
 * Creates a string representing a CSS grid layout.
 *
 * @class
 */
export class GridGenerator {
  #gridValidator
  /**
   * Creates an instance of GridGenerator.
   */
  constructor () {
    this.#gridValidator = new GridValidator()
  }

  /**
   * Creates a string representation of a CSS grid layout template.
   *
   * @param {object} grid - An object containin all the grid properties in a css grid layout.
   * @param {Array} grid.rows - An array containing different values representing grid-template-row in a css grid layout.
   * @param {Array} grid.columns - An array containing different values representing grid-template-column properties in a css grid layout.
   * @param {string} grid.rowGap - A string representing the grid-row-gap property.
   * @param {string} grid.columnGap - A string representing the grid-column-gap property.
   * @returns {string|null} - The CSS grid layout template, or if input contains errors, return null.
   */
  getGridCss ({ rows = ['100%'], columns = ['100%'], rowGap = '0px', columnGap = '0px' }) {
    try {
      this.#gridValidator.validateParams(rows, columns, rowGap, columnGap)
      const grid = `.element { 
  display: grid;
  grid-template-rows: ${rows.join(' ')};
  grid-template-columns: ${columns.join(' ')};
  grid-row-gap: ${rowGap};
  grid-column-gap: ${columnGap};
  }`
      return grid
    } catch (e) {
      console.error(e)
      return null
    }
  }

  /**
   * Modifies an element in the DOM to set grid positioning.
   * Must contain a value for startRow and startColumn.
   * If no end values exist, they will be set to same as start values.
   *
   * @param {object} positions - An object containin all the position properties in a css grid.
   * @param {number} positions.startRow - A number representig a HTML elements row start position in a css grid layout.
   * @param {number} positions.endRow - A number representig a HTML elements column end position in a css grid layout.
   * @param {number} positions.startColumn - A number representig a HTML elements columns start position in a css grid layout.
   * @param {number} positions.endColumn - A number representig a HTML elements columns end position in a css grid layout.
   * @returns {string|null} - The CSS grid-position template, or if input contains errors, return null.
   */
  getPositionCss ({ startRow, endRow, startColumn, endColumn }) {
    try {
      let positionTemplate = ''
      const positions = {
        startRow,
        startColumn,
        endRow,
        endColumn
      }

      const validatedPositions = this.#gridValidator.validatePositions(positions)
      if (validatedPositions.startRow && validatedPositions.startColumn) {
        positionTemplate = `grid-area: ${parseInt(validatedPositions.startRow)} / ${parseInt(validatedPositions.startColumn)} / ${!validatedPositions.endRow ? parseInt(validatedPositions.startRow) : parseInt(validatedPositions.endRow)} / ${!validatedPositions.endColumn ? parseInt(validatedPositions.startColumn) : parseInt(validatedPositions.endColumn)};`
      }
      return positionTemplate
    } catch (e) {
      console.error(e)
      return null
    }
  }

  /**
   * Modifies an element in the DOM to reflect the grid layout.
   *
   * @param {object} grid - An object containin all the grid properties in a css grid layout.
   * @param {Array} grid.rows - An array containing different values representing grid-template-row in a css grid layout.
   * @param {Array} grid.columns - An array containing different values representing grid-template-column properties in a css grid layout.
   * @param {string} grid.rowGap - A string representing the grid-row-gap property.
   * @param {string} grid.columnGap - A string representing the grid-column-gap property.
   * @param {string} element - The DOM element to manipulate.
   */
  setGrid ({ rows = ['100%'], columns = ['100%'], rowGap = '0px', columnGap = '0px' }, element) {
    // Check if parameters are valid and that a string represeting an HTML element is defined.
    try {
      this.#gridValidator.validateParams(rows, columns, rowGap, columnGap)
      if (element) {
        document.querySelector(element).style.display = 'grid'
        document.querySelector(element).style.gridTemplateRows = `${rows.join(' ')}`
        document.querySelector(element).style.gridTemplateColumns = `${columns.join(' ')}`
        document.querySelector(element).style.gridRowGap = `${rowGap}`
        document.querySelector(element).style.gridColumnGap = `${columnGap}`
      }
    } catch (e) {
      console.error(e)
    }
  }

  /**
   * Modifies an element in the DOM to set grid positioning.
   * Must contain a value for startRow and startColumn.
   * If no end values exist, they will be set to same as start values.
   *
   * @param {object} positions - An object containin all the position properties in a css grid.
   * @param {number} positions.startRow - A number representig a HTML elements row start position in a css grid layout.
   * @param {number} positions.endRow - A number representig a HTML elements column end position in a css grid layout.
   * @param {number} positions.startColumn - A number representig a HTML elements columns start position in a css grid layout.
   * @param {number} positions.endColumn - A number representig a HTML elements columns end position in a css grid layout.
   * @param {string} element - The DOM element to manipulate.
   */
  setPostition ({ startRow, endRow, startColumn, endColumn }, element) {
    try {
      const positions = {
        startRow,
        startColumn,
        endRow,
        endColumn
      }
      const validatedPositions = this.#gridValidator.validatePositions(positions)
      if (validatedPositions.startRow && validatedPositions.startColumn) {
        document.querySelector(element).style.gridRow = `${parseInt(validatedPositions.startRow)} / ${!validatedPositions.endRow ? parseInt(validatedPositions.startRow) : parseInt(validatedPositions.endRow)}`
        document.querySelector(element).style.gridColumn = `${parseInt(validatedPositions.startColumn)} / ${!validatedPositions.endColumn ? parseInt(validatedPositions.startColumn) : parseInt(validatedPositions.endColumn)}`
      }
    } catch (e) {
      console.error(e)
    }
  }
}
