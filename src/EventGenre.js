import React, { useEffect, Suspense } from "react"
import { PieChart, Pie, Sector, Cell, ScatterChart, Scatter, LabelList, Line, ZAxis, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CircleGraph from './pieChart'
function EventGenre({events}) {
  return (
    <>
    <ResponsiveContainer width='100%'>
      <Suspense fallback={<p>wtf</p>}>
        <CircleGraph style={{'margin': '0 auto'}} events={events}/>
      </Suspense>
    </ResponsiveContainer>
    </>
  )
}

export default EventGenre