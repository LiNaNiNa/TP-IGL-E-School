import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap'
export default class Menu extends Component {

    render() {
        return (
            <Navbar expand="lg" variant="dark" className="navbargs p-4 "   >
                <Navbar.Brand href="#home">ISchool</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav >
                        <Nav.Link  className="pr-3" >Login</Nav.Link>
                        <Nav.Link className="nav-link" href="#Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>         
            </Navbar>
        );
    }
};

if (document.getElementById('menu')) {
    ReactDOM.render(<Menu />, document.getElementById('menu'));
}