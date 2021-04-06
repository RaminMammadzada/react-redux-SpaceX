import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import Navbar from './components/Navbar';
import Missions from './components/Missions';
import About from './components/About';

const store = createStore(rootReducer);

const Routes = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/missions" component={Missions} />
        <Route path="/" component={Missions} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default Routes;
