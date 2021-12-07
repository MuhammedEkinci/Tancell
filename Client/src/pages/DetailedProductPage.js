import React from "react";
import { useParams } from "react-router";
import {Row, Col, Button, Container, Image} from "react-bootstrap"; 
import Product from "../utils/products";
import "../styles/products.css";
import Image1 from "../images/phone-pic2.jpg";
import Image2 from "../images/phone-pic7.jpg";
import Image3 from "../images/phone-pic5.jpg";

import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';



export default function DetailedProductPage(){
    const {id} = useParams();

    //For now using custom array of images as objects for the gallery
    //need to use useState to make it more dynamic
    const images = [
        {
            src: Image1
        },
        {
            src: Image2
        },
        {
            src: Image3
        }
    ];

    const details = Product[0].About_This_Item.split("/");
    
    const descriptionImg = Product[0].description_Images;
    console.log(descriptionImg);

    return(
        <Container id="detailed-product-wrapper">
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <div className='carousel-container'>
                        <Carousel images={images} />
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <div className="product-description-container">
                        <h2 id="product-name">{Product[0].name}</h2>
                        <ul>
                            {details.map((detail, i) => {
                                return(
                                    <li key={i}>{detail}</li>
                                );
                            })}
                        </ul>
                        <p id="category"><strong>Category: </strong>{Product[0].category}</p>
                        <Button variant="dark" href={Product[0].AmazonLink} target="_blank" className="amazon-link-btn">View Product</Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <div className="description-wrapper">
                    <Col size={12}>
                        <h4 id="page-sub-title">DESCRIPTION</h4>
                        <hr size="12" width="100%" id="line-divider"></hr>
                    </Col>
                    <Col lg={12} sm={12}>
                        <p id="item-description">
                            {Product[0].description}
                        </p>
                    </Col>
                    <Row>
                        {descriptionImg.map((image,i) => {
                            return(
                                <Col lg={12} sm={12}>
                                    <Image key={i} src={image.descripImg} className="description-image" fluid />
                                </Col>
                            );
                        })}
                    </Row>
                </div>
            </Row>
        </Container>
    );
}