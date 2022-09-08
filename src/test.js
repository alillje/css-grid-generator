import { gridGenerator } from './index.js'
const grid = {}
// Test
grid.columns = ['1fr', '1fr', '1fr', '1fr', '1fr', '1fr', '1fr', '1fr', '1fr']
grid.rows = ['20px', '1fr', '1fr', '1fr']
grid.columnGap = '5.9px'
grid.rowGap = '5px'

console.log(gridGenerator.getCssTemplate(grid))

gridGenerator.setGrid(grid, '.parent')
const div = document.createElement('div')
div.style.backgroundColor = 'red'
div.setAttribute('class', 'children')
document.querySelector('.parent').appendChild(div)
const positions = { startRow: 1, startColumn: 1, endColumn: 1 }
gridGenerator.setPostition(positions, '.children')
// setInterval(() => {
//   if (positions.endColumn <= grid.columns.length) {
//     positions.endColumn += 1
//   } else {
//     positions.endColumn = 0
//   }
//   gridGenerator.setPostition(positions, '.children')

// }, 300)
