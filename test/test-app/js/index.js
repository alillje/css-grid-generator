import { gridGenerator } from '../../../src/index.js'
import { Measurements } from '../../../src/css-measurments.js'

// Set unit options for rows
for (const unit of Object.values(Measurements)) {
  const option = document.createElement('option')
  option.setAttribute('value', unit)
  option.textContent = unit
  document.querySelector('#rowUnit').appendChild(option)
}

// Set unit options for columns
for (const unit of Object.values(Measurements)) {
  const option = document.createElement('option')
  option.setAttribute('value', unit)
  option.textContent = unit
  document.querySelector('#columnUnit').appendChild(option)
}
// Set unit options for row gaps
for (const unit of Object.values(Measurements)) {
  const option = document.createElement('option')
  option.setAttribute('value', unit)
  option.textContent = unit
  document.querySelector('#rowGapUnit').appendChild(option)
}
// Set unit options for column gaps
for (const unit of Object.values(Measurements)) {
  const option = document.createElement('option')
  option.setAttribute('value', unit)
  option.textContent = unit
  document.querySelector('#columnGapUnit').appendChild(option)
}

// Eventlistener for button to set grid from entered values
document.querySelector('#setGridButton').addEventListener('click', (event) => {
  event.preventDefault()
  document.querySelector('#messageBox').textContent = ''
  const rows = []
  const columns = []
  // Set row and column gap
  const rowGap = `${document.querySelector('#rowGap').value}${document.querySelector('#rowGapUnit').value}`
  const columnGap = `${document.querySelector('#columnGap').value}${document.querySelector('#columnGapUnit').value}`

  // Set rows
  for (let i = 0; i < document.querySelector('#numberOfRows').value; i++) {
    rows.push(`${document.querySelector('#heightOfRows').value}${document.querySelector('#rowUnit').value}`)
  }

  // Set columns
  for (let i = 0; i < document.querySelector('#numberOfColumns').value; i++) {
    columns.push(`${document.querySelector('#widthOfColumns').value}${document.querySelector('#columnUnit').value}`)
  }
  if (rows.length > 0 && columns.length > 0 & rowGap.length > 0 & columnGap.length > 0) {
    document.querySelector('.container').innerHTML = ''

    document.querySelector('#messageBox').classList.add('hidden')
    // Set Grid for '.container'
    gridGenerator.setGrid({ rows, columns, rowGap, columnGap }, '.container')

    // Add elements to parent to illustrate grid layout
    for (let i = 0; i < columns.length * rows.length; i++) {
      const child = document.createElement('div')
      child.style.backgroundColor = '#39173b97'
      document.querySelector('.container').appendChild(child)
    }
  } else {
    document.querySelector('#messageBox').classList.remove('hidden')
    document.querySelector('#messageBox').textContent = 'All input parameters are required'
  }
})

// const test = document.createElement('div')
// test.setAttribute('class', 'testdiv')
// document.querySelector('.parent').appendChild(test)
// gridGenerator.setPostition({ startRow: 1, endRow: 2, startColumn: 3 }, '.testdiv')
// const positionCss = gridGenerator.getPositionCss({ startRow: 1, endRow: 2, startColumn: 3 })
// console.log(positionCss)

// // Sets the grid layou of <body>
// gridGenerator.setGrid({ rows: ['100px', '100px', '100px', '100px'], columns: ['100px', '100px', '100px'], rowGap: '5px', columnGap: '5px' }, 'body')

// // Sets the postion in the grid layou for element with id=myDiv
// gridGenerator.setPostition({ startRow: 1, endRow: 2, startColumn: 1, endColumn: 4 }, '#myDiv')

// // Returns string representing the CSS code for grid layout
console.log(gridGenerator.getGridCss({ rows: ['100px', '100px', '100px', '100px'], columns: ['100px', '100px', '100px'], rowGap: '5px', columnGap: '5px' }))

// // Returns string representing the CSS code for the grid positioning
// gridGenerator.getPositionCss({ startRow: 1, endRow: 2, startColumn: 1, endColumn: 4 })
// console.log(gridGenerator.getPositionCss({ startRow: 1, endRow: 2, startColumn: 1, endColumn: 4 }))
