import React from 'react';
import {HashRouter as Router, Route } from 'react-router-dom';
import Flights from './components/Flights';
import Reservations from './components/Reservations';
import Confirmations from './components/Confirmations';
import Home from './components/Home';

export const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/flights" component={ Flights } />
      <Route exact path="/reservations" component={ Reservations } />
      <Route exact path="/confirmations" component={ Confirmations } />
    </div>
  </Router>
);

export default Routes
