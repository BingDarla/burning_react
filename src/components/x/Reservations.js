import React, {SuperComponent as Component} from 'react';
import axios from 'axios';

const RESERVATION_URL = "http://localhost:5000/reservations.json";
const URSER_URL = 'http://localhost:5000/users.json';

class Reservations extends React.Component {

  constructor() {
    super();
      this.state = {
        userId:31,
        flightId:28,
        row :10,
        col :6,
        seat: [],
        seatReserved: []
    }
    //fetch the reserved seats
    this.saveSeats = this.saveSeats.bind(this);
    this.seatGenerate = this.seatGenerate.bind(this);

    const fetchSeats = () => {
    axios.get(RESERVATION_URL).then( results => this.setState({seatReserved: results.data.map(function(obj){return obj.seat_row_col})})  )


    // setTimeout( fetchSeats,4000); //Recursive
  }
  fetchSeats();
}

// save the reserved seats
  saveSeats(seat){
    axios.post(RESERVATION_URL,{user_id:this.state.userId, flight_id:this.state.flightId, seat_row_col:seat}).then(results => console.log(results))
    // then(results => {
    //   this.setState({seatReserved:[results.data.seat_row_col,...this.state.seatReserved ]})
    // });
    // this.setState({secrets: [...this.state.secrets,{content:s}]});  //without mutation
  }

  seatGenerate(){
    let array = [];
    for (let i=1;i<=this.state.row;i++){
      for (let j=1;j<=this.state.col;j++){
        array.push(i.toString()+j.toString());
      }
    }
    this.setState({
      seat: array.slice()
      })
  }


  onClickData(seat) {


    if(this.state.seatReserved.indexOf(seat) > -1 ) {
      // this.setState({
      //   seatAvailable: this.state.seatAvailable.concat(seat),
      //   seatReserved: this.state.seatReserved.filter(res => res != seat)
      // })
    } else

      {
        this.setState({
          seatReserved: this.state.seatReserved.concat(seat),
          // seatAvailable: this.state.seatAvailable.filter(res => res != seat)
        });

        this.saveSeats(seat);
      }
    }



  render() {
    return (
      <div>
        <h1>Seat Reservation System</h1>
        <button onClick={this.seatGenerate }>Generate Seat</button>
        <DrawGrid
          seat = { this.state.seat }
          available = { this.state.seatAvailable }
          reserved = { this.state.seatReserved }
          onClickData = { this.onClickData.bind(this) }
          />
      </div>
    )
  }
}

class DrawGrid extends React.Component {
  render() {
    return (
       <div className="container">
        <h2></h2>
        <table className="grid">
          <tbody>
              <tr>
                { this.props.seat.map( row =>
                  <td
                    className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
                    key={row} onClick = {e => this.onClickSeat(row)}>{row} </td>) }
              </tr>
          </tbody>
        </table>

       </div>
    )
  }

  onClickSeat(seat) {
    this.props.onClickData(seat);
  }
}



class ReservedList extends React.Component {
  render() {
    return(
      <div className="right">
        <h4>Reserved Seats: ({this.props.reserved.length})</h4>
        <ul>
          { this.props.reserved.map(res => <li key={res} >{res}</li>) }
        </ul>
      </div>
    )
  }
}


export default Reservations
