// WebdriverIO Configuration
exports.config = {
  runner: 'local',
  specs: ['./test/**/*.test.js'],
  maxInstances: 1,
  capabilities: [{
    platformName: 'Android',
    deviceName: 'Pixel_3a_API_29',
    appPackage: 'com.example.app',
    automationName: 'UiAutomator2',
    platformVersion: '10.0'
  }],
  logLevel: 'info',
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  sync: true
};
