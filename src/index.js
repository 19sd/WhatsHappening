import React from 'react';
import ReactDOM from 'react-dom';
import routes from './components/routes';
import {Router, browserHistory} from 'react-router';

ReactDOM.render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('root')
);