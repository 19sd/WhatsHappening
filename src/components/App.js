import React, { Component } from 'react';
import Header from './Header';

class App extends Component{
  static propTypes = {
    children:React.PropTypes.node
  }
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header />
           {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;