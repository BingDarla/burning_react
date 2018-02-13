import React, {PureComponent as Component} from 'react';
import axios from 'axios';
import Result from './Result.js'

const FLIGHT_URL ="https://burning-airline.herokuapp.com/flights.json";


 class FlightSearch extends Component {
  constructor(){
    super();
    this.state={
      origin:'',
      destination:'',
    };
   this._handleChange_origin=this._handleChange_origin.bind(this);
   this._handleChange_destination=this._handleChange_destination.bind(this);
   this._handleSubmit= this._handleSubmit.bind(this);
  }
  _handleChange_origin(e){
    this.setState({origin:e.target.value});
    console.log(e.target.value);
  }
  _handleChange_destination(e){
    this.setState({destination:e.target.value});
    console.log(e.target.value);
  }
  _handleSubmit(e){
    e.preventDefault();
    this.props.onSubmit(this.state.origin,this.state.destination);
  }
  render(){
    return(
      <div>
        <div>
          <h2>Please choose your flight</h2>
          <form className = 'flightSearch' onSubmit ={this._handleSubmit}>
            <label>Origin
              <select value = {this.state.origin} onChange = {this._handleChange_origin}>
                <option value =""></option>
                <option value ="Sydney">Sydney</option>
                <option value ="Hong Kong">Hong Kong</option>
                <option value ="Brisban">Brisban</option>
              </select>
            </label>
            <label>Destination
              <select value = {this.state.destination} onChange = {this._handleChange_destination}>
                <option value =""></option>
                <option value ="Sydney">Sydney</option>
                <option value ="Hong Kong">Hong Kong</option>
                <option value ="Brisban">Brisban</option>
              </select>
            </label>
            <input type="submit" value="Search Flighs" />
          </form>
        </div>
      </div>
    )
  }
}

class Flight extends Component {
  constructor(props){
    super(props);
    this.state={
      flights:[],
      userName:props.match.params.userName,
    };
    this.fetchFlights = this.fetchFlights.bind(this);
  }

  fetchFlights(origin,destination){
    return axios.get(FLIGHT_URL).then(results=>{
      console.log(results.data);
      let flights=results.data.filter((f)=>{return (f.origin ==origin && f.destination ==destination);})
     console.log(flights);
     this.setState({flights:flights});
     console.log(this.state);
     console.log('find');
    })
  };



  render(){
    return(
      <div>
      <h2>Buring Airlines, Hello {this.state.userName}</h2>
      <FlightSearch onSubmit = {this.fetchFlights}/>
      <Result flights = {this.state.flights} user = {this.state.userName}/>

      </div>
    )
  }
}
export default Flight
