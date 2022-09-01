import { GridGenerator } from './GridGenerator.js'
const grid = {}

grid.columns = ['1fr', '1fr']
grid.rows = ['100%']
grid.columnGap = '20px'
grid.rowGap = '20px'

const gridGenerator = new GridGenerator()

console.log(gridGenerator.getTemplate(grid))

// gridGenerator.setGrid(grid, 'body')
