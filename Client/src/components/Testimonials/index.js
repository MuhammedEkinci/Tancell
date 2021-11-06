import React from "react";
import {Row, Col, Image, Carousel} from "react-bootstrap";

import GroupPic from "../../images/group-pic.jpg"
import GreyBackground from "../../images/grey-background.jpg";
import "./testimonials.css";

export default function Testimonials(){
    return(
        <section className="client-comments-section">
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <Image id="group-pic" src={GroupPic}/>
                </Col>
                <Col lg={6} md={6} sm={12}>
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={GreyBackground}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3 className="test-quote"><i class="fas fa-quote-left"></i></h3>
                                    <p className="test-comment">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                    <p className="test-name">By Ibrahim Yusuf</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={GreyBackground}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3 className="test-quote"><i class="fas fa-quote-left"></i></h3>
                                    <p className="test-comment">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  
                                    </p>
                                    <p className="test-name">By Ahmed Ali</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={GreyBackground}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3 className="test-quote"><i class="fas fa-quote-left"></i></h3>
                                    <p className="test-comment"> 
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                    <p className="test-name">By Mark Twain</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                </Col>
            </Row>
        </section>
    );
}