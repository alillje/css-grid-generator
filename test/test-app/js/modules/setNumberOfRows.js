/**
 * Sets the number of rows based on user input.
 */
export function setNumberOfRows () {
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
}
