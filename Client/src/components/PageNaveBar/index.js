import React from "react";
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./pageNavbar.css";

import Logo from "../../images/tancel-logo.jpg";


export default function PageNavBar(){
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                    <Navbar.Brand href="/home">
                        <img src={Logo} 
                            id="tancell-logo">
                        </img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <NavLink className="nav-link" to="/homepage">Home</NavLink>
                            <NavDropdown title="Products" id="collasible-nav-dropdown">
                                <NavDropdown.Item><NavLink className="nav-link" to="/products">All Products</NavLink></NavDropdown.Item>
                            </NavDropdown>
                            <NavLink className="nav-link" to="/FAQ">FAQ</NavLink>
                            <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </>
    )
}