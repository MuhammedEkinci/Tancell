import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./footer.css";

export default function Footer(){
    return (
        <footer className="footer-section bg-dark text-center text-white">
            <Container>
                <Row>
                    <Col lg={4} md={4} sm={12}>
                        <section id="contact-info" className="footer-segment">
                            <h3 className="footer-section-title">Contact Info</h3>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <p>tancell@email.com</p>
                                </li>
                                <li>
                                    <p>+1 888-754-4567</p>
                                </li>
                                <li>
                                    <p>1275 Bloomfield Ave, New York, NJ 071123</p>
                                </li>
                            </ul>
                        </section>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <section id="products" className="footer-segment">
                            <h3 className="footer-section-title">Products</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <NavLink className="nav-link footer-links" to="/products/3D-Edge-To-Edge">3D Edge To Edge</NavLink>                                </li>
                                <li>
                                    <NavLink className="nav-link footer-links" to="/products/2.5D-Tempered-Glass">2.5D Tempered Glass</NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-link footer-links" to="/products/Phone-Cases">Phone Cases</NavLink>
                                </li>
                            </ul>
                        </section>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <section id="navigation" className="footer-segment">
                            <h3 className="footer-section-title">Navigation</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <NavLink className="nav-link footer-links" to="/homepage">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-link footer-links" to="/products">Products</NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-link footer-links" to="/FAQ">FAQ</NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-link footer-links" to="/Contact">Contact</NavLink>
                                </li>
                            </ul>
                        </section>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <section className="footer-segment" id="social-links">
                            <a className="btn btn-outline-light btn-floating m-1 social-btn" href="#" role="button">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="btn btn-outline-light btn-floating m-1 social-btn" href="#" role="button">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="btn btn-outline-light btn-floating m-1 social-btn" href="#" role="button">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a className="btn btn-outline-light btn-floating m-1 social-btn" href="#" role="button">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </section>
                    </Col>
                </Row>
            </Container>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div id="copyright">
                        © 2021 Copyright:Tancell
                    </div>
                </Col>
            </Row>
        </footer>
    );
}