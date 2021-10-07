import React, { Component } from "react"
import { extractLocations, getEvents } from "./api"

class NumberOfEvents extends Component {
  constructor() {
    super()
    this.state = {
      query: '',
      events: [],
      locations: []
    }
  }

  componentDidMount() {
    this.setState({
      events: this.props.events,
      locations: this.props.locations,
      query: this.props.number
    })
  }
  

  render() {
    const { events, number } = this.props
    return (
      <div className='NumberOfEvents'>
        <p data-test='number'>Number of events</p>
        <div>
          <p data-test='number-of-events'>
            {!number ? events.length : number}
          </p>
        </div>
        <input
          name='events'
          data-test='text-box'
          type='text'
          value={number}
          onChange={(e) => {
            this.setState({
              query: e.target.value
            })
            return this.props.updateEvents(this.props.locations, e.target.value)
          }}
        />
      </div>
    )
  }
  
}
export default NumberOfEvents