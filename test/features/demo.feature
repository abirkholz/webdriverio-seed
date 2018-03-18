Feature: Web Demo

@demo @home @hackerNews
Scenario: Go to homepage
  Given I am on the "home" page
  When I click the "login link" on the "home" page
  Then I should see the "login button" on the "login" page

Scenario: Attempt to login
  Given I am on the "home" page
  When I click the "login link" on the "home" page
  Then I should see the "login button" on the "login" page
  When I enter "test_user" into the "username input" on the "login" page
  And I enter "test_pwd" into the "password input" on the "login" page
  And I click the "login button" on the "login" page
