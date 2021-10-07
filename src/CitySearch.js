import React, { Component } from 'react';
class CitySearch extends Component {
  constructor() {
    super()
    this.state = {
      query: 'Munich',
      suggestions: [],
      showSuggestions: false,
      locations: [],
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
    // filter the state of suggestions
    if(parseInt(event.target.value)) {
      console.log("Only letters please")
      this.setState({ error: { input: "Only letters - location"}})
    }
    let value = event.target.value
    if(value === ''){
      return this.setState({
        query: ''
      })
    }
    if(typeof(this.props.locations) === 'object'){
      suggestions = this.props.locations.filter((location) => {
        return location.toUpperCase().indexOf(value.toUpperCase()) > -1
      })
    }
    this.setState({
      query: value,
      suggestions
    })
  }

  // Will handle changing the state of query when clicked
  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion
    })
    return this.props.updateEvents(suggestion)
  }

  render() {
    return (
      <div className='CitySearch'>
        <p>Search for a city {this.state.error.input === '' ? '' : this.state.error.input}</p>
        <input
          type='text'
          className='city'
          // pass the value of state into input
          value={this.state.query}
          onChange={this.handleInputChanged}
          onFocus={() => { this.setState({ showSuggestions: true })}}
        />
        <ul className="suggestions" style={this.state.showSuggestions ? {} : { display: 'none' }}>
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
          <button className='CitySearch__btn' key='all' onClick={() => this.handleItemClicked("all")}>
            <b>See all citites</b>
          </button>
        </ul>
      </div>
    )
  }
}

export default CitySearch