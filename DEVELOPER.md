# For developers

## Contributing
To contribute, please follow the following steps.

- Fork the project on Github.
- Run `npm install` to install dev dependencies.
- Implement/fix your feature, comment your code.
Follow the code style of the project, including indentation.
- Implement tests for new feature.
- Run tests.
- Create a pull request.

## Testing
To test the library, the test framework [Jest](https://jestjs.io/), is used.

The tests are located in `./test`-folder.
Automatic unit tests are separated into 4 files, each of which testing a class of it's own.

There is also a separate test-application located in `./test/test-app`

When developing new features, make sure to write tests for all methods that are implemented.
Depending on the feature, please consider weather a manual test case or an automatic unit test is more suitable.

To run the test, run the following command:

`npm test`

## Code standard

The library uses [ESLint](https://eslint.org/) to format the code.
<br>
It uses the [@lnu/sesling-config](https://www.npmjs.com/package/@lnu/eslint-config) configuration to follow a standard. 

To address lint issues, run the following command:
<br>

`npm run lint`

To fix lint issues, run the following command:
<br>

`npm run lint:fix`
