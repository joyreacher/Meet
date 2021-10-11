import React, { Component } from 'react';
import './CSS/styles.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import Navbar from './Navbar';
// mock data to run application in browser
import { extractLocations, getEvents } from './api'
import Footer from './Footer';
class App extends Component {
  constructor(){
    super()
    this.state = {
      events: [],
      locations: [],
      locationCurrent: '',
      numberOfEvents: '',
      eventsToShow:[],
      error: {
        location: ''
      }
    }
  }

  componentDidMount() {
    this.mounted = true
    // document.title = 'Meet'
    // window.scrollTo(0, 0)
    getEvents().then(events => {
      if (this.mounted){
        this.setState({
          events, locations: extractLocations(events),
          numberOfEvents: this.state.numberOfEvents === '' ? 32 : this.state.numberOfEvents,
          })
      }
    })
  }

  componentWillUnmount() {
    this.mounted = false
  }
  
  updateEvents = (location, eventCount) => {
    this.setState({
      error: {
        location:''
      }
    })
    // CALL FOR EVENTS
    getEvents().then(events => {
      // SEE ALL / SORT THROUGH LOCATIONS
      const locationEvents = (location === 'all' || !location) ? events : events.filter(event => event.location === location)
      
      // if a location is selected or show all button is pressed
      if(typeof(location) === 'string'){
        if(location === 'all'){
          // set --- events, locationEvents, and numberOfEvents
          return this.setState({
            events: locationEvents,
            locationCurrent: '',
            numberOfEvents: ''
          })
        }
        // if a suggested selection is selected
        // set --- events, locationCurrent, and numberOfEvents
        // locationCurrent --- stores a string value from the location parameter
        // ! when NumberOfEvents component calls this function location is and array containing all events [ all events ]
        return this.setState({
          events: locationEvents,
          locationCurrent: location,
          numberOfEvents: ''
        })
      }
      // if the updateEvents is run from NumberOfEvents component -- return entire location object
      if(typeof(location) === 'object') {
        this.setState({
          numberOfEvents: eventCount,
          error: {
            location: ''
          }
        })
        // iterate through events state based on eventCount parameter
        for(let i = 0; i < eventCount; i++){
          // show specific number of events based on the eventCount -- location is set to all
          //! if a user selects a location then presses the show all events button -- resets locationCurrent
          if(!this.state.locationCurrent || location === 'all' ){
              // console.log('wtf')
              // console.log(this.state.events[i])
              this.state.eventsToShow.push(events[i])
              // let filter = this.state.events.filter((event, index )=> event != undefined)
              let uniqueValues = [...new Set(this.state.eventsToShow)] 
              // console.log(uniqueValues)
              // let removeUndefined = uniqueValues.filter( value => value != undefined)
              // console.log(removeUndefined)
              this.setState({
                eventsToShow: uniqueValues
              })
          }
          // if a location is selected from suggestions and the user wants to shorten the number of events in that location
          if(this.state.locationCurrent){
            //? filter through each event from what is returned by getEvents()
            // store all events that match the locationCurrent state -- ignore the rest that do not match the location
            const filtered = events.filter(event=> {
              if(event.location === this.state.locationCurrent){
                return event.location
              } 
              return false
            })
            // error catch when a user enters a number higher than the number of events in a given area
            if(filtered[i] === undefined){
              this.setState({
                error: {
                  location: 'All events for ' + this.state.locationCurrent + ' are here'
                }
              })
              return this.setState({
                events: this.state.events
              })
            }
            //! if none of the above conditions are met add what is returned by 
            this.state.eventsToShow.push(filtered[i])
          }
          //! if user enters a higher number of events than there are ALL events -- keep from crashing 
          if(events[i] === undefined){
            this.setState({
              locationCurrent: '',
              error:{
                location: 'Exceeded number of events to show'
              }
            })
            return false
          }
        }
        
        const unique = this.state.eventsToShow.filter((item, i )=> {
          if(item === undefined){
            return false
          }
          return item
          } )
        return this.setState({
          events: unique,
          eventsToShow: []
        })
      }
    })
  }

  render(){
    return (
      <div className="App">
        <Navbar />
        <div className='main__container'>
          <div className='input__container'>
            <div className='input__container-inner'>
              <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
              <NumberOfEvents  events={this.state.events} number={this.state.numberOfEvents} locations={this.state.locations} updateEvents={this.updateEvents}/>
              <div className="error-container">
                <p>{ this.state.error.location === '' ? '' : this.state.error.location}</p>
              </div>
            </div>
          </div>
          <EventList events={this.state.events} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;