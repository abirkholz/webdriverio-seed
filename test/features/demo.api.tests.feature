#https://jsonplaceholder.typicode.com/todos/1

Feature: test
    api test
    @jsonplaceholder
    Scenario: test scenario
        When I make a GET request to "https://jsonplaceholder.typicode.com/todos/1"
        Then I verify request has '$.userId'