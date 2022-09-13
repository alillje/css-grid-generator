# Requirements

## Functional requriements
1. The library must be able to generate a string, representing CSS code for a grid layout, based on input.

2.  The library must set the CSS grid layout of a given HTML element.  

3. The library must set grid positions of a child element in a grid layout. 

4. Grid rows, must be passed in as an array of strings. 

5. Grid columns, must be passed in as an array of strings. 

6. Grid row gaps must be passed in as a string. 

7. Grid columns must be passed in as a string.

8. All grid rows, column and gap values must be in the form of an integer followed by a valid CSS unit measurement( example: `200px`, `1fr` or `100%`. )


## Non-functional requriements
1. The library should be used to simplify dynamic setting of CSS grid layouts and positioning of elements within a grid layout. 

2. The library should be written without any dependencies to other external libraries. 

3. Valid CSS units for the library must be stated in the documentation.
