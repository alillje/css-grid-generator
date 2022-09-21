import { gridlify } from '../../../../lib/index.js'

/**
 * Sets the layout of the grid based on input, using gridlify.
 */
export function setGridLayout () {
  try {
    document.querySelector('#gridContainer').innerHTML = ''
    document.querySelector('#messageBox').textContent = ''
    document.querySelector('#parentCss').textContent = ''
    document.querySelector('#childrenCss').textContent = ''
    const rows = []
    for (const row of document.querySelectorAll('.row')) {
      rows.push(row.value)
    }
    const columns = []
    for (const column of document.querySelectorAll('.column')) {
      columns.push(column.value)
    }
    // Set row and column gap
    const rowGap = `${document.querySelector('#rowGap').value}`
    const columnGap = `${document.querySelector('#columnGap').value}`

    const grid = {
      rows,
      columns
    }

    gridlify.setGrid(grid, '#gridContainer')
    gridlify.setRowGap(rowGap, '#gridContainer')
    gridlify.setColumnGap(columnGap, '#gridContainer')
    grid.rowGap = rowGap
    grid.columnGap = columnGap
    document.querySelector('#parentCss').textContent += `.parentElement ${gridlify.getGridCss(grid)}`
    // Add elements to parent to illustrate grid layout
    for (let i = 0; i < columns.length * rows.length; i++) {
      const child = document.createElement('div')
      child.style.backgroundColor = 'white'
      child.setAttribute('class', 'opacity')
      child.setAttribute('id', `div${i + 1}`)
      document.querySelector('#gridContainer').appendChild(child)
    }
    // Add elements and position inside grid with setPosition()
    // And display grid templates for each element
    let divNumber = 1
    for (let i = 0; i < rows.length; i++) {
      for (let j = 0; j < columns.length; j++) {
        gridlify.setPosition({ startRow: i + 1, startColumn: j + 1 }, `#div${i + 1}`)
        document.querySelector('#childrenCss').textContent += `div${divNumber} ${gridlify.getPositionCss({ startRow: i + 1, startColumn: j + 1 })}\n`
        divNumber++
      }
    }
  } catch (e) {
    console.log(e)
  }
}
