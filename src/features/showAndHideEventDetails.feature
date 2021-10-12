Feature: Show and hide event details

Scenario: An event element is collapsed by default
Given the app/page is loaded
When the user opens the app
Then the user should see an icon indicating the event is collapsed

Scenario: User can expand an event to see its details
Given the user interacts clicks on an event
When the user expands the event item
Then the user should see details

Scenario: User can collapse an event to hide its details
Given the user has finished looking at a specific event item
When the user looks for the close icon
Then the user will see all events collapsed with an open icon