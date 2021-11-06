import React from "react";
import {NavLink} from "react-router-dom";
import {Row, Col, Image} from "react-bootstrap";
import "./chooseType.css";

export default function ChooseType(){
    return (
        <section className="choose-type-section">
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <h1 id="section-title">CHOOSE TYPE OF PROTECTION FOR YOUR PHONE</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={4} sm={12}>
                    <div className="img-div">
                        <img className="type-img img-div bg-image hover-overlay hover-zoom hover-shadow ripple"src="https://m.media-amazon.com/images/I/41nSrAS0RbL._AC_.jpg" />
                        <h3 className="type-title"><NavLink className="type-description" to="#">3D Edge To Edge</NavLink></h3>                    
                    </div>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <div className="img-div">
                        <img className="type-img img-div bg-image hover-overlay hover-zoom hover-shadow ripple" src="https://m.media-amazon.com/images/I/612MzZeOG8L._AC_SX480_SY360_.jpg" />
                        <h3 className="type-title"><NavLink className="type-description" to="#">2.5D Tempered Glass</NavLink></h3>                    
                    </div>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <div className="img-div">
                        <Image className="type-img img-div bg-image hover-overlay hover-zoom hover-shadow ripple" src="https://m.media-amazon.com/images/I/51luw47NfLL._AC_SX480_SY360_.jpg" />
                        <h3 className="type-title"><NavLink className="type-description" to="#">Phone Cases</NavLink></h3>
                    </div>
                </Col>
            </Row>
        </section>
    );
}