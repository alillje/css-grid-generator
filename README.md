# Gridlify

Gridlify is a zero-dependency tool to dynamically build a grid css layout, as well as dynamically positioning elements in to grid layouts with an easy-to-use API.
<br>
Gridlify is available as an npm package. 
<br>
Visit the [npm](https://docs.npmjs.com/about-npm) documention for more information about getting started with `npm`.

## How to install

`npm install gridlify`

## API

`gridlify` has the following methods available in it's public interface

`getGridCss( {rows, columns, rowGap, columnGap} )` 
* **Generates CSS code for a grid layout based on input values.**
* **Takes an object as an argument. The object must contain the following information:**
- rows - An array of the row values the grid should contain.
- columns - An array of the column values the grid should contain.
- rowGap: A string, representing the gap between the rows in the grid.
- columnGap: A string, representing the gap between the columns in the grid.

`getPositionCss ({ startRow, endRow, startColumn, endColumn }`
* **Generates CSS code for an elements position *inside* a grid layout layout based on input values.**
* **Takes an object as an argument. The object must contain the following information:**
- startRow - A number representing the starting row coordinate in the grid layout.
- endRow - A number representing the ending row coordinate in the grid layout.
- startColumn - A number representing the starting column coordinate in the grid layout.
- endColumn - A number representing the ending column coordinate in the grid layout.

`setGrid ({ rows, columns, rowGap, columnGap }, htmlIdentifier)`
* **Sets the grid layout properties for an HTML element in the DOM.**
* **Takes an object as its first argument. The object must contain the following information:**
- rows - An array of the row values the grid should contain.
- columns - An array of the column values the grid should contain.
- rowGap: A string, representing the gap between the rows in the grid.
- columnGap: A string, representing the gap between the columns in the grid.
* **Takes a htmlIdentifier as its second argument.**
* **The HTML identifier is a string that represents an html element in the DOM.** 
- As an example, the `<body>`-element, becomes `'body'`.

`setPosition ({ startRow, endRow, startColumn, endColumn }, htmlIdentifier)`
* **Positions an html element *inside* the grid layout based on input values.**
* **Takes an object as an argument. The object must contain the following information:**
- startRow - A number representing the starting row coordinate in the grid layout.
- endRow - A number representing the ending row coordinate in the grid layout.
- startColumn - A number representing the starting column coordinate in the grid layout.
- endColumn - A number representing the ending column coordinate in the grid layout.
* **Takes a htmlIdentifier as its second argument.**
* **The HTML identifier is a string that represents an html element in the DOM.** 
- As an example, this `<div id="myDiv"></div>` element, becomes `'#myDiv'`.

`setRows (rows, htmlIdentifier)`
* **Sets the rows *only* for an HTML element that has a grid layout.**
* **Takes an array of string as its first argument. The array of strings represents the rows to be set for the grid layout.**
* **The HTML identifier is a string that represents an html element in the DOM.** 

`setColumns (rows, htmlIdentifier)`
* **Sets the columns *only* for an HTML element that has a grid layout.**
* **Takes an array of string as its first argument. The arraysof strings represents the columns to be set for the grid layout.**
* **The HTML identifier is a string that represents an html element in the DOM.** 

`setRowGap (gap, htmlIdentifier)`
* **Sets the row gap *only* for an HTML element that has a grid layout.**
* **Takes an  string as its first argument. The string represents the gap between the rows in the grid.**

`setColumnap (gap, htmlIdentifier)`
* **Sets the row gap *only* for an HTML element that has a grid layout.**
* **Takes an  string as its first argument. The string represents the gap between the columns in the grid.**

## How to use 

**Import with ES6 modules**<br>
`import { gridlify } from '/node_modules/gridlify/lib/index.js'`
<br>
<br>
**Set grid layout for html element**<br>
`const myGrid = {`<br>
    `rows: ['200px', '500px', '500px', '200px'],`<br>
    `columns: ['1fr', '1fr', '1fr'],`<br>
    `rowGap: '5px', `<br>
    `columnGap: '5px'`<br>
`}`<br><br>
`gridlify.setGrid(myGrid, 'body')`
<br>
<br>
**Position a html element in the grid**<br>
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
**You can also change rows, columns and gap properties individually**<br>
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
**To get the CSS code for the layout, simply**<br>
`const gridTemplate = gridlify.getGridCss(myGrid)`
<br>
`console.log(gridTemplate)`<br><br>
*Generates the following CSS Code*<br>
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
*Generates the following CSS Code*<br>
`{ grid-area: 2 / 1 / 3 / 3; }`
<br>
<br>
Note that `gridlify` uses the [document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)-API to select elements in the DOM.

- To manipulate elements by `class`, use the `.`-identifier. 

- To manipulate elements by `id`, use the `#`-identifier. 

## CSS Measurements
As demonstrated in **How to use**, all input must be a string containing a non-negative number, followed by a valid CSS measurement.

Currently, the following CSS measurements are possible to use with `gridlify`
*  px
*  fr
*  %

When setting row and column values, it is also possible to use specific sizing-keywords:

* auto
* min-content

## Resources

For more information about grid layouts, visit [W3Schools](https://www.w3schools.com/css/css_grid.asp) 

For more information about NPM and getting started with npm packages, visit[npm](https://docs.npmjs.com/about-npm).


## Contributing
- Fork the project on Github.
- Run `npm install` to install dev dependencies.
- Implement/fix your feature, comment your code.
Follow the code style of the project, including indentation.
- Implement tests for new feature.
- Run tests.
- Create a pull request.