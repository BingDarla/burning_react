import React, {PureComponent as Component} from 'react';
import { Link } from 'react-router-dom';
import Flight from './Flight.js';

const URSER_URL = 'https://burning-airline.herokuapp.com/users.json';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      userName: ''
    }
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    this.setState({userName: e.target.value.toUpperCase()});
  }

  _handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h1>Burning Airlines<span id='hello'></span></h1>
        <div className='login' id='log'>
          <p>Username</p>
          <input onChange={this._handleChange}/>
          <button onClick={this._handleSubmit}><Link to={{pathname: '/flights/' + this.state.userName}}>Login</Link></button>
        </div>
      </div>

    );
  }
}

export default Home;
