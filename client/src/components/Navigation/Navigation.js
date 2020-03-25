import React from 'react';
import './Navigation.css';
import {Navbar, Nav } from 'react-bootstrap'
import { withRouter } from "react-router";

const Navigation = props => {
    return(
    <>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Shopify</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto justify-content-end">
                    <Nav.Link onClick={() => (props.history.push('/'))} >Home</Nav.Link>
                    <Nav.Link onClick={() => (props.history.push('/view'))} >View</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>);
}

const NavigationWithRouter = withRouter(Navigation)
export default NavigationWithRouter;