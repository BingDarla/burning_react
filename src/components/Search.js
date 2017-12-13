import React, {PureComponent as Component} from 'react'
import axios from 'axios';

// const SERVER_URL = "http://593d3fe7.ngrok.io/secrets.json"
// need to get to the route on the server get /flights
const FLIGHTS_URL = "http://localhost:5000/flights.json"

class SearchForm extends Component {

  render() {
    return (
      <div>
      <h4>Search Form Coming Soon?</h4>
      </div>
    )
  }
}


function Gallery (props) {
  return (
    <div>
    { props.flights.map( s => <p key={ s.id }>{ s.id } { s.flight_number } { s.origin } { s.destination } {s.airplane_id} <button></button></p> ) }
    </div>
  )
}


// airplane_id:
// 28
// date:
// null
// destination:
// "Hong Kong"
// flight_number:
// "BCJ100"
// id:
// 11
// origin:
// "Sydney"
// url:
// "http://localhost:5000/flights/11.json"


class Search extends Component {

  constructor () {
    super()

    this.state = { flights: []}

    const fetchFlights = () => {
      axios.get(FLIGHTS_URL).then( results => this.setState({ flights: results.data }) )
    }
  fetchFlights()
  }

  render() {
    return (
      <div>
        <h2>Search Page under construction...</h2>
        <SearchForm />
        <h2>List of flights</h2>
        <Gallery flights={ this.state.flights }/>
      </div>
    )
  }
}

export default Search
