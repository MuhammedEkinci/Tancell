import React, {useState, useEffect} from "react"
import {Row, Col, Container} from "react-bootstrap";
import { useParams } from "react-router";
import Products from "../utils/products";
import ProductGallery from  "../components/ProductGallery";

export default function ViewProductPage(){
    const {productId} = useParams();
    return (
        <>
            <Container>
                <h1>{productId}</h1>
                <div className="view-product-section">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                        
                        </Col>
                        <Col lg={6} md={6} sm={12}>

                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
}