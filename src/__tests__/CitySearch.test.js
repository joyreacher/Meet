import React from 'react'
import { shallow } from 'enzyme'
import CitySearch from '../CitySearch'
import { mockData } from '../mock-data'
import { extractLocations } from '../api'

describe('<CitySearch /> component', () => {
  let CitySearchWrapper, locations
  beforeAll(() => {
    locations = extractLocations(mockData)
    CitySearchWrapper = shallow(<CitySearch locations={locations} />)
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

  test('render list of suggestions correctly', () => {
    CitySearchWrapper.setState({ suggestions: locations })
    const suggestions = CitySearchWrapper.state('suggestions')
    expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(suggestions.length + 1)
    for( let i = 0; i < suggestions.length; i += 1) {
      expect(CitySearchWrapper.find('.suggestions li').at(i).text()).toBe(suggestions[i])
    }
  })

  test('suggestion list match the query when changes', () => {
    CitySearchWrapper.setState({ query: '', suggestions: [] })
    CitySearchWrapper.find('.city').simulate('change', {
      target: { value: 'Berlin' }
    })
    const query = CitySearchWrapper.state('query')
    const filteredLocations = locations.filter((location) => {
      return location.toUpperCase().indexOf(query.toUpperCase()) > -1
    })
    expect(CitySearchWrapper.state('suggestions')).toEqual(filteredLocations)
  })

  //! after clicking on the first item in the suggestions list, the state of query didn’t change from “Berlin” to what is in the first index of the suggestions array state, which is “Berlin, Germany.
  test('Selecting a suggestion should change query state', () => {
    // Change state
    CitySearchWrapper.setState({
      query: 'Berlin'
    })
    const suggestions = CitySearchWrapper.state('suggestions')
    // Click on a list item
    CitySearchWrapper.find('.suggestions li').at(0).simulate('click')
    expect(CitySearchWrapper.state('query')).toBe(suggestions[0])
  })
})