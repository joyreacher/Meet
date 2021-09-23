import React from 'react'
import { shallow, mount } from 'enzyme'
import App from '../App'
import EventList from '../EventList'
import CitySearch from '../CitySearch'
import NumberOfEvents from '../NumberOfEvents'

// new scope - App Integration
describe('<App /> integration', () => {
  // make sure that EventList gets events as a prop
  test('App passes "events" state as a prop to EventList', () => {
    // set the wrapper
    const AppWrapper = mount(<App />)
    // set the state uksing the wrapper
    const AppEventsState = AppWrapper.state('events')
    // test - state is NOT undefined
    expect(AppEventsState).not.toEqual(undefined)
    // test -EventList props to equal the events state
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState)
    // clean up DOM
    AppWrapper.unmount()
  })

  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App />)
    const AppLocationsState = AppWrapper.state('locations')
    expect(AppLocationsState).not.toEqual(undefined)
    expect(AppWrapper.find(CitySearch).props().locations).toBe(AppLocationsState)
    AppWrapper.unmount()
  })
})

// create new scope called <App /> component
describe('<App /> component', () => {
  // use beforeall to keep code DRY
  let AppWrapper
  beforeAll(() => {
    AppWrapper = shallow(<App />)
  })
  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1)
  })

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1)
  })

  test('render the Number of events component', () => {
    const numberOfEvents = AppWrapper.find(NumberOfEvents)
    expect(numberOfEvents.length).toBe(1)
  })
})