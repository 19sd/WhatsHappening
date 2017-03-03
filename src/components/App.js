import React from 'react';
import Home from './Home';
import Root from './Root';
import User from './User';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

class App extends React.Component {
  render() {
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Root}>
          <IndexRoute component={Home} />
          <Route path="home" component={Home} />
          <Route path="user" component={User} />
        </Route>
      </Router>
    );
  }

}

export default App;