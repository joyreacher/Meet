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

  handleChange (e) {
    this.setState({
      query: e
    })
    const searchTime = setTimeout(() => {
      this.props.updateEvents(this.props.locations, this.state.query)
      console.log(this.state.query)
    }, 950)
    return () => {
      clearTimeout(searchTime)
      this.setState({
        query:''
      })
    }
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
            placeholder={!number ? this.state.query : number}
            value={!this.state.query ? number : this.state.query}
            onFocus={() => this.setState({ query: ' ' })}
            onChange={(e) => {
              this.handleChange(e.target.value)
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
