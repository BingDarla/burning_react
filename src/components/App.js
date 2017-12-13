import React, { Component } from 'react';
import Search from './Search';
import Reservations from './Reservations'











class App extends Component {



  render() {
    return (
      <div className="App">
        <h1>CBJ Burning Airlines - Front End Page</h1>
        <Search />
        <Reservations />

      </div>
    );
  }
}

export default App;
