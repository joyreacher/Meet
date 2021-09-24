import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
// mock data to run application in browser
import { mockData } from './mock-data';
import { extractLocations, getEvents } from './api'
class App extends Component {
  constructor(){
    super()
    this.state = {
      events: [],
      locations: []
    }
  }

  componentDidMount() {
    getEvents().then(events => {
      if (this.mounted){
        this.setState({events, locations: extractLocations(events)})
      }
    })
  }

  componentWillUnmount() {
    this.mounted = false
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
