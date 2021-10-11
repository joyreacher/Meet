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
    })

    // Action: the user opens the app
    let AppWrapper
    when('the user opens the app', () => {
      AppWrapper = mount(<App />)
    })

    // Final step once given and when are defined
    then('the user should see the list of upcoming events.', () => {
      AppWrapper.update()
      expect(AppWrapper.find('.Event')).toHaveLength(mockData.length)
    })
  })

  // Feature file has a scenario titled "User should see a list of suggestions when they search for a city", but no match found in step definitions. Try adding the following code:

  test('User should see a list of suggestions when they search for a city', ({ given, when, then }) => {
    // setup for when the page is open -- shallow is used because we dont need any of its rendered children
    let CitySearchWrapper
    given('the main page is open', () => {
      CitySearchWrapper = shallow(<CitySearch updateEvents={() => {}} locations={locations} />)
    })

    // Action: User is typing in the City textbox
    when('the user starts typing in the city textbox', () => {
      //? Test is searching for country
      CitySearchWrapper.find('input').simulate('change', { target: { value: 'USA' } })
    })

    // Expected outcome
    then('the user should receive a list of cities (suggestions) that match what they’ve typed', () => {
      expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2)
    })
  })

  // Feature file has a scenario titled "User can select a city from the suggested list", but no match found in step definitions. Try adding the following code:

  test('User can select a city from the suggested list', ({ given, and, when, then }) => {
    /*
      App will have to be rendered
      User then has to type in the CitySearch textbox
      An appropriate suggestion will have to appear
      User clicks the suggestion
      given is an async to allow for time to load suggestions
      */

    let AppWrapper
    given('user was typing “USA” in the city textbox', async () => {
      AppWrapper = await mount(<App />)
      AppWrapper.find('.city').simulate('change', { target: { value: 'USA' } })
    })

    // simpliy a concatenator to given
    and('the list of suggested cities is showing', () => {
      // ensures that the App component is updated after it recieves the list of suggestions
      AppWrapper.update()
      // if city is in DB it will appear once
      expect(AppWrapper.find('.suggestions li')).toHaveLength(2)
    })

    // Defined action that represents the user selecting a suggestion
    when('the user selects a city (e.g., “Denver, USA”) from the list', () => {
      // Denver will be 2nd - not sorted
      AppWrapper.find('.suggestions li').at(1).simulate('click')
    })

    // Check the query state of CitySearch to match the suggestion selected
    then('their city should be changed to that city (i.e., “Denver, USA”)', () => {
      const CitySearchWrapper = AppWrapper.find(CitySearch)
      expect(CitySearchWrapper.state('query')).toBe('Denver, USA')
    })

    and('the user should receive a list of upcoming events in that city', () => {
      // main element rendered by Event component has the class 'Event'
      expect(AppWrapper.find('.Event')).toHaveLength(mockData.length)
    })
  })
})
