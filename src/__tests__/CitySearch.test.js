import React from 'react'
import { shallow } from 'enzyme'
import CitySearch from '../CitySearch'

describe('<CitySearch /> component', () => {
  let CitySearchWrapper
  beforeAll(() => {
    CitySearchWrapper = shallow(<CitySearch />)
  })
  test('render text input', () => {
    // check whether an element with the class name of city exists within the CitySearchWrapper component
    // which is a shallowly rendered version of CitySearch
    const query = CitySearchWrapper.state('query')
    expect(CitySearchWrapper.find('.city').prop('value')).toBe(query)
    // expect(CitySearchWrapper.find('.city')).toHaveLength(1)
  })

  test('renders alist of suggestions', () => {
    // check for an element with class of suggestions
    expect(CitySearchWrapper.find('.suggestions')).toHaveLength(1)
  })
  
  test('change state when text input changes', () => {
    CitySearchWrapper.setState({
      query: 'Munich'
    })
    const eventObject = { target: { value: 'Berlin' } }
    CitySearchWrapper.find('.city').simulate('change', eventObject)
    expect(CitySearchWrapper.state('query')).toBe('Berlin')
  })
})