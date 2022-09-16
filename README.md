# Gridlify

A simple tool to dynamically build a grid css layout, aswell as dynamically positioning elements in to grid layouts.

## How to install

`npm i gridlify`


## How to use 

**Import with ES6 module:**<br>
<code>import { gridlify } from '/node_modules/gridlify/lib/index.js'
</code>
<br>
<br>
**Set grid layout for html element:**<br>
<code>const myGrid = {
    rows: ['200px', '500px', '500px', '200px'],
    columns: ['1fr', '1fr', '1fr'],
    rowGap: '5px', 
    columnGap: '5px'
}

gridlify.setGrid(myGrid, 'body')
</code>
<br>
<br>
**Position a html element in the grid:**<br>
<code>const myPositions = {
    startRow: 2, 
    endRow: 3, 
    startColumn: 1,
    endColumn: 3 
}

gridlify.setPosition(myGrid, '#childElement')
</code>
<br>
<br>
**You can also change rows, columns and gap properties individually:**<br>
<code>
gridlify.setRows(['20%', '20%', '60%'], '.parentElement')
<br>
<br>
gridlify.setColumns(['200px', 'min-content', 'auto%'], '.parentElement')
<br>
<br>
gridlify.setRowGap('20px', '.parentElement')
<br>
<br>
gridlify.setColumnGap('10px', '.parentElement')
</code>
<br>
<br>
**To get the CSS code for the layout, simply:**<br>
<code>
const gridTemplate = gridlify.getGridCss(myGrid, '#childElement')

console.log(gridTemplate)

// Output<br>
// { <br>
//   display: grid;<br>
//   grid-template-rows: 200px 500px 500px 200px;<br>
//   grid-template-columns: 1fr 1fr 1fr;<br>
//   grid-row-gap: 5px;<br>
//   grid-column-gap: 5px;<br>
// }<br>
</code>
<br>
<code>

const positionTemplate = gridlify.getPositionCss(myPositions, '#childElement')

console.log(positionTemplate)

// Output<br>
// { grid-area: 2 / 1 / 3 / 3; }
</code>
<br>
<br>
Note that `gridlify` uses the doucment.querySelector()-API to select elements in the DOM.

- To manipulate elements by `class`, use the `.`-identifier. 

- To manipulate elements by `id`, use the `#`-identifier. 

## Contributing
- Fork the project on Github.
- Run `npm install` to install dev dependencies.
- Implement/fix your feature, comment your code.
Follow the code style of the project, including indentation.
- Implement tests for new feature.
- Run tests.
- Create a pull request.