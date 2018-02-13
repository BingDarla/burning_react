import React, {PureComponent as Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const URSER_URL = 'https://burning-airline.herokuapp.com/users.json'

class HomeForm extends Component {
  constructor() {
    super();
    this.state = {
      content: ''
    }

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    this.setState({content: e.target.value})
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.content)
  }

  render() {
    return (
      < form onSubmit = {
      this._handleSubmit} >
      <input onChange = {this._handleChange}
    value = {this.state.content} > < /input>
     <input type = "submit" value = "Login..." / > < /form>
    )
  }
}


class Home extends Component {

  constructor() {
    super();
    this.state = {
      user: "",
      userId: '',
      userList: []
    };

    this.saveLogin = this.saveLogin.bind(this);
    this.userValid = this.userValid.bind(this);

    const fetchUser = () => {
      axios.get(URSER_URL).then(results => this.setState({
        userList: results.data.map(function(obj) {
          return obj.name
        })
      }))
    };

    fetchUser();
  }




  saveLogin(s) {
    console.log(s, "in the home form");

    this.setState({
      user: s
    });

    this.userValid();
  }

  userValid() {
    console.log(this.state.userList);
    console.log(this.state.user);
    let tempUser = this.state.userList.filter(function(obj) {
      if (obj.toLowerCase() == this.state.user.toLowerCase()) return obj
    });
    console.log(tempUser);
  };



  render() {
    return ( <
      div >

      <
      h1 > This is the Home Page of Burning Airlines < /h1 > <HomeForm onSubmit = {
      this.saveLogin
    } /> <ul > <li > Welcome : {
      this.state.user
    } < /li> <
      li className = "showAtLogin" > < Link to = "/flights " > flights < /Link></li >
 < li className = "showAtLogin" > <Link to = "/confirmations" > confirmations < /Link></li > < /ul> <
      /div >);
  }
}

export default Home;
