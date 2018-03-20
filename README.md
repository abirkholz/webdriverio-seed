# webdriverio-seed
A boilerplate WebDriverIO project that supports web and mobile app test automation out-of-the-box. The framework implements a keyword-driven page object pattern, which makes adding page objects as simple as placing two strings in a JSON file and filling in a Cucumber step.

## Tech Stack 
* Javascript (ES6)
* NodeJS
* WebDriverIO
* CucumberJS

## Getting Started
Add the following tools to your environment:

* NVM - The project is built on NodeJS v6, so nvm is recommended. You could also install NodeJS v6 standalone (not recommended).
* Chrome Dev Tools (optional) - Necessary to inspect elements elements for UI selectors.

Once your tools are configured, download the project and navigate to the root directory. 

* Run: `nvm use`
* If you get an error saying the version specified in .nvmrc isn't installed, run: `nvm install <version>`
* Run: `npm install`
* If everything built successfully, you're ready to run tests.

## Running Tests
* `npm test`
* `npm test:chrome:local`