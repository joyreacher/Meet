import React, { PureComponent, Component, lazy, Suspense } from 'react';
import { ScatterChart, Scatter, Line, ZAxis, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './CSS/styles.css';
// import CitySearch from './CitySearch';
// import NumberOfEvents from './NumberOfEvents';
import Navbar from './Navbar';
// mock data to run application in browser
import { checkOnlineStatus, checkToken, extractLocations, getAccessToken, getEvents } from './api'
// import WelcomeScreen from './WelcomeScreen';
import { OnlineAlert } from './Alert';
import EventList from './EventList';
const CitySearch = lazy(() => import('./CitySearch'));
const NumberOfEvents = lazy(() => import('./NumberOfEvents'));
const WelcomeScreen = lazy(() => import('./WelcomeScreen'));
const Illustration = lazy(() => import('./Illustration'));

const data01 = [
  {
    "x": 100,
    "y": 200,
    "z": 200
  },
  {
    "x": 120,
    "y": 100,
    "z": 260
  },
  {
    "x": 170,
    "y": 300,
    "z": 400
  },
  {
    "x": 140,
    "y": 250,
    "z": 280
  },
  {
    "x": 150,
    "y": 400,
    "z": 500
  },
  {
    "x": 110,
    "y": 280,
    "z": 200
  }
];
const data02 = [
  {
    "x": 200,
    "y": 260,
    "z": 240
  },
  {
    "x": 240,
    "y": 290,
    "z": 220
  },
  {
    "x": 190,
    "y": 290,
    "z": 250
  },
  {
    "x": 198,
    "y": 250,
    "z": 210
  },
  {
    "x": 180,
    "y": 280,
    "z": 260
  },
  {
    "x": 210,
    "y": 220,
    "z": 230
  }
];

class App extends Component {
  constructor(){
    super()
    this.state = {
      events: [],
      locations: [],
      locationCurrent: '',
      numberOfEvents: '',
      eventsToShow:[],
      showWelcomeScreen: undefined,
      onlineErr: '',
      error: {
        location: ''
      }
    }
  }
  
  
  async componentDidMount() {
    this.mounted = true
    this.setState({ showWelcomeScreen: false })
    getEvents().then(events => {
      if (this.mounted){
        this.setState({
          events, locations: extractLocations(events)
          })
        if(!this.state.numberOfEvents){
          this.updateEvents([], 32)
        }
      }
    })
  }

  // async componentDidMount() {
  //   this.mounted = true
    
  //   let testConnection = await checkOnlineStatus()
  //     if (testConnection.status !== 200) {
  //       this.setState({
  //         onlineErr: 'Offline'
  //       })
  //     }
  //     const accessToken = localStorage.getItem('access_token')
  //     const isTokenValid = (await checkToken(accessToken)).error ? false : true
  //     const searchParams = new URLSearchParams(window.location.search)
  //     const code = searchParams.get('code')
  //     this.setState({ showWelcomeScreen: !(code || isTokenValid )})
  //     console.log(!(code || isTokenValid))
  //   if((code || isTokenValid) && this.mounted){
  //     if(this.state.onlineErr !== ''){
  //       this.setState({showWelcomeScreen: true})
  //     }
  //     getEvents().then(events => {
  //       if (this.mounted){
  //         this.setState({
  //           events, locations: extractLocations(events)
  //           })
  //         if(!this.state.numberOfEvents){
  //           this.updateEvents([], 32)
  //         }
  //       }
  //     })
  //   }
  // }

  componentWillUnmount() {
    this.mounted = false
  }
  
  updateEvents = (location, eventCount) => {
    this.setState({
      numberOfEvents: eventCount,
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
            numberOfEvents: locationEvents.length
          })
        }
        // if a suggested selection is selected
        // set --- events, locationCurrent, and numberOfEvents
        // locationCurrent --- stores a string value from the location parameter
        // ! when NumberOfEvents component calls this function location is and array containing all events [ all events ]
        return this.setState({
          events: locationEvents,
          locationCurrent: location,
          // when a location is selected clear the input field
          numberOfEvents: locationEvents.length,
          // reset container
          eventsToShow:[]
        })
      }
      // if the updateEvents is run from NumberOfEvents component -- return entire location object
      if(typeof(location) === 'object') {
        this.setState({
          error: {
            location: ''
          }
        })
        // iterate through events state based on eventCount parameter
        for(let i = 0; i < eventCount; i++){
          // show specific number of events based on the eventCount -- location is set to all
          //! if a user selects a location then presses the show all events button -- resets locationCurrent
          if(!this.state.locationCurrent || location === 'all'){
              this.state.eventsToShow.push(events[i])
              let uniqueValues = [...new Set(this.state.eventsToShow)] 
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
            })
            // error catch when a user enters a number higher than the number of events in a given area
            if(filtered[i] === undefined){
              this.setState({
                error: {
                  location: 'All events for ' + this.state.locationCurrent + ' are displayed'
                }
              })
            }
            //! if none of the above conditions are met add what is returned by 
            this.state.eventsToShow.push(filtered[i])
          }
          //! if user enters a higher number of events than there are ALL events -- keep from crashing 
          if(events[i] === undefined){
            this.setState({
              eventsToShow:[],
              // set to null to operate the ternary operator in NmberOfEvents - line 43 Events to display
              numberOfEvents: null,
              // Events display bug: will start showing all events instead of the specified location
              error:{
                location: 'All events for displayed'
              }
            })
            return false
          }
        }
        
        const unique = this.state.eventsToShow.filter((item, i )=> {
          if(item !== undefined){
            return item
          }
          })
        return this.setState({
          events: unique,
          eventsToShow: []
        })
      }
    })
  }

  getData = () => {
    const { locations, events } = this.state
    const data = locations.map((location) => {
      const number = events.filter(event => event.location === location).length
      const city = location.split(', ').shift()
      return { city, number }
    })
    console.log(data)
    return data
  }
  render(){
    const renderLoader = () => <p className='Alert'>Loading</p>;
    if(this.state.showWelcomeScreen === undefined){
      return (
        <div className="App" />
      )
    }
    return (
      <div className="App">
      <Suspense fallback={renderLoader}>
        <Illustration className='App__background' />
      </Suspense>
        <Navbar />
        <div className='main__container'>
          <div className='input__container'>
            <div className='input__container-inner'>
              <OnlineAlert  modifier={this.state.onlineErr === 'Offline' ? 'online-active' : 'online-hidden'} text={this.state.onlineErr} />
              <Suspense fallback={renderLoader}>
                <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
                <NumberOfEvents  events={this.state.events} errAlert={this.state.error.location} number={this.state.numberOfEvents} locations={this.state.locations} updateEvents={this.updateEvents}/>
              </Suspense>
            </div>
          </div>
          <div>
            <ScatterChart width={800} height={450}
              margin={{ top: 20, right: 40, bottom: 10, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type='category' dataKey="city" name="City" />
              <YAxis type='number' dataKey="number" name="Events" allowDecimals={false}/>
              <ZAxis dataKey="z" range={[64, 144]} name="score" unit="km" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Legend />
              <Scatter name="Events" data={this.getData()} fill="#82ca9d" />
              </ScatterChart>
            <Suspense fallback={renderLoader}>
              <EventList events={this.state.events} />
            </Suspense>
          </div>
          
        </div>
        {/* <Footer /> */}
        <Suspense fallback={renderLoader}>
          <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => getAccessToken() }/>
        </Suspense>
      </div>
    );
  }
}

export default App;
