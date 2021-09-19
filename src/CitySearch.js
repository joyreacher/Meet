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
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1
    })
    this.setState({
      query: value,
      suggestions
    })
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
              return <li key={suggestion}>{suggestion}</li>
            })
          }
          <li key='all'><b>See all citites</b></li>
        </ul>
      </div>
    )
  }
}

export default CitySearch