import React, { Component } from 'react';
class CitySearch extends Component {
  constructor() {
    super()
    this.state = {
      query: 'Munch'
    }
  }

  handleInputChanged = (event) => {
    const value = event.target.value
    this.setState({ query: value})
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
        <ul className="suggestions"></ul>
      </div>
    )
  }
}

export default CitySearch