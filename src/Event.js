import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'

export default function Event ({ event }) {
  const [menu, setMenu] = useState(false)
  if (!event) {
    return false
  } else {
    return (
      <div className='Event' data-test='event' key={event.id}>
        <p>{new Date(event.start.dateTime).toDateString()}</p>
        <p>{event.location}</p>
        <div className='event-title-container'>
          <h1 data-test='event-title' className='event-title'>{event.summary}</h1>
          <FontAwesomeIcon className={`event-icon event-icon-${!menu ? 'hide' : 'show'}`} data-test='event-icon' icon={!menu ? faChevronCircleDown : faChevronCircleUp} onClick={() => { !menu ? setMenu(true) : setMenu(false) }} />
        </div>
        <div data-test={`event-details-${!menu ? 'hide' : 'show'}`} className={`event-details-${!menu ? 'hide' : 'show'}`}>
          <p className='event-description' data-test='event-description'>{event.description}</p>
          <a href={event.htmlLink}><button className='event-link'>See this event</button></a>
        </div>
      </div>
    )
  }
}
