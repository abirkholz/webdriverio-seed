const { Given, When, Then } = require("cucumber");

const Driver = require('../../src/driver/driver');
const Page = require('../../src/pages/page');

/**
 * Web Common Steps
 */

Given(/^I am on the "(.*?)" page$/, (pageName) => {
  Driver.loadUrl(Page.get(pageName).url);
  Driver.shouldHaveTitle(Page.get(pageName).title);
});

When(/^I click the "(.*?)" on the "(.*?)" page$/, (element, pageName) => {
  Driver.clickOnElement(Page.get(pageName).getElement(element));
});

Then(/^I should see the "(.*?)" on the "(.*?)" page$/, (element, pageName) => {
  Driver.shouldSeeElement(Page.get(pageName).getElement(element));
});
