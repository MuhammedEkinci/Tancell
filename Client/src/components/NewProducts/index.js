import React, {useState} from "react";
import {Row, Col} from "react-bootstrap";
import newProducts from "../../utils/new-products";

import "./newProducts.css"

export default function NewProduct(){
    return (
        <section id="new-product-section" className="page-section wrapper">
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <h1 className="section-title">New Products</h1>
                </Col>
            </Row>
            <Row>
                {newProducts.map((product, i) => {
                    return(
                        <Col lg={4} md={4} sm={12}>
                            <div className="new-product">
                                <img className="new-product-img bg-image hover-overlay hover-zoom hover-shadow ripple" src={product.image} alt={product.alt}></img>
                                <a className="new-product-name" href={product.Url} target="_blank">{product.name}</a>
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </section>
    );
}