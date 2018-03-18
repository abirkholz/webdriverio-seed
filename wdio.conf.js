const capability = require("./capabilities.json")[process.env.CAPABILITY];
const chai = require("chai");

exports.config = {
  host: "localhost",
  path: "/wd/hub",
  specs: ["./test/features/*.feature"],
  exclude: [],
  suites: {
    foo: [""]
  },
  maxInstances: 1,
  capabilities: [capability],
  services: ["selenium-standalone"],
  seleniumLogs: "/logs/selenium.log",
  logLevel: "silent",
  coloredLogs: true,
  bail: 0,
  screenshotPath: "./logs/screenshots/",
  screenshotOnReject: true,
  waitforTimeout: 120000,
  framework: "cucumber",
  cucumberOpts: {
    require: ["./test/steps/common.steps.js"],
    format: ["pretty"],
    backtrace: false,
    compiler: ["js:babel-register"],
    failAmbiguousDefinitions: true,
    failFast: false,
    ignoreUndefinedDefinitions: false,
    name: [],
    snippets: false,
    source: true,
    profile: [],
    snippetSyntax: undefined,
    strict: true,
    tagExpression: "not @Pending",
    tagsInTitle: false,
    timeout: 20000,
    tags: []
  },
  reporters: ["dot", "spec", "junit"],
  reporterOptions: {
    junit: {
      outputDir: "./results"
    }
  },
  
  // WebDriverIO specific hooks
  onPrepare: function(config, capabilities) {},
  beforeSession: function(config, capabilities, specs) {},
  before: function(capabilities, specs) {
    global.expect = chai.expect;
    global.assert = chai.assert;
    global.should = chai.should();
  },
  beforeSuite: function(suite) {},
  beforeHook: function() {},
  afterHook: function() {},
  beforeTest: function(test) {},
  beforeCommand: function(commandName, args) {},
  afterCommand: function(commandName, args, result, error) {},
  afterTest: function(test) {},
  afterSuite: function(suite) {},
  after: function(result, capabilities, specs) {},
  afterSession: function(config, capabilities, specs) {},
  onComplete: function(exitCode, config, capabilities) {},
  
  // Cucumber specific hooks
  beforeFeature: function(feature) {},
  beforeScenario: function(scenario) {},
  beforeStep: function(step) {},
  afterStep: function(stepResult) {},
  afterScenario: function(scenario) {},
  afterFeature: function(feature) {}
};
