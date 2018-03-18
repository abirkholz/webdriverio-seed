const { Given, When, Then } = require("cucumber");

const Driver = require('../../src/driver/driver');
const Page = require('../../src/pages/page');

/**
 * Common Steps
 */

Given(/^I am on the "(.*?)" page$/, (pageName) => {
  const p = Page.get(pageName);
  Driver.loadUrl(p.url);
  Driver.shouldHaveTitle(p.title);
});

When(/^I click the "(.*?)" on the "(.*?)" page$/, (element, pageName) => {
  Driver.clickOnElement(Page.get(pageName).getElement(element));
});

Then(/^I should see the "(.*?)" on the "(.*?)" page$/, (element, pageName) => {
  Driver.shouldSeeElement(Page.get(pageName).getElement(element));
});
