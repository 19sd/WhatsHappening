import React, { Component } from 'react';
import Header from './Header';

class App extends Component{
  static propTypes = {
    children:React.PropTypes.node
  }
  render() {
    return(
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            {this.props.children}
          </div>
        </div>
      </div>

    );
  }
}

export default App;