import React, { Component } from 'react';
import Header from './Header';

export default class Root extends Component {
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
