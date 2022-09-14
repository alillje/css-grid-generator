import { gridGenerator } from '../../../src/index.js'

document.querySelector('#numberOfRowsButton').addEventListener('click', (event) => {
  event.preventDefault()
  if (document.querySelector('#numberOfRows').value.length > 0) {
    for (let i = 0; i < document.querySelector('#numberOfRows').value; i++) {
      const rowLabel = document.createElement('label')
      const rowInput = document.createElement('input')
      rowLabel.setAttribute('for', `row${i + 1}`)
      rowLabel.textContent = `Row ${i + 1}`
      rowInput.setAttribute('id', `row${i + 1}`)
      rowInput.setAttribute('class', 'row')

      document.querySelector('#numberOfRows').setAttribute('disabled', 'true')
      document.querySelector('#numberOfRowsButton').setAttribute('disabled', 'true')

      document.querySelector('#rowContainer').appendChild(rowLabel)
      document.querySelector('#rowContainer').appendChild(rowInput)
    }
    const rowGapLabel = document.createElement('label')
    const rowGap = document.createElement('input')
    rowGapLabel.setAttribute('for', 'rowGap')
    rowGapLabel.textContent = 'Row gap'
    rowGap.setAttribute('id', 'rowGap')
    document.querySelector('#rowContainer').appendChild(rowGapLabel)
    document.querySelector('#rowContainer').appendChild(rowGap)
  } else {
    throw new Error('Number of rows is mandatory')
  }
  if (document.querySelector('#numberOfRows').getAttribute('disabled') === 'true' && document.querySelector('#numberOfColumns').getAttribute('disabled') === 'true') {
    document.querySelector('#setGridButton').classList.remove('hidden')
  }
})

document.querySelector('#numberOfColumnsButton').addEventListener('click', (event) => {
  event.preventDefault()
  if (document.querySelector('#numberOfColumns').value.length > 0) {
    for (let i = 0; i < document.querySelector('#numberOfColumns').value; i++) {
      const columnLabel = document.createElement('label')
      const columnInput = document.createElement('input')
      columnLabel.setAttribute('for', `column${i + 1}`)
      columnLabel.textContent = `Column ${i + 1}`
      columnInput.setAttribute('id', `column${i + 1}`)
      columnInput.setAttribute('class', 'column')

      document.querySelector('#numberOfColumns').setAttribute('disabled', 'true')
      document.querySelector('#numberOfColumnsButton').setAttribute('disabled', 'true')

      document.querySelector('#columnContainer').appendChild(columnLabel)
      document.querySelector('#columnContainer').appendChild(columnInput)
    }
    const colGapLabel = document.createElement('label')
    const colGap = document.createElement('input')
    colGapLabel.setAttribute('for', 'rowGap')
    colGapLabel.textContent = 'Column gap'
    colGap.setAttribute('id', 'columnGap')
    document.querySelector('#columnContainer').appendChild(colGapLabel)
    document.querySelector('#columnContainer').appendChild(colGap)
  } else {
    throw new Error('Number of columns is mandatory')
  }
  if (document.querySelector('#numberOfRows').getAttribute('disabled') === 'true' && document.querySelector('#numberOfColumns').getAttribute('disabled') === 'true') {
    document.querySelector('#setGridButton').classList.remove('hidden')
  }
})

document.querySelector('#setGridButton').addEventListener('click', (event) => {
  event.preventDefault()
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
    columns,
    rowGap,
    columnGap
  }

  gridGenerator.setGrid(grid, '#gridContainer')
  document.querySelector('#parentCss').textContent += `.parentElement ${gridGenerator.getGridCss(grid)}`
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
      gridGenerator.setPostition({ startRow: i + 1, startColumn: j + 1 }, `#div${i + 1}`)
      console.log(gridGenerator.getPositionCss({ startRow: i + 1, startColumn: j + 1 }))
      document.querySelector('#childrenCss').textContent += `div${divNumber} ${gridGenerator.getPositionCss({ startRow: i + 1, startColumn: j + 1 })}\n`
      divNumber++
    }
  }
})
