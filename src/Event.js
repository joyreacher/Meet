import React, { useState } from 'react'

export default function Event({ event }) {
  const [menu, setMenu] = useState(false)
  return (
    event.map(item => {
      return (
        <div className='Event' key={item.id}>
          <h1 data-test='event-item'>{item.summary}</h1>
          <div data-test='event' onClick={() => {!menu ? setMenu(true) : setMenu(false)}} className={`Event-details ${!menu ? 'hide-details' : 'show-details'}`}>
            <p>{item.description}</p>
            <p>{item.location}</p>
          </div>
        </div>
      )
    })
  )
}
