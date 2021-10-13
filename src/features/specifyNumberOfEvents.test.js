import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from 'enzyme'
// components
import App from '../App'
import NumberOfEvents from '../NumberOfEvents';
// data
import { mockData } from '../mock-data';
// use loadFeature to read the .feature text file
const feature = loadFeature('./src/features/specifyNumberOfEvents.feature')
// use defineFeature to create a test suite
defineFeature(feature, test => {
  // Feature file has a scenario titled "When user hasn’t specified a number, 32 is the default number", but no match found in step definitions. Try adding the following code:

    test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
      let AppWrapper
        given('the user has not entered anything in the number of events field', async () => {
          AppWrapper = await mount(<App events={mockData} updateEvents={() => {}} />)
          expect(AppWrapper.state('numberOfEvents')).toBe(32)
          const NumberOfEventsWrapper = await mount(<NumberOfEvents updateEvents={() => {}} events={mockData} number={AppWrapper.state('numberOfEvents')} />)
          expect(NumberOfEventsWrapper.prop('number')).toBe(32)
        });

        when('the user is looking for all events in a given location', () => {

        });

        then(/^the user will see up to (\d+) events in the given location$/, (arg0) => {

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