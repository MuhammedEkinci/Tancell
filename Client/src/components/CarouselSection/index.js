import React, { useState } from "react";
import { Carousel, Row, Col, Image } from "react-bootstrap";

import Image1 from "../../images/newProducts/12-mini.jpg";
import Image2 from "../../images/newProducts/12-pro-max.jpg";
import Image3 from "../../images/newProducts/12-pro.jpg";
import Image4 from "../../images/phone-pic4.jpg";

import "../CarouselSection/carousel.css";

export default function CarouselSection() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            fade
            className="page-section"
            id="carousel-section"
          >
            <Carousel.Item interval={1000}>
              <Image
                className="d-block w-100 carousel-pic"
                src={Image1}
                alt="First slide"
                fluid
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <Image
                className="d-block w-100 carousel-pic"
                src={Image2}
                alt="Second slide"
                fluid
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <Image
                className="d-block w-100 carousel-pic"
                src={Image3}
                alt="Third slide"
                fluid
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </>
  );
}
