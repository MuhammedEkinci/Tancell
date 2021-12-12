import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {Row, Col, Button, Container, Image, Spinner} from "react-bootstrap"; 
import "../styles/products.css";
import Image1 from "../images/phone-pic2.jpg";
import Image2 from "../images/phone-pic7.jpg";
import Image3 from "../images/phone-pic5.jpg";
import API from "../utils/API";

import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';



export default function DetailedProductPage(){
    const {productId} = useParams();
    const [Product, setProduct] = useState([]);
    const [GalleryImages, setGalleryImages] = useState([]);
    const [Details, setDetails] = useState("");
    const [DescriptionImages, setDescriptionImages] = useState([]);
    const [loading, setLoading] = useState(false);
 

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            try{
                const item = await API.getOneProduct(productId);
                setProduct(item.data[0]);
                setGalleryImages(item.data[0].gallery_images);
                setDetails(item.data[0].aboutThisItem)
                setDescriptionImages(item.data[0].descriptionGallery);
            }catch (error){
                console.log(error)
            }
            setLoading(false);
        }
        getProduct();
    }, []);

    //images will hold all the imag src for the image gallery
    const images = [];

    //We loop through all the images and dynamically add the image src
    // as objects into images array
    GalleryImages.forEach((image) => {
        let temp = {}
        temp["src"] = image.imageURL;
        images.push(temp);
    });

    // We take the 
    const detail = Details.split("/");


    return(
        <>
        {loading ? <div className="spinner-wrapper"><Spinner animation="border" /></div> :
            <Container id="detailed-product-wrapper">
                <Row>
                    {/* Image Gallery */}
                    <Col lg={6} md={6} sm={12}>
                        <div className='carousel-container'>
                            <Carousel images={images} />
                        </div>
                    </Col>
                    {/* Image Gallery */}
                    {/* Product Details */}
                    <Col lg={6} md={6} sm={12}>
                        <div className="product-description-container">
                            <h2 id="product-name">{Product.productName}</h2>
                            <ul>
                                {detail.map((x, i) => {
                                    return(
                                        <li key={i} className="item-detail">{x}</li>
                                    );
                                })}
                            </ul>
                            <p id="category"><strong>Category: </strong>{Product.category}</p>
                            <Button variant="dark" href={Product.amazonLink} target="_blank" className="amazon-link-btn">View Product</Button>
                        </div>
                    </Col>
                    {/* Product Details */}
                </Row>
                <Row>
                    <div className="description-wrapper">
                        {/* Product Description */}
                        <Col size={12}>
                            <h4 id="page-sub-title">DESCRIPTION</h4>
                            <hr size="12" width="100%" id="line-divider"></hr>
                        </Col>
                        <Col lg={12} sm={12}>
                            <p id="item-description">
                                {Product.description}
                            </p>
                        </Col>
                        {/* Product Description */}
                        <Row>
                            {/* Product images */}
                            {DescriptionImages.map((image, i) => {
                                return (
                                    <Col lg={12} sm={12}>
                                        <Image key={i} src={image.descriptionImageURL} className="description-image" fluid />
                                    </Col>
                                )
                            })}

                        </Row>
                        {/* Related Products */}
                        <Row>
                            <Col size={12}>
                                <div className="related-product-section">
                                    <h4 id="page-sub-title">RELATED PRODUCTS</h4>
                                    <hr size="12" width="100%" id="line-divider"></hr>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Container>
        }
        </>
    
    );
}