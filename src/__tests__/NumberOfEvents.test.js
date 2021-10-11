import React, { useState } from 'react'
import { shallow, mount } from 'enzyme'
import App from '../App'
import NumberOfEvents from '../NumberOfEvents'
import { mockData } from '../mock-data'
import { extractLocations } from '../api'

describe('<NumberOfEvents /> integration', () => {
  let NumberOfEventsComponentMount
  const findDataTest = (wrapper, value) => wrapper.find(`[data-test="${value}"]`)
  let TestLocations

  beforeAll(() => {
    TestLocations = extractLocations(mockData)
    NumberOfEventsComponentMount = mount(<NumberOfEvents number={32} events={mockData} locations={TestLocations} updateEvents={() => {}} />)
  })

  test('Check for event props passed from App', () => {
    // get event state from NumberOfEvents
    const events = NumberOfEventsComponentMount.state().events
    // test it against the values being passed in
    expect(events).toBe(mockData)
  })

  test('Check for location props passed from App', () => {
    // get location state from NumberOfEvents
    const locations = NumberOfEventsComponentMount.state().locations
    // test it against the values being passed in
    expect(locations).toBe(TestLocations)
  })

  test('When the user has not entered a number -- render using 32', () => {
    const TextBoxValue = findDataTest(NumberOfEventsComponentMount, 'text-box').prop('value')
    expect(TextBoxValue).toBe(32)
  })

  test('Update number of events', () => {
    NumberOfEventsComponentMount.find('[data-test="text-box"]').simulate('change', { target: { value: 3 } })
    expect(NumberOfEventsComponentMount.state().query).toBe(3)
  })

  test('Match events with similar locations', () => {
    // console.log(NumberOfEventsComponentMount.state().events)
    // console.log(NumberOfEventsComponentMount.state().locations)
    expect(NumberOfEventsComponentMount.state().events).not.toEqual(undefined)
  })

  test('INTEGRATION - NumberOfEvents value is passed up to App events state', () => {
    // Change the number input
    NumberOfEventsComponentMount.find('[data-test="text-box"]').simulate('change', { target: { value: 3 } })
    // Mount App with NumberOfEvents query
    const AppWrapper = mount(<App events={NumberOfEventsComponentMount.state('query')} />).props().events
    expect(AppWrapper).toBe(NumberOfEventsComponentMount.state('query'))
  })

  test('INTEGRATION - User can change the number of events they want to see', () => {
    NumberOfEventsComponentMount.find('[data-test="text-box"]').simulate('change', { target: { value: 4 } })
    expect(NumberOfEventsComponentMount.state('query')).toBe(4)
  })
})
