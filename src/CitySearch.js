import React, { Component } from 'react';
class CitySearch extends Component {
  constructor() {
    super()
    this.state = {
      query: 'Munich'
    }
  }

  render() {
    return (
      <div className='CitySearch'>
        <input
          type='text'
          className='city'
          // pass the value of state into input
          value={this.state.query}
        />
        <ul className="suggestions"></ul>
      </div>
    )
  }
}

export default CitySearch