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
    if(window.location.href.includes('localhost')) {
      this.setState({
        query: mockValue
      })
      console.log('using mock value - meet/src/NumberOfEvents line 12')
    } else {
      this.setState({
        query: e.target.value
      })
      console.log(e.target.value)
    }
    //TODO: use events object to check the number of events in given area
    //console.log(this.props.events.length)
  }

  render() {
    // const { events } = this.props
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