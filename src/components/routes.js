import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './App';
import User from './User';
import Home from './Home';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="user" component={User} />
  </Route>
);