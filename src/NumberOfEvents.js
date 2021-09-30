import React, { Component } from "react"
import { extractLocations, getEvents } from "./api"

class NumberOfEvents extends Component {
  constructor() {
    super()
    this.state = {
      query: 32,
      events: [],
      locations: []
    }
  }

  async componentDidMount() {
    await this.setState({
      events: this.props.events,
      locations: this.props.locations
    })
  }
  
  handleInputChanged = (e) => {
    const value = e.target.value
    const suggestions = this.props.locations.filter((location) => {
      if(value === ''){
        return false
      }
      return location
    })
    console.log(suggestions)
    console.log(this.props.updateEvents())
    // check for location value
    
    // if no location given return the specified number of events by date
    
    // if location if given search the events array for events matching location
    
    // number
    // const dates = []
    
    
    for(let i = 0; i < e.target.value; i++){
      console.log(this.state.events[i])
    }
    return this.setState({
      query: value
    })
    // const numberOfEvents = this.state.events.map((element, index )=> {
    //   let date = new Date(element.start.dateTime)
      // date.toUTCString()
      // console.log(date.toDateString())
      // console.log(date.toDateString())
      // dates.push(date.toDateString())
      
      // return element
      // });
    // sort dates 
    // console.log(dates)
    // console.log(numberOfEvents)
    
    // match date to id 
    
    // display event
    
    
    // element
    // const intersection = this.state.events.filter((element, index )=> {
      // this.state.locations.forEach(location => {

      // })
      
      // if(element.location === 'Berlin, Germany') {
      //   return element
      // }
      
      
      // this.state.locations.includes()
      // });
    // this.setState({
    //   query: value
    // })
  }

  render() {
    const { events } = this.props
    return (
      <div className='NumberOfEvents'>
        <p data-test='number'>Number of events</p>
        <div>
          <p data-test='number-of-events'>
          {this.state.events.length}
          </p>
        </div>
        <input
          name='events'
          data-test='text-box'
          type='text'
          value={this.state.query}
          onChange={(e) => {
            this.handleInputChanged(e)
          }}
        />
      </div>
    )
  }
  
}
export default NumberOfEvents