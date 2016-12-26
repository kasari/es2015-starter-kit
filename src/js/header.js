import React from 'react'
import {Link} from 'react-router'
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">home</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to="/players">
            <NavItem>players</NavItem>
          </LinkContainer>
          <LinkContainer to="/hoge">
            <NavItem>hoge</NavItem>
          </LinkContainer>
          <LinkContainer to="/fuga">
            <NavItem>fuga</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    )
  };
}

module.exports = Header;
