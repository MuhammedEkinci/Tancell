import React from "react";
import {Row, Col, Container, Form, FloatingLabel, Button} from "react-bootstrap";
import "../styles/contact.css";

export default function Products(){
    return (
        <div className="contact-section-wrapper">
            <Container>
                <Row>
                    <Col size={12}>
                        <h1 id="contact-title">Contact Us</h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <Form.Floating className="mb-3 ">
                            <Form.Control
                                id="floatingInputCustom"
                                placeholder="Bob"
                            />
                            <label htmlFor="floatingInputCustom">First Name</label>
                        </Form.Floating>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <Form.Floating className="mb-3 right-form">
                            <Form.Control
                                id="floatingInputCustom"
                                placeholder="Smith"
                            />
                            <label htmlFor="floatingInputCustom">Last Name</label>
                        </Form.Floating>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                    </Col> 
                    <Col lg={6} md={6} sm={12}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Phone"
                            className="mb-3 right-form"
                        >
                            <Form.Control type="phone" placeholder="Phone" name="phone"/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12} sm={12} id="message-row">
                        <FloatingLabel controlId="floatingTextarea2" label="Message">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave your message here"
                            style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col size={12}>
                        <div className="send-btn-section">
                            <Button variant="dark" id="send-mesg-btn">SEND Message</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}