const { Given, When, Then } = require("cucumber");

const Driver = require('../../src/driver/driver');
const Pages = require('../../src/pages');

/**
 * Web Common Steps
 */

Given('I am on the home page', () => {
  Driver.loadUrl(Pages.Home.url);
  Driver.shouldHaveTitle(Pages.Home.title);
});

When(/^I click the "(.*?)" on the home page$/, (element) => {
  Driver.clickOnElement(Pages.Home.getElement(element));
});

Then(/^I should see the "(.*?)" on the login page$/, (element) => {
  Driver.shouldSeeElement(Pages.Login.getElement(element));
});
