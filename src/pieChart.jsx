import React from 'react'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'

const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS']

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  payload,
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <>

      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='top'
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    </>
  )
}
const CustomTooltip = ({ payload }, index) => {
  if (payload && index) {
    console.log(payload.city, index)
    return (
      <div className='custom-tooltip'>
        <p>{payload.city}</p>
        <p>{index}</p>
      </div>
    )
  }
  // if (active && payload && payload.length) {
  //   return (
  //     <div className="custom-tooltip">
  //       <p className="label">{`${label} : ${payload[0].value}`}</p>
  //       <p className="intro">{data}</p>
  //       <p className="desc">Anything you want can be displayed here.</p>
  //     </div>
  //   );
  // }

  return null
}

const text = (_, index) => {
  console.log(index)
  return index
}

function Graph ({ events }) {
  // map through genres
  const data = genres.map(genre => {
    // map through event props
    const value = events.filter(event => {
      const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g
      const removedPunctuation = event.summary.replace(regex, ' ')
      const summary = removedPunctuation.split(' ')
      if (summary.includes(genre)) {
        return true
      }
      return false
      // .length specifiy the number of events
    }).length
    return { name: genre, value }
  })
  return (
    <PieChart className='chart__pie' width={400} height={400}>
      <Pie
        // activeIndex={1}
        // activeShape={text}
        // onMouseEnter={CustomTooltip}
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={180}
        innerRadius={80}
        fill='#8884d8'
        dataKey='value'
        nameKey='name'
      >
        <Tooltip content={<CustomTooltip />} />

        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  )
}
export default Graph
