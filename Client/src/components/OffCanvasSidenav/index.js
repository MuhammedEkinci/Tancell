import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { Offcanvas, Button } from "react-bootstrap";
import "./offcanvasSideNav.css";

export default function OffCanvaseSidenav(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div className="sidenav-toggle-btn">
            <Button variant="primary" onClick={handleShow}>
                <i class="fas fa-bars"></i>
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Product Categories</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="list-unstyled">
                        <li>
                            <NavLink className="nav-link sidenav-links" to="/products/3D-Edge-To-Edge">3D Edge To Edge</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link sidenav-links" to="/products/2.5D-Tempered-Glass">2.5D Tempered Glass</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link sidenav-links" to="/products/Phone-Cases">Phone Cases</NavLink>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}