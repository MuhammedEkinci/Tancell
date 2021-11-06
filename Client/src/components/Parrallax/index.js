import React from "react";
import {NavLink} from "react-router-dom";
import {Row, Col} from "react-bootstrap";
import "./parrallax.css";

export default function Parrallax(){
    return (
        <section className="parrallx-section">
            <Row>
                <Col lg={12} sm={12}>
                    <div className="parrallax-text">
                        <h1 id="parrallax-title">View All Our Products</h1>
                        <p>Click to checkout all of our products</p>
                        <NavLink id="view-products-btn" className="nav-link" to="/products">View Products</NavLink>
                    </div>
                </Col>
            </Row>
        </section>
    );
}