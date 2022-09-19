# Gridlify

Gridlify is a zero-dependency tool to dynamically build a grid css layout, as well as dynamically positioning elements in to grid layouts with an easy-to-use API.

## How to install

`npm install gridlify`


## How to use 

**Import with ES6 modules:**<br>
`import { gridlify } from '/node_modules/gridlify/lib/index.js'`
<br>
<br>
**Set grid layout for html element:**<br>
`const myGrid = {`<br>
    `rows: ['200px', '500px', '500px', '200px'],`<br>
    `columns: ['1fr', '1fr', '1fr'],`<br>
    `rowGap: '5px', `<br>
    `columnGap: '5px'`<br>
`}`<br><br>
`gridlify.setGrid(myGrid, 'body')`
<br>
<br>
**Position a html element in the grid:**<br>
`const myPositions = {`<br>
    `startRow: 2, `<br>
    `endRow: 3, `<br>
    `startColumn: 1,`<br>
    `endColumn: 3` <br>
`}`
<br><br>
`gridlify.setPosition(myPositions, '#childElement')`
<br>
<br>
**You can also change rows, columns and gap properties individually:**<br>
`gridlify.setRows(['20%', '20%', '60%'], '.parentElement')`
<br>
<br>
`gridlify.setColumns(['200px', 'min-content', 'auto'], '.parentElement')`
<br>
<br>
`gridlify.setRowGap('20px', '.parentElement')`
<br>
<br>
`gridlify.setColumnGap('10px', '.parentElement')`
<br>
<br>
**To get the CSS code for the layout, simply:**<br>
`const gridTemplate = gridlify.getGridCss(myGrid)`
<br>
`console.log(gridTemplate)`<br><br>
*Output*<br>
`{` <br>
  `display: grid;`<br>
   `grid-template-rows: 200px 500px 500px 200px;`<br>
   `grid-template-columns: 1fr 1fr 1fr;`<br>
   `grid-row-gap: 5px;`<br>
   `grid-column-gap: 5px;`<br>
`}`<br>
<br>

`const positionTemplate = gridlify.getPositionCss(myPositions)`
<br>
`console.log(positionTemplate)`<br>
<br>
*Output*<br>
`{ grid-area: 2 / 1 / 3 / 3; }`
<br>
<br>
Note that `gridlify` uses the doucment.querySelector()-API to select elements in the DOM.

- To manipulate elements by `class`, use the `.`-identifier. 

- To manipulate elements by `id`, use the `#`-identifier. 

## CSS Measurements
Currently, the following CSS measurements are possible to use with `gridlify`
*  px
*  fr
*  %

When setting row and column values, it is also possible to use specific sizing-keywords:

* auto
* min-content



## Contributing
- Fork the project on Github.
- Run `npm install` to install dev dependencies.
- Implement/fix your feature, comment your code.
Follow the code style of the project, including indentation.
- Implement tests for new feature.
- Run tests.
- Create a pull request.