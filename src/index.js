function createGrid ( {rows, columns, columnGap, rowGap} ) {
    let grid = `
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: ${rows ? rows.join(' ') : '100%'};
    grid-template-columns: ${columns ? columns.join(' ') : '100%'};
    grid-column-gap: ${columnGap ? columnGap : '0px'}
    grid-column-gap: ${rowGap ? rowGap : '0px'}`
    return grid

}

let grid = {
    rows: undefined,
    columns: undefined,
    columnGap: undefined,
    rowGap: undefined
}
let gridColumns = ['200px', '200px', '200px', '200px']
grid.columns = gridColumns
grid.columnGap = '20px'

console.log(createGrid(grid))