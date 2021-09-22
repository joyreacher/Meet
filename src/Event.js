import React, { useState } from 'react'

export default function Event({ event }) {
  const [menu, setMenu] = useState(false)
  return (
    event.map(item => {
      return (
        <div data-test='event' className='Event' key={item.id}>
          <h1 data-test='event-title' onClick={() => {!menu ? setMenu(true) : setMenu(false)}}>{item.summary}</h1>
          <div data-test={`event-details-${!menu ? 'hide' : 'show'}`} onClick={() => {!menu ? setMenu(true) : setMenu(false)}} className={`Event-details ${!menu ? 'hide-details' : 'show-details'}`}>
            <p data-test='event-description'>{item.description}</p>
            <p data-test='event-location'>{item.location}</p>
          </div>
        </div>
      )
    })
  )
}
