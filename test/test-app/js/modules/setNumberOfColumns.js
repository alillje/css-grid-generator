/**
 * Sets the number of columns based on user input.
 */
export function setNumberOfColumns () {
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
}
