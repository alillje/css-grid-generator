import { gridGenerator } from './app.js'
const grid = {}
// Test
grid.columns = ['1fr', '1fr', '1fr', '1fr']
grid.rows = ['1fr', '1fr', '1fr']
grid.columnGap = '5px'
grid.rowGap = '5px'

console.log(gridGenerator.getCssTemplate(grid))

gridGenerator.setGrid(grid, '.parent')
const div = document.createElement('div')
div.style.backgroundColor = 'red'
div.setAttribute('class', 'children')
document.querySelector('.parent').appendChild(div)
gridGenerator.setPostition({ startRow: 1, startColumn: 2 }, '.children')

// const children = grid.columns.length + grid.rows.length
// for (let i = 0; i < children; i++) {
//   const div = document.createElement('div')
//   div.setAttribute('class', 'children')
//   document.querySelector('.parent').appendChild(div)
// }
