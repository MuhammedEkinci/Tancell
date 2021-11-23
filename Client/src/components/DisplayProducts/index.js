import React, {useState} from "react";
import {Row, Col, Image} from "react-bootstrap";
import Products from "../../utils/products";

import "./displayProducts.css";

export default function DisplayProducts(){
    return (
        <div className="product-display">
            {Products.map((product, i) => {
                return(
                        <div className="product">
                            <Image 
                                className="product-img bg-image hover-overlay hover-zoom hover-shadow ripple" 
                                src={product.coverImage}
                                alt={product.coverImageAlt}
                                fluid
                            />
                            <a 
                                className="product-name"
                                href={product.Url}
                                target="_blank"
                            >
                                {product.name}
                            </a>
                        </div>
                )
            })}
        </div>
    )
}