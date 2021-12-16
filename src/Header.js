import React from 'react';
import { Navbar, NavItem, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import LogoutButton from './LogoutButton';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {this.props.user && <NavItem><Link to="/profile" className="nav-link"> Profile </Link></NavItem>}
        {this.props.user && <NavItem className="nav-link"><Button variant="outline-info" onClick={this.props.showModal}> Add Book </ Button></ NavItem>}
        {this.props.user && <NavItem className="justify-self-end ml-auto"><LogoutButton onLogout={this.props.onLogout} className="nav-link">Log Out</LogoutButton></NavItem>}
      </Navbar>
    )
  }
}

export default Header;
