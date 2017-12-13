import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>home page</h1>

        <ul>
          <li><Link to="/flights">flights</Link></li>
          <li><Link to="/confirmations">confirmations</Link></li>
        </ul>
      </div>
    );
  }
}

export default Home;
