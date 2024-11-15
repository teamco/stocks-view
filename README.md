[![CICD.Build](https://github.com/teamco/stocks-view/actions/workflows/build.yml/badge.svg)](https://github.com/teamco/stocks-view/actions/workflows/build.yml)

# Stocks View

A Vue.js application for viewing and searching stocks.

## Table of Contents

- [Stocks View](#stocks-view)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Project Structure](#project-structure)
  - [Features](#features)
  - [Testing](#testing)
  - [License](#license)

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone https://github.com/teamco/stocks-view.git`
2. Install dependencies: `npm install` or `yarn install`
3. Start the development server: `npm run dev` or `yarn dev`

## Project Structure

The project is structured as follows:

* `src`: The source code for the application
	+ `views`: The main views for the application (e.g. HomeView, StockView)
	+ `components`: Reusable components (e.g. Card, FullCard)
	+ `store`: The simple store for managing state
	+ `api`: API calls for fetching data
	+ [assets]: Mock data and other assets
* `tests`: Unit tests and integration tests for the application
* `public`: Static assets and index.html

## Features

* Search for stocks by name or symbol
* View detailed information about a stock
* Filter stocks by market status

## Testing

The project uses Jest and `@testing-library/vue` for unit testing and integration testing. To run the tests, use the following command:

* `npm run test` or `yarn test`

## License

This project is licensed under the MIT License. See the [LICENSE file](LICENSE) for details.
