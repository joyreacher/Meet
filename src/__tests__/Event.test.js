import React from 'react'
import { shallow, mount } from 'enzyme'
import Event from '../Event'
import { mockData } from '../mock-data'

describe('<Event /> component', () => {
  let EventItem
  beforeAll(() => {
    EventItem = shallow(<Event event={mockData} />)
  })

  test('correct number of events are displayed', () => {
    const eventContainer = EventItem.find(".Event")
    const event = EventItem.find("[data-test='event']")
    expect(eventContainer.length).toBe(2)
    expect(event.length).toBe(2)
  })

  test('Event element is collapsed by default', () => {
    const eventContainer = EventItem.find('.hide-details')
    expect(eventContainer.length).toBe(2)
  })

  test('Event element can expand to reveal details', () => {
    EventItem = mount(<Event event={mockData} />)
    // set the menu state to true - adds the class of 'show-details'
    EventItem.find('[data-test="event"]').at(0).simulate('click')
    //! set the menu state back to false - fail test
    //! EventItem.find('[data-test="event"]').at(0).simulate('click')
    // text - gets the text of the node
    // const item = EventItem.find('.hide-details').at(0).text()
    // node
    const item = EventItem.find('.show-details')
    expect(item.length).toBe(2)
  })

  test('Event element can be collapsed', () => {
    
  })
})