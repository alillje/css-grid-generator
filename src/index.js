/**
 *
 * @param root0
 * @param root0.rows
 * @param root0.columns
 * @param root0.columnGap
 * @param root0.rowGap
 */
function createGrid ({ rows = '100%', columns = '100%', columnGap = '0px', rowGap = '0px' }) {
  const error = validateInput(rows, columns, columnGap, rowGap)
  if (!error) {
    const grid = `
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: ${rows.join(' ')};
    grid-template-columns: ${columns.join(' ')};
    grid-column-gap: ${columnGap}
    grid-column-gap: ${rowGap}`
    return grid
  } else {
    return error
  }
}

/**
 *
 * @param rows
 * @param columns
 */
function validateInput (rows, columns, columnGap, rowGap) {
  let valid = true
  const errors = {
    columnErrors: validateColumnOrRowInput(columns),
    rowErrors: validateColumnOrRowInput(rows),
    columnGap: validateGaps(columnGap),
    rowGap: validateGaps(rowGap)

  }

  for (const value of Object.values(errors)) {
    if (value) {
      valid = false
    }
  }

  return !valid ? errors : undefined
}

/**
 *
 * @param root0
 * @param root0.rows
 * @param root0.columns
 * @param root0.columnGap
 * @param root0.rowGap
 * @param columnsOrRows
 */
function validateColumnOrRowInput (columnsOrRows) {
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

/**
 *
 */
function validateGaps (gap) {
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
const grid = {
  rows: undefined,
  columns: undefined,
  columnGap: undefined,
  rowGap: undefined
}
const gridColumns = ['200px', '200px', '200px']
const gridRows = ['200px', '200px', '200px']

grid.columns = gridColumns
grid.rows = gridRows
grid.columnGap = '20px'

console.log(createGrid(grid))
