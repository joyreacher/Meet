import React, { Component } from 'react';
import './CSS/styles.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import Navbar from './Navbar';
// mock data to run application in browser
import { mockData } from './mock-data';
import { extractLocations, getEvents } from './api'
import Footer from './Footer';
class App extends Component {
  constructor(){
    super()
    this.state = {
      events: [],
      locations: [],
      numberOfEvents: 3
    }
  }

  componentDidMount() {
    this.mounted = true
    // document.title = 'Meet'
    // window.scrollTo(0, 0)
    getEvents().then(events => {
      if (this.mounted){
        this.setState({events, locations: extractLocations(events)})
      }
    })
  }

  componentWillUnmount() {
    this.mounted = false
  }

  updateEvents = (location, eventCount) => {
    
    // console.log('EVNEt Num ' + eventCount)
    if (!eventCount){
      eventCount = this.state.numberOfEvents
    }
    
    if(eventCount && location !== 'all') {
      getEvents().then(event => {
        for (let i = 0; i < eventCount; i++){
          
          let date = new Date(event[i].start.dateTime)
          date.toUTCString()
          
          // console.log('EVENT ' + event[i].summary + ' IS AT ' + location + ' ' + date.toDateString())
          this.setState({
            events: event
          })
        }
      })
    }
    
    getEvents().then(events => {
      const locationEvents = (location === 'all') ? events : events.filter(event => event.location === location)
        this.setState({
          events: locationEvents
        })
      
      
      
    })
  }

  eventCount = () => {
    console.log('wtf')
  }

  render(){
    return (
      <div className="App">
        <Navbar />
        <div className='main__container'>
          <div className='input__container'>
            <NumberOfEvents  events={this.state.events} number={this.state.numberOfEvents} locations={this.state.locations} updateEvents={this.updateEvents}/>
            <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
          </div>
          <EventList events={this.state.events} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
