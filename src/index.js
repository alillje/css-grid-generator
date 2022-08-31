/**
 *
 * @param root0
 * @param root0.rows
 * @param root0.columns
 * @param root0.columnGap
 * @param root0.rowGap
 */
function createGrid ({ rows, columns, columnGap, rowGap }) {
  const error = validateInput({ rows, columns, columnGap, rowGap })
  if (!error) {
    const grid = `
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: ${rows ? rows.join(' ') : '100%'};
    grid-template-columns: ${columns ? columns.join(' ') : '100%'};
    grid-column-gap: ${columnGap || '0px'}
    grid-column-gap: ${rowGap || '0px'}`
    return grid
  } else {
    return error
  }
}

/**
 *
 * @param root0
 * @param root0.rows
 * @param root0.columns
 * @param root0.columnGap
 * @param root0.rowGap
 */
function validateInput ({ rows, columns, columnGap, rowGap }) {
  const error = {}
  for (const column of columns) {
    if (typeof column !== 'string') {
      error.message = 'Column input must be a string'
      return error
    }
  }
  return undefined
}

const grid = {
  rows: undefined,
  columns: undefined,
  columnGap: undefined,
  rowGap: undefined
}
const gridColumns = ['200px', '200px', '200px', '200px']
grid.columns = gridColumns
grid.columnGap = '20px'

console.log(createGrid(grid))
