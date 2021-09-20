import React, { Component } from 'react'

class Event extends Component {
  render () {
    const { event } = this.props
    return (
      event.map(item => {
        return (
          <div className='Event'>
            <h1  data-test='event-item' key={item}>{item.summary}</h1> 
            <div className='Event-details'>
                <p>{item.description}</p>
                <p>{item.location}</p>
            </div>
          </div>
        )
      })
    )
  }
}

export default Event