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
    EventItem = shallow(<Event event={mockData} />)
    EventItemMount = mount(<Event event={mockData} />)
  })

  test('correct number of events are displayed', () => {
    const numberOfEvents = findDataTest(EventItem, 'event')
    expect(numberOfEvents.length).toBe(2)
  })

  test('Event element is collapsed by default', () => {
    const collapsedEvents = findDataTest(EventItem, 'event-details-hide')
    expect(collapsedEvents.length).toBe(2)
  })

  test('Match event description', () => {
    const eventDescription = findDataTest(EventItemMount, 'event-description')
    expect(eventDescription.at(0).text()).toMatch(mockData[0].description)
  })

  test('Match event location', () => {
    const eventLocation = findDataTest(EventItemMount, 'event-location')
    expect(eventLocation.at(0).text()).toMatch(mockData[0].location)
  })

  test('Event element can expand to reveal details', () => {
    const eventToExpand = findDataTest(EventItemMount, 'event-title')
    eventToExpand.at(0).simulate('click')
    const numberOfExpandedEvents = findDataTest(EventItemMount, 'event-details-show')
    expect(numberOfExpandedEvents.length).toBe(2)
  })

  test('Event element can be collapsed', () => {
    const collapsedEvent = findDataTest(EventItemMount, 'event-title')
    collapsedEvent.at(0).simulate('click')
    const numberOfCollapsedEvents = findDataTest(EventItemMount, 'event-details-hide')
    expect(numberOfCollapsedEvents.length).toBe(2)
  })
  
})