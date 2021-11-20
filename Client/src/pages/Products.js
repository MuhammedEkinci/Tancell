import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
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
                <Container>
                    <Col lg={3} md={1} sm={12}>
                        <SideNav />
                        <OffCanvaseSidenav />
                    </Col>
                </Container>
            </Row>
        </>
    );
}