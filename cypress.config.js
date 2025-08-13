const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://kanban-dusky-five.vercel.app',
    viewportWidth: 1366,
    viewportHeight: 768,
    retries: { runMode: 2, openMode: 0 },
    video: true,
    screenshotOnRunFailure: true
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true
  },
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
});
