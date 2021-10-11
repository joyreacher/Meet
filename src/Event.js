import React, { useState } from 'react'

export default function Event ({ event }) {
  const [menu, setMenu] = useState(false)
  return (
    <div className='Event' data-test='event' key={event.id}>
      <h1 data-test='event-title' className='event-title' onClick={() => {!menu ? setMenu(true) : setMenu(false)}}>{event.summary}</h1>
      <div data-test={`event-details-${!menu ? 'hide' : 'show'}`} onClick={() => {!menu ? setMenu(true) : setMenu(false)}} className={`event-details-${!menu ? 'hide' : 'show'}`}>
        <p className='event-description' data-test='event-description'>{event.description}</p>
        <p className='event-link'>{event.htmlLink}</p>
        <p className='event-date' data-test='event-date'>{new Date(event.start.dateTime).toDateString()}</p>
        <p className='event-location' data-test='event-location'>{event.location}</p>
      </div>
    </div>
  )
}