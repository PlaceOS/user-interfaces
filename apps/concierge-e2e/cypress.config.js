const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fileServerFolder: '.',
  fixturesFolder: './src/fixtures',
  modifyObstructiveCode: false,
  video: true,
  videosFolder: '../../dist/cypress/apps/concierge-e2e/videos',
  screenshotsFolder: '../../dist/cypress/apps/concierge-e2e/screenshots',
  chromeWebSecurity: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./src/plugins/index.js')(on, config)
    },
    specPattern: './src/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: './src/support/index.ts',
  },
})
