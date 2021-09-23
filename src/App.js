import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
// mock data to run application in browser
import { mockData } from './mock-data';
import { extractLocations } from './api'
const locations = extractLocations(mockData)
class App extends Component {
  constructor(){
    super()
    this.state = {
      events: mockData
    }
  }

  render(){
    return (
      <div className="App">
        <NumberOfEvents events={mockData} />
        <CitySearch locations={locations} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
