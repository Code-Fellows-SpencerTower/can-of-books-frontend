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
        <NavItem></NavItem>
        {this.props.user && <NavItem><Link to="/profile" className="nav-link"> Profile </Link></NavItem>}
        {this.props.user && <NavItem className="nav-link"><Button variant="outline-info" onClick={this.props.showModal}> Add Book </ Button></ NavItem>}
        {<NavItem className="justify-self-end ml-auto"><LogoutButton logoutHandler={this.props.logoutHandler} className="nav-link">Log Out</LogoutButton></NavItem>}
      </Navbar>
    )
  }
}

export default Header;
