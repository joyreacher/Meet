import React, { Component } from "react"

class NumberOfEvents extends Component {
  constructor() {
    super()
    this.state = {
      query: 32
    }
  }

  handleInputChanged = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  render() {
    // const { events } = this.props
    return (
      <div className='NumberOfEvents'>
        <p data-test='number'>Number of events</p>
        <input
          name='events'
          data-test='text-box'
          type='text'
          value={this.state.query}
          onChange={(e) => {
            this.handleInputChanged(e)
          }}
        />
      </div>
    )
  }
  
}
export default NumberOfEvents