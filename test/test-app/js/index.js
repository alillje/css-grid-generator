import { gridGenerator } from '../../../src/index.js'
import { Measurements } from '../../../src/css-measurments.js'
const grid = {
  rows: ['1fr', '1fr', '1fr', '1fr', '1fr'],
  columns: ['1fr', '1fr'],
  rowGap: '20px',
  columnGap: '20px'
}
console.log(gridGenerator.getCssTemplate(grid))
// document.querySelector('#addRowButton').addEventListener('click', (event) => {
//     event.preventDefault()
//     const input = document.createElement('input')
//     input.setAttribute('type', 'text')
//     document.querySelector('inputForm').appendChild(input)
// })

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

document.querySelector('#setGridButton').addEventListener('click', (event) => {
  event.preventDefault()
  document.querySelector('.parent').innerHTML = ''
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

  // Set Grid on '.parent'
  gridGenerator.setGrid({ rows, columns, rowGap, columnGap }, '.parent')

  // Add elements to parent to illustrate grid layout
  for (let i = 0; i < columns.length * rows.length; i++) {
    const child = document.createElement('div')
    child.style.backgroundColor = 'red'
    document.querySelector('.parent').appendChild(child)
  }
})
