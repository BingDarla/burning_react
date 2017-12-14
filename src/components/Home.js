import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const URSER_URL = 'http://localhost:5000/users.json'


class HomeForm extends Component {
  constructor() {
    super();
    this.state = {
      content: ''
    }


//
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
  // this.setState( { content: ''});
}

  render () {
    return (
      <form onSubmit={ this._handleSubmit }>
        <input onChange={ this._handleChange } value={ this.state.content }></input>
        <input type="submit" value="Login..." />
      </form>
    )
  }
}


class Home extends Component {

  constructor () {
    super();
    this.state = {
      user: "" ,
      userList :[]
    };

    this.saveLogin = this.saveLogin.bind(this);
    this.userValid = this.userValid.bind(this);
    const fetchUser = () => {
    axios.get(URSER_URL).then( results => this.setState({userList: results.data.map(function(obj){  return obj.name}) } )
    )};

    fetchUser();
}





  userValid (s){
    let userFind = false;
    for (let i = 0;i<this.state.userList;i++){

      if (s.toLowerCase() === this.state.userList[i].toLowerCase()){
        console.log('User is valid');
        userFind = true;
        break;
      }
    }
    if (!userFind){
      console.log(s, 'User is not exist.');
      return(<p>User is not exist</p>)
    }
  }
  saveLogin(s) {
    console.log(s, "in the home form");

    this.setState({ user : s });
    console.log(this.state.userList);
    this.userValid(s);
  }



  render() {
    return (
      <div>

      <h1>This is the Home Page of Burning Airlines</h1>
      <HomeForm onSubmit={ this.saveLogin }/>
        <ul>
          <li>Welcome: {this.state.user}</li>
          <li className="showAtLogin"><Link to="/flights">flights</Link></li>
          <li className="showAtLogin"><Link to="/confirmations">confirmations</Link></li>
        </ul>
      </div>
    );
  }
}

export default Home;
