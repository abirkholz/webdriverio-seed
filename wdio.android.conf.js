const capability = require("./capabilities.json")[process.env.CAPABILITY];

exports.config = {
  host: "localhost",
  path: "/wd/hub",
  specs: ["./test/android/*.spec.js"],
  suites: { p0: "", p1: "" },
  exclude: [],
  maxInstances: 1,
  capabilities: [capability],
  services: ["appium"],
  logLevel: "silent",
  coloredLogs: true,
  bail: 0,
  waitforTimeout: 120000,
  framework: "mocha",
  reporters: ["dot", "spec", "junit"],
  reporterOptions: {
    junit: {
      outputDir: "./"
    }
  },
  mochaOpts: {
    timeout: 120000,
    ui: "tdd"
  },
  before: function() {
    var chai = require("chai");
    global.expect = chai.expect;
    chai.should();
  }
};
