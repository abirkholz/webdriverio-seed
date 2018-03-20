import { Given, When, Then } from "cucumber";
import Utility from "../../src/utility/utility";
import Driver from "../../src/driver/driver";
import LoginPage from "../../src/pages/login.page";
import HomePage from "../../src/pages/home.page";

/**
 * Common Steps
 */

Given(/^I am on the "(.*?)" page$/, pageName => {
  const Page = Utility.getPage(pageName);
  Driver.loadUrl(Page.url);
});

When(/^I click the "(.*?)" on the "(.*?)" page$/, (element, pageName) => {
  const Page = Utility.getPage(pageName);
  Driver.shouldSeeElement(Page.getElement(element));
  Driver.clickOnElement(Page.getElement(element));
});

Then(/^I should see the "(.*?)" on the "(.*?)" page$/, (element, pageName) => {
  const Page = Utility.getPage(pageName);
  Driver.shouldSeeElement(Page.getElement(element));
});

When(/^I enter "(.*?)" into the "(.*?)" on the "(.*?)" page$/,
  (value, element, pageName) => {
    const Page = Utility.getPage(pageName);
    Driver.fillElementWithText(Page.getElement(element), value);
  }
);
