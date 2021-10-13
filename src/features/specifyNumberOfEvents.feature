Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number
Given the user has not entered anything in the number of events field
When the user is looking for all events in a given location
Then the user will see up to 32 events in the given location

Scenario: User can change the number of events they want to see
Given the user is searching for a specific event
When the user enters a numeric value in the number of events field
Then the user will see the specified number of events (if they exist)