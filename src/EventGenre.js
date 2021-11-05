import React, { useEffect, Suspense } from "react"
import { ResponsiveContainer } from 'recharts';
import CircleGraph from './pieChart'
function EventGenre({events}) {
  return (
    <ResponsiveContainer className='container__graph-circle' width='100%' height='100%'>
        <CircleGraph events={events}/>
    </ResponsiveContainer>
  )
}

export default EventGenre