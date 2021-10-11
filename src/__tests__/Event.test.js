import React from 'react'
import { shallow } from 'enzyme'
import Event from '../Event'
import { mockData } from '../mock-data'

describe('<Event /> component', () => {
  let EventItem
  const findDataTest = (wrapper, value) => wrapper.find(`[data-test="${value}"]`)
  beforeAll(() => {
    EventItem = shallow(<Event event={mockData[0]} />)
  })
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
  test('Check text of event title', () => {
    const eventTitle = findDataTest(EventItem, 'event-title')
    expect(eventTitle.text()).toBe(mockData[0].summary)
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
