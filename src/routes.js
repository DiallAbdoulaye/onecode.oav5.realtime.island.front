import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from './components/Home';
import Games from './components/Games';
import NotFound from './components/NotFound';
import Magic from './components/Magic';
import Fast from './components/Fast';
import Quick from './components/Quick';



// create my component
const MyRoute = () => (
  <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/games" component={Games} />
        <Route path="/quick" component={Quick} />
        <Route path="/fast" component={Fast} />
        <Route path="/magic" component={Magic} />
        <Route component={NotFound} />
      </Switch>
  </Router>
);

export default MyRoute;
