
# Meet

To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.


## Features

- Filter events by city.
- Show/hide event details.
- Specify number of events.
- Use the app when offline.
- Add an app shortcut to the home screen.
- View a chart showing the number of upcoming events by city.
## User Stories

# FILTER EVENTS BY CITY
---
*As a user I should be able to filter events by city so that I can attend events near me.*

**When a user hasn’t searched for a city, show upcoming events from all cities**
- Given: the user has not searched for a city
- When; the user opens the app
- Then: the user should see a list of all upcoming events in order by date

**User should see a list of suggestions when they search for a city**
- Given: the main page is open
- When: the user starts typing
- Then: the user should see a list of all all events in cities that match what is typed

**User can select a city from the suggested list**
- Given: the user was typing “Berlin” in the city textbox. And the list of suggested cities is showing
- When: the user selects a city from search results list
- Then: the user’s location should be changed to show events from that city

# SHOW/HIDE AN EVENTS’ DETAILS

*As a user I should be able to show/hide event details so that I can organize all events.*

**An event element is collapsed by default**
- Given: the app/page is loaded
- When: the user opens the app
- Then: the user should see an icon indicating the event is collapsed

**User can expand an event to see its details**
- Given: the user interacts clicks on an event
- When: the user expands the event item
- Then: the user should see details

**User can collapse an event to hide its details**
- Given: the user has finished looking at a specific event item
- When: the user looks for the close icon
- Then: the user will see all events collapsed with an open icon

# SPECIFY NUMBER OF EVENTS

*As a user I should be able to view a specific number of events so I can view their details.*

**When user hasn’t specified a number, 32 is the default number**
- Given: the user has not entered anything in the number of events field
- When: the user is looking for all events in a given location
- Then: the user will see up to 32 events in the given location

**User can change the number of events they want to see**
- Given: the user is searching for a specific event
- When: the user enters a numeric value in the number of events field
- Then: the user will see the specified number of events (if they exist) 


# USE THE APP WHEN OFFLINE

*As a user I should be able to view events when I’m not connected to the internet, so I can keep appointments wherever I am.*

**Show cached data when there’s no internet connection**
- Given: the user has lost internet connection
- When: the user enters buildings where connecting to their wifi is not an option
- Then: the app should use it’s cached storage to show event details

**Show error when user changes the settings (city, time range)**
- Given: the user is not connected to the internet and tries to change event details
- When: the user enters a location with bad cell reception
- Then: the user will see a prompt to connect to the internet before making changes

# DATA VISUALIZATION

*As a user I should be able to glance at graph and see the number of events taking place in a location so I can plan to attend to join more meet ups.*

**Show a chart with the number of upcoming events in each city**
- Given: the user has just downloaded the app and wants to see how many events he/she can search through
- When: the user first opens the app
- Then: the user will see onboarding screens leading to the data visuals

  
