import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';


class HomeForm extends Component {
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
    super()
    this.state = { content: "" }
    this.saveLogin = this.saveLogin.bind(this);
  }

  saveLogin(s) {
    console.log(s, "in the home form");
    // s comes from _handleSubmit in SecretsForm.
    // it is the this.state.content passed in by this.props.onSubmit
    // this.setState( { secrets: [...this.state.secrets, s]}); //ref immutability, makes a new array and sets state sexcrets to this new array
    // axios.post(SERVER_URL, {content: s}).then(results => {
    //   this.setState( { secrets: [results.data, ...this.state.secrets]})
    // })
    this.setState({ content : s })
  }


  render() {
    return (
      <div>

      <h1>This is the Home Page of Burning Airlines</h1>
      <HomeForm onSubmit={ this.saveLogin }/>
        <ul>
          <li>Welcome: {this.state.content}</li>
          <li className="showAtLogin"><Link to="/flights">flights</Link></li>
          <li className="showAtLogin"><Link to="/confirmations">confirmations</Link></li>
        </ul>
      </div>
    );
  }
}

export default Home;
