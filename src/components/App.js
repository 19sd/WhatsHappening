import React from 'react';
import Header from './Header';
import Home from './Home';

class App extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header/>
            <Home/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;