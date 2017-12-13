import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>This is the home page</h2>
        <p>
          <Link to="/flights">flights</Link>
        </p>
      </div>
    );
  }
}

export default Home;
