import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './App';
import AboutUs from './AboutUs';
import Home from './Home';
import CreateEvent from './CreateEvent';
import Profile from './Profile';
import Settings from './Settings';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="aboutus" component={AboutUs} />
    <Route path="createevent" component={CreateEvent} />
    <Route path="profile" component={Profile} />
    <Route path="settings" component={Settings} />
  </Route>
);