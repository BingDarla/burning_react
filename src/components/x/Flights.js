import React, {PureComponent as Component} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

// const SERVER_URL = "http://593d3fe7.ngrok.io/secrets.json"
// need to get to the route on the server get /flights
const FLIGHTS_URL = "https://burning-airline.herokuapp.com/flights.json"

class SearchForm extends Component {
  constructor() {
    super();
    this.state = { content: '' }
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    this.setState ( { content: e.target.value } )
  }

_handleSubmit (e) {
  e.preventDefault();

  this.props.onSubmit ( this.state.content )
  // this.props.onSubmit this (SecretsForm) has many props, thagt come from parent (Secrets). One of them is called onSubmit
  // ( this.state.content ) is the argument that is passed back up. It comes from SecretsForm
  this.setState( { content: ''});
}

  render() {
    return (
      <div>
        <form onSubmit={ this._handleSubmit }>
        <input onChange={ this._handleChange } value={ this.state.content }></input>
        <input type="submit" value="Search Destinations" />
        </form>
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


  searchFlights(s) {
  console.log(s);
  }



  render() {
    return (
      <div>
        <h2>Search For a Flight...</h2>
        <SearchForm onSubmit={ this.searchFlights } />
        <h2>Available flights</h2>
        <Gallery flights={ this.state.flights }/>
      </div>
    )
  }
}

export default Flights
