import React from 'react'
import { loadFeature, defineFeature } from "jest-cucumber";
import { shallow, mount } from 'enzyme'
import { extractLocations } from '../api';
import { mockData } from '../mock-data';
import App from '../App'
import Event from '../Event'
const feature = loadFeature('./src/features/showAndHideEventDetails.feature')

const locations = extractLocations(mockData)

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
        let AppWrapper
        
        given('the app/page is loaded', () => {
          
        });

        when('the user opens the app', async () => {
          AppWrapper = await mount(<App />)
        });

        then('the user should see an icon indicating the event is collapsed', () => {
          AppWrapper.update()
          const EventWrapper = AppWrapper.find(Event)
          // Selects the sibling of event-title
          expect(EventWrapper.find('.Event > .event-title ~ .event-icon').length).toBe(8)
          expect(EventWrapper.find('.Event .event-title').length).toBe(8)
        });
    });

    // Feature file has a scenario titled "User can expand an event to see its details", but no match found in step definitions. Try adding the following code:

    test('User can expand an event to see its details', ({ given, when, then }) => {
      let AppWrapper
        given('the user interacts clicks on an event', async () => {
          AppWrapper = await mount(<App />)
        });

        when('the user expands the event item', () => {
          AppWrapper.update()
          const EventWrapper = AppWrapper.find(Event)
          EventWrapper.find('.Event .event-title ~ .event-icon-hide').at(0).simulate('click')
        });

        then('the user should see details', () => {
          AppWrapper.update()
          const EventWrapper = AppWrapper.find(Event)
          expect(EventWrapper.find('.Event .event-title ~ .event-icon-show').length).toBe(1)
        });
    });

    // Feature file has a scenario titled "User can collapse an event to hide its details", but no match found in step definitions. Try adding the following code:

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
      let AppWrapper, EventWrapper
        given('the user has finished looking at a specific event item', async () => {
          AppWrapper = await mount(<App />)
        });

        when('the user looks for the close icon', () => {
          AppWrapper.update()
          EventWrapper = AppWrapper.find(Event)
          EventWrapper.find('.Event .event-title ~ .event-icon-hide').at(0).simulate('click')
          EventWrapper.find('.Event .event-title ~ .event-icon').at(0).simulate('click')
        });

        then('the user will see all events collapsed with an open icon', () => {
          AppWrapper.update()
          EventWrapper = AppWrapper.find(Event)
          expect(EventWrapper.find('.Event .event-title ~ .event-icon-hide').at(0).length).toBeTruthy()
        });
    });
})