import React, { useState } from 'react'
import { shallow, mount } from 'enzyme'
import NumberOfEvents from '../NumberOfEvents'
import { mockData } from '../mock-data'

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent
  let NumberOfEventsComponentMount
  const findDataTest = (wrapper, value) => wrapper.find(`[data-test="${value}"]`)

  beforeAll(() => {
    NumberOfEventsComponent = shallow(<NumberOfEvents events={mockData} />)
    NumberOfEventsComponentMount = mount(<NumberOfEvents events={mockData} />)
  })
  test('Render the text box', () => {
    const textBoxElement = findDataTest(NumberOfEventsComponent, 'text-box')
    expect(textBoxElement.length).toBe(1)
  })

  test('When the user has not entered a number render using 32', () => {
    const Events = findDataTest(NumberOfEventsComponentMount, 'text-box').prop('value')
    expect(Events).toBe(32)
  })
  
  test('User can change the number of events they want to see', () => {
    /*
    ! helper function wont work here
    ? simulate has to be run DIRECTLY on NumberOfEventComponent wrapper
    ! not Events.simulate
    // const Events = findDataTest(NumberOfEventsComponentMount, 'text-box')
    // Events.simulate('change', { target: { value: 16 } })
    */
    NumberOfEventsComponent.find('[data-test="text-box"]').simulate('change', { target: { value: 16 } })
    expect(NumberOfEventsComponent.state('query')).toBe(16)
  })
})