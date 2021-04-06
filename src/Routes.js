import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Missions from './components/Missions';
import About from './components/About';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/missions" component={Missions} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
