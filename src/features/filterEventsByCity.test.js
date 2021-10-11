import React from 'react'
import { shallow, mount } from 'enzyme'
import { loadFeature, defineFeature } from 'jest-cucumber'

// components
import App from '../App'
import CitySearch from '../CitySearch'

// data
import { mockData } from '../mock-data'
import { extractLocations } from '../api'

const locations = extractLocations(mockData)
// used to load a Gherkin file
const feature = loadFeature('./src/features/filterEventsByCity.feature')

// used to define the code for that file (feature)
defineFeature(feature, test => {
  // Feature file has a scenario titled "When user hasn’t searched for a city, show upcoming events from all cities.", but no match found in step definitions. Try adding the following code:
  test('When user hasn’t searched for a city, show upcoming events from all cities.', ({ given, when, then }) => {
    given('user hasn’t searched for any city', () => {
      // leave empty because the user has not searched for anything
    });

    // Action: the user opens the app
    let AppWrapper
    when('the user opens the app', () => {
      AppWrapper = mount(<App />)
    });

    // Final step once given and when are defined
    then('the user should see the list of upcoming events.', () => {
      AppWrapper.update()
      expect(AppWrapper.find('.Event')).toHaveLength(mockData.length)
    });
  });

  // Feature file has a scenario titled "User should see a list of suggestions when they search for a city", but no match found in step definitions. Try adding the following code:

  test('User should see a list of suggestions when they search for a city', ({ given, when, then }) => {
    // setup for when the page is open -- shallow is used because we dont need any of its rendered children
    let CitySearchWrapper
    given('the main page is open', () => {
      CitySearchWrapper = shallow(<CitySearch updateEvents={() => {}} locations={locations} />)
    });

    // Action: User is typing in the City textbox
    when('the user starts typing in the city textbox', () => {
      CitySearchWrapper.find('input').simulate('change', { target: { value: 'Berlin' } })
    });
    
    // Expected outcome
    then('the user should receive a list of cities (suggestions) that match what they’ve typed', () => {
      //? Search will only produce 1 search result if that location exists
      //? 'Berlin' will show 1 result under suggestions NOT 2
      //! Task is expecting each event to show under suggestion
      //! Test is written to show 1 location suggestion IF there are event(s) that match their location value
      expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(1)
    });
  });

  // Feature file has a scenario titled "User can select a city from the suggested list", but no match found in step definitions. Try adding the following code:

  test('User can select a city from the suggested list', ({ given, and, when, then }) => {
      given('user was typing “Berlin” in the city textbox', () => {

      });

      and('the list of suggested cities is showing', () => {

      });

      when('the user selects a city (e.g., “Berlin, Germany”) from the list', () => {

      });

      then('their city should be changed to that city (i.e., “Berlin, Germany”)', () => {

      });

      and('the user should receive a list of upcoming events in that city', () => {

      });
  });

})