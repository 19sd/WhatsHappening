import React from 'react';
import NavLink from './Navlink';

export default class Header extends React.Component {
  render() {
    return (
        <nav className="Header navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li><NavLink to="/home" href="#">Home</NavLink></li>
                <li><NavLink to="/user" href="#">User</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}
