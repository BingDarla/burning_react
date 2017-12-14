import React, {PureComponent as Component} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

const CONFIRMATION_URL = "http://localhost:5000/reservations.json"

function Gallery (props) {
  return (
    <div className="confirmation">
    { props.flights.map( s => <p key={ s.id }>
      Name: { s.user.name}{'  '}
      Flight Number: { s.flight.flight_number }{'  '}
      Origin: { s.flight.origin }{'  '}
      Destination: { s.flight.destination }{'  '}
      Seat Number: { s.seat_row_col }
      </p> ) }
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
        <h1>Confirmation Page</h1>

        <Gallery flights={ this.state.flights }/>

      </div>
    )
  }
}

export default Confirmations
