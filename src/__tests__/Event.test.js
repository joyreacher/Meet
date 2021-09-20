import React from 'react'
import { shallow } from 'enzyme'
import Event from '../Event'
import { mockData } from '../mock-data'

describe('<Event /> component', () => {
  let EventItem
  beforeAll(() => {
    EventItem = shallow(<Event event={mockData} />)
  })

  test('correct number of events are displayed', () => {
    const eventContainer = EventItem.find(".Event")
    const event = EventItem.find("[data-test='event-item']")
    
    expect(eventContainer.length).toBe(2)
    expect(event.length).toBe(2)
  })
  
  test('Event element is collapsed by default', () => {
    
  })
  test('Event element can expand to reveal details', () => {
    
  })
  test('Event element can be collapsed', () => {
    
  })
})