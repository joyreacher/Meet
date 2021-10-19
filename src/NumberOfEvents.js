import React, { Component } from 'react'
import { ErrorAlert } from './Alert'
class NumberOfEvents extends Component {
  constructor () {
    super()
    this.state = {
      query: '',
      events: [],
      locations: [],
      error: ''
    }
  }

  componentDidMount () {
    this.setState({
      events: this.props.events,
      locations: this.props.locations,
      query: this.props.number
    })
  }

  render () {
    const { events, number, errAlert } = this.props
    return (
      <div className='NumberOfEvents'>
        <div className='NumberOfEvents__input-container'>
          <label className='NumberOfEvents__label' data-test='number'>Number of events</label>
          <ErrorAlert text={errAlert} />
          <input
            name='events'
            data-test='text-box'
            type='text'
            placeholder={number}
            value={!number ? '' : number}
            onChange={(e) => {
              this.setState({
                query: e.target.value === '' ? number : e.target.value
              })
              return this.props.updateEvents(this.props.locations, e.target.value)
            }}
          />
        </div>
        <div className='display-event-number'>
          <p data-test='number-of-events'>
            Events displayed: {!number ? events.length : number}
          </p>
        </div>
      </div>
    )
  }
}
export default NumberOfEvents
