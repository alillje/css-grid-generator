
/**
 * Validates input values for a css grid layout.
 */
export class RowColumnValidator {
  /**
   * Validates the input value represening a gap property in a CSS grid layout.
   *
   * @param {Array} columnsOrRows - An array containing different values representing colum or row properties in a css grid layout.
   * @returns {(Array|undefined)} An array containing the error messages corresponding to the errors, otherwise undefined.
   */
  validateColumnOrRowInput (columnsOrRows) {
    const error = []
    for (const columnOrRow of columnsOrRows) {
      if (typeof columnOrRow !== 'string') {
        error.push('Input must be a string')
      } else if (columnOrRow.slice(-2) !== 'px' && columnOrRow.slice(-1) !== '%') {
        error.push('Input must end with px or %')
      }
    }
    if (error.length > 0) {
      return error
    } else {
      return undefined
    }
  }
}
