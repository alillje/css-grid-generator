import { GridGenerator } from './GridGenerator.js'
const grid = {}

grid.columns = ['200px', '200px', '200px']
grid.rows = ['200px', '200px', '200px']
grid.columnGap = '20px'

const gridGenerator = new GridGenerator(grid)

console.log(gridGenerator.createGrid(grid))
