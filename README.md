[![CICD.Build](https://github.com/teamco/stocks-view/actions/workflows/build.yml/badge.svg)](https://github.com/teamco/stocks-view/actions/workflows/build.yml)
[![CSpell CI](https://github.com/teamco/stocks-view/actions/workflows/cspell.yml/badge.svg)](https://github.com/teamco/stocks-view/actions/workflows/cspell.yml)
[![Unit Tests](https://github.com/teamco/stocks-view/actions/workflows/unit.yml/badge.svg)](https://github.com/teamco/stocks-view/actions/workflows/unit.yml)

# Stocks View

A Vue.js application for viewing and searching stocks.

### Stocks list
<img width="600" alt="Screenshot 2024-11-15 at 12 00 44" src="https://github.com/user-attachments/assets/8e3cecec-d096-489c-b131-05691383eac7">

### Stock detailed information
<img width="600" alt="Screenshot 2024-11-15 at 12 00 54" src="https://github.com/user-attachments/assets/ac2681e9-5d30-4012-b222-9e01303c1d6a">


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
