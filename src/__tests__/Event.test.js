import React from 'react'
import { shallow, mount } from 'enzyme'
import Event from '../Event'
import { mockData } from '../mock-data'

describe('<Event /> component', () => {
  let EventItem
  let EventItemMount

  // Helper function
  const findDataTest = (wrapper, value) => wrapper.find(`[data-test="${value}"]`)

  beforeAll(() => {
    // using the 1st item in the mockData array to
    // simulate how the app behaves in the browser
    EventItem = shallow(<Event event={mockData[0]} />)
  })

  // test('correct number of events are displayed', () => {
  //   const numberOfEvents = findDataTest(EventItem, 'event')
  //   expect(numberOfEvents.length).toBe(2)
  // })

  test('Event element is collapsed by default', () => {
    const collapsedEvents = findDataTest(EventItem, 'event-details-hide')
    expect(collapsedEvents.length).toBe(1)
  })

  test('Match event description', () => {
    const eventDescription = findDataTest(EventItem, 'event-description')
    expect(eventDescription.first().text()).toMatch(mockData[0].description)
  })

  test('Match event location', () => {
    const eventLocation = findDataTest(EventItem, 'event-location')
    expect(eventLocation.first().text()).toMatch(mockData[0].location)
  })

  test('Event element can expand to reveal details', () => {
    const eventToExpand = findDataTest(EventItem, 'event-title')
    eventToExpand.at(0).simulate('click')
    const numberOfExpandedEvents = findDataTest(EventItem, 'event-details-show')
    expect(numberOfExpandedEvents.length).toBe(1)
  })

  test('Event element can be collapsed', () => {
    const collapsedEvent = findDataTest(EventItem, 'event-title')
    collapsedEvent.at(0).simulate('click')
    const numberOfCollapsedEvents = findDataTest(EventItem, 'event-details-hide')
    expect(numberOfCollapsedEvents.length).toBe(1)
  })
  
})