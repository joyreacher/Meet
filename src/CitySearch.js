import React, { Component } from 'react';
import { InfoAlert, ErrorAlert } from './Alert'
class CitySearch extends Component {
  constructor() {
    super()
    this.state = {
      query: 'Enter a city name',
      suggestions: [],
      showSuggestions: false,
      locations: [],
      infoText:'',
      error: {
        input: ''
      }
    }
  }

  componentDidMount(){
    this.setState({
      locations: this.props.locations
    })
  }

  handleInputChanged = (event) => {
    let suggestions
    let value = event.target.value
    // filter the state of suggestions
    if(parseInt(event.target.value)) {
      return this.setState({
        query: value,
        error: { input: 'Only Letters Please'}
      })
    }
    
    if(value === ''){
      return this.setState({
        query: '',
        error: { input: ""},
        infoText: '',
        suggestions:[]
      })
    }
    if(typeof(this.props.locations) === 'object'){
      suggestions = this.props.locations.filter((location) => {
        return location.toUpperCase().indexOf(value.toUpperCase()) > -1
      })
      // if a users begins to type in a city that returns no suggestions
      if(suggestions.length === 0){
        return this.setState({
          query: value,
          infoText: 'We can not find the city you are looking for. Please try another city.',
          suggestions: []
        })
      }
    }
    this.setState({
      infoText: '',
      query: value,
      suggestions
    })
  }

  // Will handle changing the state of query when clicked
  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false,
      infoText:'',
      error: { input: ''}
    })
    return this.props.updateEvents(suggestion)
  }

  render() {
    return (
      <div className='CitySearch'>
        <div className='CitySearch__heading'>
          <label for='city' className='CitySearch__label'>Search for a city </label>
          <button className='CitySearch__btn' key='all' onClick={() => this.handleItemClicked("all")}>
              <b>See all citites</b>
          </button>
        </div>
        
        
        <InfoAlert modifier='citysearch-info' text={this.state.infoText} />
        <ErrorAlert modifier='citysearch' text={this.state.error.input} />
        <input
          id='city'
          className='city'
          type='text'
          // pass the value of state into input
          value={this.state.query}
          onChange={this.handleInputChanged}
          onFocus={() => { this.setState({ query: '', showSuggestions: true })}}
        />
        <ul className="suggestions" style={this.state.showSuggestions ? {} : { visibility: 'hidden' }}>
          {
            this.state.suggestions.map(suggestion => {
              return (<li 
                  key={suggestion}
                  onClick={() => {
                    this.handleItemClicked(suggestion)
                    }}>
                  {suggestion}
                </li>)
            })
          }
          
        </ul>
        
      </div>
    )
  }
}

export default CitySearch