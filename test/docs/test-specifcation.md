# Test Specification

## *Requirements*
Requirements are defined in `./test/docs.requriements.md`

## *Automatic Unit tests*
Automatic unit tests are defined in `./test/index.test.js`

The automatic unit test, tests the following requriements: <br>
- 1 <br>
- 4 <br>
- 5 <br>
- 6 <br>
- 7 <br>
- 8 <br>

## *Manual tests*

Manual testing will be performed using the test application, located in the tests-folder. <br>
 ### *Prerequisites*
- Open the browsers web inspector and view elements, this should look something like this: <br>
<br>
<img src="./img/web-inspector-example.png" width="400px"><br>

*Note: The requriement tested is presented along with each test case.*

### TC1 Setting a grid with a gap
- (Requrements 2, 3)

#### TC1.1 
#### *Input*
1. Start the test application by opening ./tests/test-app/index.html in a web browser. 
2. Fill in input fiels as follows:<br>
<img src="./img/test-1.png" width="450px"><br>

3. Press `Set grid layout` button

#### *Output*
- Open browser inspector and inspect the elements.
- Find the `div`-element with the `gridContainer`-id
- The style properties of the element should be set to following: <br>
<img src="./img/test-2.png" width="500px"><br>
- The grid layout should be displayed in the box in the main window of the application as follows:<br>
<img src="./img/test-3.png" width="300px">
- The CSS code of the parent element should be displayed in the top-left corner of the application
- The CSS code of the parent element should be displayed in the top-right corner of the application

#### TC1.2
#### *Input*
1. Start the test application by opening ./tests/test-app/index.html in a web browser. 
2. Fill in input fiels as follows:<br>
<img src="./img/test-4.png" width="450px"><br>

#### *Output*
- Open browser inspector and inspect the elements.
- Find the `div`-element with the `gridContainer`-id
- The style properties of the element should be set to following: <br>
<img src="./img/test-5.png" width="450px"><br>
- The grid layout should be displayed in the main window<br>
- The CSS code of the parent element should be displayed in the top-left corner of the application
- The CSS code of the parent element should be displayed in the top-right corner of the application

#### TC1.3
#### *Input*
1. Start the test application by opening ./tests/test-app/index.html in a web browser. 
2. Fill in input fiels as follows:<br>
<img src="./img/test-6.png" width="450px"><br>

#### *Output*
- Open browser inspector and inspect the elements.
- Find the `div`-element with the `gridContainer`-id
- The style properties of the element should be set to following: <br>
<img src="./img/test-7.png" width="450px"><br>
- The grid layout should be displayed in the main window<br>
- The CSS code of the parent element should be displayed in the top-left corner of the application
- The CSS code of the parent element should be displayed in the top-right corner of the application

#### TC1.4
#### *Input*
1. Start the test application by opening ./tests/test-app/index.html in a web browser. 
2. Fill in input fiels as follows:<br>
<img src="./img/test-8.png" width="450px"><br>

#### *Output*
- Open browser inspector and inspect the elements.
- Find the `div`-element with the `gridContainer`-id
- The style properties of the element should be set to following: <br>
<img src="./img/test-9.png" width="450px"><br>
- The grid layout should be displayed in the main window<br>
- The CSS code of the parent element should be displayed in the top-left corner of the application
- The CSS code of the parent element should be displayed in the top-right corner of the application


#### TC1.5
#### *Input*
1. Start the test application by opening ./tests/test-app/index.html in a web browser. 
2. Fill in input fiels as follows:<br>
<img src="./img/test-10.png" width="450px"><br>

#### *Output*
- Open browser inspector and inspect the elements.
- Find the `div`-element with the `gridContainer`-id
- The style properties of the element should be set to following: <br>
<img src="./img/test-11.png" width="450px"><br>
- The grid layout should be displayed in the main window<br>
- The CSS code of the parent element should be displayed in the top-left corner of the application
- The CSS code of the parent element should be displayed in the top-right corner of the application

### TC2 Setting a grid with zero gap
#### TC2.1
1. Start the test application by opening ./tests/test-app/index.html in a web browser. 
2. Fill in input fiels as follows:<br>
<img src="./img/test-12.png" width="450px"><br>

#### *Output*
- Open browser inspector and inspect the elements.
- Find the `div`-element with the `gridContainer`-id
- The style properties of the element should be set to following: <br>
<img src="./img/test-13.png" width="450px"><br>
- The grid layout should be displayed in the main window<br>
- The CSS code of the parent element should be displayed in the top-left corner of the application
- The CSS code of the parent element should be displayed in the top-right corner of the application


#### TC2.2
#### *Input*
1. Start the test application by opening ./tests/test-app/index.html in a web browser. 
2. Fill in input fiels as follows:<br>
<img src="./img/test-14.png" width="450px"><br>

#### *Output*
- Open browser inspector and inspect the elements.
- Find the `div`-element with the `gridContainer`-id
- The style properties of the element should be set to following: <br>
<img src="./img/test-15.png" width="450px"><br>
- The grid layout should be displayed in the main window<br>
- The CSS code of the parent element should be displayed in the top-left corner of the application
- The CSS code of the parent element should be displayed in the top-right corner of the application

### TC3 Setting a grid with invalid input
- (Requirements 8)
#### TC3.1 
* *Input*
1. Start the test application by opening ./tests/test-app/index.html in a web browser. 
2. Fill in input fiels as follows:<br>
<img src="./img/test-16.png" width="450px"><br>

3. Press `Set grid layout` button

#### *Output*
- Open browser inspector and inspect the elements.
- Find the `div`-element with the `gridContainer`-id
- Grid should not have been set on the element, as follows: <br>
<img src="./img/test-17.png" width="100px"><br>
- In the web inspector, open the console<br>
<img src="./img/console-example.png" width="300px"><br>
- The following error message should be displayed in the console<br>
<img src="./img/test-18.png" width="400px">

#### TC3.2
* *Input*
1. Start the test application by opening ./tests/test-app/index.html in a web browser. 
2. Fill in input fiels as follows (leave all empty):<br>
<img src="./img/test-19.png" width="450px"><br>

3. Press `Set grid layout` button

#### *Output*
- Open browser inspector and inspect the elements.
- Find the `div`-element with the `gridContainer`-id
- Grid should not have been set on the element, as follows: <br>
<img src="./img/test-17.png" width="100px"><br>
- In the web inspector, open the console<br>
<img src="./img/console-example.png" width="300px"><br>
- The following error message should be displayed in the console<br>
<img src="./img/test-21.png" width="400px">

#### TC3.3
* *Input*
1. Start the test application by opening ./tests/test-app/index.html in a web browser. 
2. Fill in input fiels as follows (leave all empty):<br>
<img src="./img/test-22.png" width="450px"><br>

3. Press `Set grid layout` button

#### *Output*
- Open browser inspector and inspect the elements.
- Find the `div`-element with the `gridContainer`-id
- Grid should not have been set on the element, as follows: <br>
<img src="./img/test-17.png" width="100px"><br>
- In the web inspector, open the console<br>
<img src="./img/console-example.png" width="300px"><br>
- The following error message should be displayed in the console<br>
<img src="./img/test-23.png" width="400px">


