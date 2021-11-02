import React, { Component, lazy, Suspense } from 'react'
// import Event from './Event'
const Event = lazy(() => import('./Event'))
const renderLoader = () => <p className='Alert'>Loading</p>
class EventList extends Component {
  render () {
    const { events } = this.props
    return (
      <ul className='EventList'>
        {
          events.map(event =>
            <li key={event.id}>
              <Suspense fallback={renderLoader}>
                <Event event={event} />
              </Suspense>

            </li>
          )
        }
      </ul>
    )
  }
}

export default EventList
