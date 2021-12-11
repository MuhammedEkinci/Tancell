import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import SideNav from "../components/SideNav";
import OffCanvaseSidenav from "../components/OffCanvasSidenav";
import "../styles/products.css";
import DisplayCategoryProducts from "../components/DisplayCategoryProducts";

export default function ProductType(){

    const {category} = useParams();
    return (
        <>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className="product-filter">
                        <h1 id="page-title">{category}</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Container className="product-display-section">
                    <Col lg={3} md={3} sm={12}>
                        <SideNav />
                        <OffCanvaseSidenav />
                    </Col>
                    <Col lg={9} md={12} sm={12} className="products-displayed-area">
                        <DisplayCategoryProducts productCategory={category}/>
                    </Col> 
                </Container>
            </Row>
        </>
    );
}