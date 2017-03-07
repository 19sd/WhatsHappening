import React from 'react';
import { browserHistory, Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName :'PRIYANKA'
    };
  }
  handleSelect(eventKey) {
    event.preventDefault();
    browserHistory.push(eventKey);
  }

  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link className="navbar-brand" to="/"><img className="img-responsive" src="imgs/logo.png" alt="logo"/></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight onSelect={this.handleSelect}>
            <NavItem eventKey='/aboutus' href="#">ABOUT US</NavItem>
            <NavDropdown eventKey='1' title={this.state.UserName} id="basic-nav-dropdown">
              <MenuItem eventKey='/profile'>PROFILE</MenuItem>
              <MenuItem eventKey='/settings'>SETTINGS</MenuItem>
            </NavDropdown>
            <NavItem eventKey='/createevent' href="#">CREATE EVENT</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}


