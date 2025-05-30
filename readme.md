# Store Playwright Tests

This project contains tests for a clothing store website, using Playwright with the **mochawesome** reporter. Follow the steps below to download the project, install its dependencies, run the tests, and open the HTML report.

---

## Requirements

Node.js: Playwright requires Node.js v18.0.0 or above. However, it is often recommended to use the latest LTS version (for example, Node.js 18) to ensure compatibility and optimal performance.

npm: npm (Node Package Manager) comes bundled with Node.js.. There is no additional npm version requirement beyond what is included with your Node.js installation. You may also opt for an alternative like Yarn if you prefer.

## Quick Start

### 1. Download the Repository

Clone the repository or download it as a ZIP file.

```sh
git clone https://github.com/yourusername/store-playwright-tests.git
cd store-playwright-tests
```

### 2. Install NPM Packages

```sh
npm install
```

### 3. Install Playwright dependencies

```sh
npx playwright install
```

### 4. Run the test headless mode

```sh
npm run test
```

If you want it in head mode run the next command:

```sh
npm run test:headed
```

### 5. Open the report

To open the report with Mochawesome you need to run the next command

```sh
npm run report
```
