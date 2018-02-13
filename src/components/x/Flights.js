import React, {PureComponent as Component} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

// const SERVER_URL = "http://593d3fe7.ngrok.io/secrets.json"
// need to get to the route on the server get /flights
const FLIGHTS_URL = "https://burning-airline.herokuapp.com/flights.json"

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
    { props.flights.map( s => <p key={ s.id }>{ s.id } { s.flight_number } { s.origin } { s.destination } {s.airplane_id} <button></button>  <Link to={`/reservations/`}>Book a seat</Link></p> ) }
    </div>
  )
}

// <Link to={`/users/${user.id}`}>Mateusz</Link>

class Flights extends Component {

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
        <h2>Available flights</h2>
        <Gallery flights={ this.state.flights }/>
      </div>
    )
  }
}

export default Flights
