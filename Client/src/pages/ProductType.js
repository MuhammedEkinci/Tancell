import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import SideNav from "../components/SideNav";
import OffCanvaseSidenav from "../components/OffCanvasSidenav";
import "../styles/products.css";

export default function ProductType(){

    const {type} = useParams();
    return (
        <>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className="product-filter">
                        <h1 id="page-title">{type}</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Container>
                    <Col lg={3} md={3} sm={12}>
                        <SideNav />
                        <OffCanvaseSidenav />
                    </Col>
                </Container>
            </Row>
        </>
    );
}