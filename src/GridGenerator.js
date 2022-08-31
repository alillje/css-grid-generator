/**
 * Module for class GridGenerator.
 *
 * @author Andreas Lillje
 * version 1.0.0
 */

import { GridValidator } from './GridValidator.js'

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
   * @returns {string|object} - The CSS grid layout template, or if input contains errors, returns an object with the error messages.
   */
  createGrid ({ rows = ['100%'], columns = ['100%'], rowGap = '0px', columnGap = '0px' }) {
    const error = this.#gridValidator.validateInput(rows, columns, rowGap, columnGap)
    if (!error) {
      const grid = `{ 
width: 100%;
height: 100%;
display: grid;
grid-template-rows: ${rows.join(' ')};
grid-template-columns: ${columns.join(' ')};
grid-row-gap: ${rowGap};
grid-column-gap: ${columnGap};
}`
      return grid
    } else {
      return error
    }
  }

  /**
   * Modifies a document in the DOM to reflect the grid layout.
   *
   * @param {object} grid - An object containin all the grid properties in a css grid layout.
   * @param {Array} grid.rows - An array containing different values representing grid-template-row in a css grid layout.
   * @param {Array} grid.columns - An array containing different values representing grid-template-column properties in a css grid layout.
   * @param {string} grid.rowGap - A string representing the grid-row-gap property.
   * @param {string} grid.columnGap - A string representing the grid-column-gap property.
   * @param {string} grid.element - The DOM element to manipulate.
   */
  setGrid ({ rows = ['100%'], columns = ['100%'], rowGap = '0px', columnGap = '0px', element }) {
    document.querySelector(element).style.width = '100%'
    document.querySelector(element).style.height = '100%'
    document.querySelector(element).style.display = 'grid'
    document.querySelector(element).style.gridTemplateRows = `${rows.join(' ')}`
    document.querySelector(element).style.gridTemplateColumns = `${columns.join(' ')}`
    document.querySelector(element).style.gridRowGap = `${rowGap}`
    document.querySelector(element).style.gridColumnGap = `${columnGap}`
  }
}
