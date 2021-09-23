import React from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
// mock data to run application in browser
import { mockData } from './mock-data';
import { extractLocations } from './api'
const locations = extractLocations(mockData)
function App() {
  return (
    <div className="App">
      <NumberOfEvents events={mockData} />
      <CitySearch locations={locations} />
      <EventList events={mockData} />
    </div>
  );
}

export default App;
