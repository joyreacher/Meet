import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import EventList from '../EventList'
import CitySearch from '../CitySearch'

// create new scope called <App /> component
describe('<App /> component', () => {
  // use beforeall to keep code DRY
  let AppWrapper
  beforeAll(() => {
    AppWrapper = shallow(<App />)
  })
  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1)
  })

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1)
  })
})