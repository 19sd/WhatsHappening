import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
        <nav className="Header navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li><Link to="/home" href="#">Home</Link></li>
                <li><Link to="/user" href="#">User</Link></li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}
