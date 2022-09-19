import { setNumberOfRows } from './modules/setNumberOfRows.js'
import { setNumberOfColumns } from './modules/setNumberOfColumns.js'
import { setGridLayout } from './modules/setGridLayout.js'

// Add event listeners for buttons
document.querySelector('#numberOfRowsButton').addEventListener('click', (event) => {
  event.preventDefault()
  setNumberOfRows()
})
document.querySelector('#numberOfColumnsButton').addEventListener('click', (event) => {
  event.preventDefault()
  setNumberOfColumns()
})
document.querySelector('#setGridButton').addEventListener('click', (event) => {
  event.preventDefault()
  setGridLayout()
})
