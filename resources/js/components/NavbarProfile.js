import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap'
export default class MenuProfile extends Component {

    render() {
        return (
            <Navbar expand="lg" className="navbargsprofile shadow p-3 mb-5 bg-white rounded "   >
                <Navbar.Brand href="#home">ISchool</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav >
                        <Nav.Link  className="pr-3" >Profile</Nav.Link>
                        <Nav.Link className="nav-link" href="#">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>         
            </Navbar>
        );
    }
};

if (document.getElementById('menuprofile')) {
    ReactDOM.render(<MenuProfile />, document.getElementById('menuprofile'));
}