import React from 'react'
import { shallow, mount } from 'enzyme'
import App from '../App'
import EventList from '../EventList'
import CitySearch from '../CitySearch'
import NumberOfEvents from '../NumberOfEvents'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { mockData } from '../mock-data'
import { extractLocations, getEvents } from '../api'

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

  test('Get list of events matching the city selected by the user', async () => {
    const AppWrapper = mount(<App />)
    // load the CitySearch component to search through
    const CitySearchWrapper = AppWrapper.find(CitySearch)
    // store the array of locations
    const locations = extractLocations(mockData)
    // set the local state of the CityState component
    CitySearchWrapper.setState({ suggestions: locations })
    // get suggestions state that is set with locations array
    const suggestions = CitySearchWrapper.state('suggestions')
    // set the range of inedexes
    const selectedIndex = Math.floor(Math.random() * (suggestions.length))
    // make the selection based on suggestion state and index range
    const selectedCity = suggestions[0]
    // click - will need to create click handler in App that changes events state, then pass it to CitySearch
    // There’s an important point that you need to be aware of here, which is that the click is registered in the CitySearch component—not in the App component
    await CitySearchWrapper.instance().handleItemClicked(selectedCity)
    // return an array
    const allEvents = await getEvents()
    // filter through the allEvents array return results that share the same location and selected City
    const eventsToShow = allEvents.filter(event => event.location == selectedCity)
    // events state should contain only the results the user has selected
    expect(AppWrapper.state('events')[0]).toEqual(eventsToShow[0])
    // clean up
    AppWrapper.unmount()
  })

  test('Get list of all events when user selects "See all cities"', async () => {
    const AppWrapper = mount(<App />)
    const suggestionsItems = AppWrapper.find(CitySearch).find('.suggestions button')
    await suggestionsItems.at(suggestionsItems.length - 1).simulate('click')
    const allEvents = await getEvents()
    expect(AppWrapper.state('events')).toEqual(allEvents)
    AppWrapper.unmount()
  })
  
  test('Number of events processed as props', () => {
    const NumberOfEventsWrapper = mount(<NumberOfEvents locations={extractLocations(mockData)} events={mockData} updateEvents={() => {}} number={4} />)
    expect(NumberOfEventsWrapper.props().events.length).toBe(4)
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

  test('render the Navbar', () => {
    const navbar = AppWrapper.find(Navbar)
    expect(navbar.length).toBe(1)
  })

  test('render the Navbar', () => {
    const footer = AppWrapper.find(Footer)
    expect(footer.length).toBe(1)
  })
})