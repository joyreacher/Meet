import { loadFeature, defineFeature } from 'jest-cucumber'
import { mount, shallow } from 'enzyme'
// components
import App from '../App'
import NumberOfEvents from '../NumberOfEvents'
import CitySearch from '../CitySearch'
import EventList from '../EventList'
import Event from '../Event'
// data
import { mockData } from '../mock-data'
import { extractLocations } from '../api'

const locations = extractLocations(mockData)
// use loadFeature to read the .feature text file
const feature = loadFeature('./src/features/specifyNumberOfEvents.feature')
// use defineFeature to create a test suite
defineFeature(feature, test => {
  // Feature file has a scenario titled "When user hasn’t specified a number, 32 is the default number", but no match found in step definitions. Try adding the following code:

  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    let AppWrapper, NumberOfEventsWrapper, CitySearchWrapper, EventListWrapper, EventWrapper

    given('the user has not entered anything in the number of events field', async () => {
      AppWrapper = await mount(<App events={mockData} locations={extractLocations(mockData)} updateEvents={() => {}} />)
      expect(AppWrapper.state('numberOfEvents')).toBe(32)
      NumberOfEventsWrapper = await mount(<NumberOfEvents updateEvents={() => {}} events={mockData} number={AppWrapper.state('numberOfEvents')} />)
      expect(NumberOfEventsWrapper.prop('number')).toBe(32)
    })
    when('the user is looking for all events in a given location', async () => {
      CitySearchWrapper = await mount(<CitySearch locations={locations} updateEvents={() => {}} />)
      // find the input and simulate typing in 'New York'
      CitySearchWrapper.find('input').simulate('change', { target: { value: 'USA' } })
      // find the first suggestion from the list and click on it
      CitySearchWrapper.find('.suggestions li').at(0).simulate('click')
      expect(CitySearchWrapper.state('query')).toBe('New York, USA')
    })
    then('the user will see up to 32 events in the given location', async () => {
      /**
            The value of locations
            can be changed to match any location
            test should compare
            Event component's event props - object containing events with matching location
            and
            App component's locations state - when suggestion is selected this.state.locations is set to that string value
           */
      AppWrapper.setState({
        locations: 'Berlin, Germany'
      })
      // retrieves the events witht the location set on line 39
      EventListWrapper = await mount(<Event events={mockData.filter(event => { if (event.location === AppWrapper.state('locations')) return event })} />)
      // show the number of events for that location
      expect(EventListWrapper.prop('events')[0].location).toBe(AppWrapper.state('locations'))
    })
  })

  // Feature file has a scenario titled "User can change the number of events they want to see", but no match found in step definitions. Try adding the following code:

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper, NumberOfEventsWrapper, CitySearchWrapper, EventListWrapper
    /** ***************** */
    /**
     * Input values - both const variables act as the input fields
     */
    const searchParam = 'USA'
    const numberParam = 3
    // filters mockData for location to equal USA
    // mockData.filter(event => { if (event.location.includes('USA')) return event })
    /** ***************** */
    given('the user is searching for a specific event', async () => {
      AppWrapper = await mount(<App />)
      //! search for locations in the USA
      CitySearchWrapper = await mount(<CitySearch locations={locations} updateEvents={() => {}} />)
      CitySearchWrapper.find('.city').simulate('change', { target: { value: searchParam } })
      // array filter - all events that have a location value that includes USA
      //! suggestions show cities within the USA
      expect(CitySearchWrapper.state('suggestions')).toMatchObject(locations.filter(loc => loc.includes(searchParam)))
      //! click the first one - New York
      CitySearchWrapper.find('.suggestions li').at(0).simulate('click')
      EventListWrapper = await mount(<EventList events={mockData.filter(event => { if (event.location.includes(searchParam)) return event })} />)
    })

    when('the user enters a numeric value in the number of events field', () => {
      //! change the number of events
      NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents)
      NumberOfEventsWrapper.find('input').simulate('change', { target: { value: numberParam } })
      expect(NumberOfEventsWrapper.state('query')).toEqual(numberParam)
    })

    then('the user will see the specified number of events (if they exist)', async () => {
      AppWrapper.update()
      //! find() acts as updateEvents -- filtering the number/location events
      // find function filters mockData for searchParam location
      // then iterates through those specific locations to return the number set using numberParams
      function find () {
        const set = []
        const location = mockData.filter(event => { if (event.location.includes(searchParam)) return event })
        for (let i = 0; i < numberParam; i++) {
          if (location[i] !== undefined) {
            set.push(location[i])
          }
        }
        return set
      }
      // load the EventList with the find function returning the events specified by user
      // ! updateEvents(searchParam, numberParam)
      EventListWrapper = await shallow(<EventList events={find()} />)

      // see the updated events props ⤵
      // console.log(EventListWrapper.props('events'))
      // see the updated Event list ⤵
      // console.log(EventListWrapper.find(Event).length)

      //! test App state (this.state.numberOfEvents) vs. what was input
      // Input causes App state to change
      expect(AppWrapper.state('numberOfEvents')).toBe(numberParam)
      // test the length of Event components displayed in the EvnetsList vs. the number input
      //! if this test fails the number of events givin in the input was higher than the number of actual events return for the specified location
      expect(EventListWrapper.find(Event).length).toBe(numberParam)
    })
  })
})
