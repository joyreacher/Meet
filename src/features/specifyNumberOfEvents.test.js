import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from 'enzyme'
// components
import App from '../App'
import NumberOfEvents from '../NumberOfEvents';
import CitySearch from "../CitySearch";
import EventList from "../EventList";
import Event from '../Event'
// data
import { mockData } from '../mock-data';
import { extractLocations } from "../api";

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
        });
        when('the user is looking for all events in a given location', async () => {
          CitySearchWrapper = await mount(<CitySearch locations={locations} updateEvents={() => {}} />)
          // find the input and simulate typing in 'New York'
          CitySearchWrapper.find('input').simulate('change', { target: { value: 'USA' } })
          // find the first suggestion from the list and click on it
          CitySearchWrapper.find('.suggestions li').at(0).simulate('click')
          expect(CitySearchWrapper.state('query')).toBe('New York, USA')
        });
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
        });
    });

    // Feature file has a scenario titled "User can change the number of events they want to see", but no match found in step definitions. Try adding the following code:

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        given('the user is searching for a specific event', () => {

        });

        when('the user enters a numeric value in the number of events field', () => {

        });

        then('the user will see the specified number of events (if they exist)', () => {

        });
    });
})