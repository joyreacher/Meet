import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'


export default function Event ({ event }) {
  const [menu, setMenu] = useState(false)
  if(!event){
    return false
  } else {
    return (
      <div className='Event' data-test='event' key={event.id}>
        <h1 data-test='event-title' className='event-title' >{event.summary}</h1>
        <FontAwesomeIcon className={`event-icon event-icon-${!menu ? 'hide' : 'show'}`} data-test='event-icon' icon={!menu ? faChevronCircleDown : faChevronCircleUp} onClick={() => { !menu ? setMenu(true) : setMenu(false) }} />
        <div data-test={`event-details-${!menu ? 'hide' : 'show'}`} className={`event-details-${!menu ? 'hide' : 'show'}`}>
          <p className='event-description' data-test='event-description'>{event.description}</p>
          <p className='event-link'>{event.htmlLink}</p>
          <p className='event-date' data-test='event-date'>{new Date(event.start.dateTime).toDateString()}</p>
          <p className='event-location' data-test='event-location'>{event.location}</p>
        </div>
      </div>
    )
  }
  
}
