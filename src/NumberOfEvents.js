import React, { Component } from "react"

class NumberOfEvents extends Component {
  constructor() {
    super()
    this.state = {
      query: 32
    }
  }

  handleInputChanged = (e) => {
    const mockValue = 16
    this.setState({
      query: mockValue
    })
    this.state.query = e.target.value
    // use events object to check the number of events in given area
    console.log(this.props.events.length)
  }

  render() {
    const { events } = this.props
    return (
      <div>
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