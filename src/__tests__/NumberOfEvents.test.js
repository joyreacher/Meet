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
    // query is the default number of events a user can view - 32
    const query = NumberOfEventsComponent.state('query')
    // find the element with the data-test, then get the value attribute's value test against query
    expect(NumberOfEventsComponent.find('[data-test="text-box"]').prop('value')).toBe(query)
  })

  test('When the user has not entered a number -- render using 32', () => {
    const TextBoxValue = findDataTest(NumberOfEventsComponentMount, 'text-box').prop('value')
    expect(TextBoxValue).toBe(32)
  })

  test('User can change the number of events they want to see', () => {
    NumberOfEventsComponent.find('[data-test="text-box"]').simulate('change', { target: { value: 16 } })
    expect(NumberOfEventsComponent.state('query')).toBe(16)
  })
})