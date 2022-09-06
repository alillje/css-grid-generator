import { gridGenerator } from './app.js'
const grid = {}

grid.columns = ['1fr', '1fr']
grid.rows = ['100%']
grid.columnGap = '20px'
grid.rowGap = '20px'

console.log(gridGenerator.getTemplate(grid))

gridGenerator.setGrid(grid, 'body')

gridGenerator.setGrid({
  columns: ['2fr', '1fr'],
  rows: ['200px', '200px', '200px', '200px'],
  columnGap: '20px',
  rowGap: '20px'
}, 'body')
