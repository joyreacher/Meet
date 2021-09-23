import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
// mock data to run application in browser
import { mockData } from './mock-data';
import { extractLocations, getEvents } from './api'
const locations = extractLocations(mockData)
class App extends Component {
  constructor(){
    super()
    this.state = {
      events: mockData,
      locations: locations
    }
  }

  componentDidMount() {
    getEvents().then(events => {
      this.setState({events, locations: extractLocations(events)})
    })
  }

  updateEvents = (location) => {
    getEvents().then(events => {
      const locationEvents = (location === 'all') ? events : events.filter(event => event.location === location)
      this.setState({
        events: locationEvents
      })
    })
  }

  render(){
    return (
      <div className="App">
        <NumberOfEvents events={mockData} />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
