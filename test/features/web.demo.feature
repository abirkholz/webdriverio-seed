Feature: Web Demo

@demo @home @hackerNews
Scenario: Go to homepage
  Given I am on the "home" page
  When I click the "login link" on the "home" page
  Then I should see the "login button" on the "login" page
