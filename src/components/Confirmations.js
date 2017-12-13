import React, {PureComponent as Component} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

const CONFIRMATION_URL = "http://localhost:5000/flights.json"

function Gallery (props) {
  return (
    <div>
    { props.flights.map( s => <p key={ s.id }>{ s.id } { s.flight_number } { s.origin } { s.destination } {s.airplane_id} <button></button>  <Link to={`/reservations/`}>Book a seat</Link></p> ) }
    </div>
  )
}


class Confirmations extends Component {
  constructor() {
      super()
      this.state = { flights: [] }
      // this.save = this.saveSecret.bind(this);
      const fetchFlights = () => {
      axios.get(CONFIRMATION_URL).then( results => this.setState({flights: results.data}))

      }
      fetchFlights();
  }
  render () {
    return (
      <div>
        <h2>Confirmation Page</h2>
        <Gallery flights={ this.state.flights }/>
      </div>
    )
  }
}

export default Confirmations
