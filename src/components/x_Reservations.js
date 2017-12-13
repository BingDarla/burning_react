import React, {SuperComponent as Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'



class Reservations extends React.Component {

  constructor() {
    super();
      this.state = {
        row :10,
        col :6,
      seat: [],
      seatAvailable: [],
      seatReserved: []
    }
    this.seatGenerate = this.seatGenerate.bind(this);
  }

  seatGenerate(){
    let array = [];
    for (let i=1;i<=this.state.row;i++){
      for (let j=1;j<=this.state.col;j++){
        array.push(i.toString()+j.toString());
      }
    }
    this.setState({
      seat: array.slice(),
      seatAvailable:array.slice()})
  }


  onClickData(seat) {
    if(this.state.seatReserved.indexOf(seat) > -1 ) {
      this.setState({
        seatAvailable: this.state.seatAvailable.concat(seat),
        seatReserved: this.state.seatReserved.filter(res => res != seat)
      })
    } else {
      this.setState({
        seatReserved: this.state.seatReserved.concat(seat),
        seatAvailable: this.state.seatAvailable.filter(res => res != seat)
      })
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

class AvailableList extends React.Component {
  render() {
    const seatCount = this.props.available.length;
    return(
      <div className="left">
        <h4>Available Seats: ({seatCount == 0? 'No seats available' : seatCount})</h4>
        <ul>
          {this.props.available.map( res => <li key={res} >{res}</li> )}
        </ul>
      </div>
    )
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
