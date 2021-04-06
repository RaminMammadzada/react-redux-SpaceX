import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Missions from './components/Missions';
import MissionPage from './containers/MissionPage';
import About from './components/About';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/mission/:id" component={MissionPage} />
      <Route path="/missions" component={Missions} />
      <Route path="/" component={Missions} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
