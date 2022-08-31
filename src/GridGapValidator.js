
/**
 * Validates input values for a css grid layout.
 */
export class GridGapValidator {
  /**
   * Validates the input value represening a gap property in a CSS grid layout.
   *
   * @param {string} gap - A string representing the gap property.
   * @returns {(string|undefined)} The error message corresponding to the error, otherwise undefined.
   */
  validateGaps (gap) {
    let error = ''
    if (typeof gap !== 'string') {
      error = 'Input must be a string'
    } else if (gap.slice(-2) !== 'px' && gap.slice(-1) !== '%') {
      error = 'Input must end with px or %'
    }
    if (error.length > 0) {
      return error
    } else {
      return undefined
    }
  }
}
