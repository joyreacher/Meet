import React from 'react'
import { shallow } from 'enzyme'
import NumberOfEvents from '../NumberOfEvents'
import { mockData } from '../mock-data'

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent
  const findDataTest = (wrapper, value) => wrapper.find(`[data-test="${value}"]`)
  beforeAll(() => {
    NumberOfEventsComponent = shallow(<NumberOfEvents events={mockData} />)
  })
  test('Render the text box', () => {
    const textBoxElement = findDataTest(NumberOfEventsComponent, 'text-box')
    expect(textBoxElement.length).toBe(1)
  })
})