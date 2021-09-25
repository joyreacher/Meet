import React, { Component } from 'react';
class CitySearch extends Component {
  constructor() {
    super()
    this.state = {
      query: 'Munch',
      suggestions: []
    }
  }

  handleInputChanged = (event) => {
    // filter the state of suggestions
    const value = event.target.value
    const suggestions = this.props.locations.filter((location) => {
      if(value === ''){
        return false
      }
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1
    })
    this.setState({
      query: value,
      suggestions
    })
  }

  // Will handle changing the state of query when clicked
  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion
    })
    this.props.updateEvents(suggestion)
  }

  render() {
    return (
      <div className='CitySearch'>
        <input
          type='text'
          className='city'
          // pass the value of state into input
          value={this.state.query}
          onChange={this.handleInputChanged}
        />
        <ul className="suggestions">
          {
            this.state.suggestions.map(suggestion => {
              return <li 
                key={suggestion}
                onClick={() => this.handleItemClicked(suggestion)}
              >{suggestion}</li>
            })
          }
          <button className='CitySearch__btn' key='all' onClick={() => this.handleItemClicked("all")}>
            <b>See all citites</b>
          </button>
        </ul>
      </div>
    )
  }
}

export default CitySearch