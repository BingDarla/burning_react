import React from 'react';
import {HashRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Flight from './components/Flight.js';
import Reservation from './components/Reservation.js';

export const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/flights" component={Flight } />
      <Route path="/flights/:userName" component={Flight } />
      <Route path="/reservation" component={ Reservation}/>
      <Route path="/reservation/:flight_id" component={ Reservation}/>

    </div>
  </Router>
);

export default Routes
