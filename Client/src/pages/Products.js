import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DisplayProducts from "../components/DisplayProducts";
import OffCanvaseSidenav from "../components/OffCanvasSidenav";
import SideNav from "../components/SideNav";
import "../styles/products.css";

export default function Products(){
    return (
        <>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className="product-filter">
                        <h1 id="page-title">All Products</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Container className="product-display-section">
                    <Col lg={3} md={3} sm={12}>
                        <SideNav />
                        <OffCanvaseSidenav />
                    </Col>
                    <Col lg={9} md={12} sm={12}>
                        <DisplayProducts />
                    </Col> 
                </Container>
            </Row>
        </>
    );
}