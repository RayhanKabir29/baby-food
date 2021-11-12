import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <div className="footer-section">
                <Container>
                    <Row>
                        <Col xs={12} md={3}>
                            <h1>Footer One</h1>
                        </Col>
                        <Col xs={12} md={3}>
                        <h1>Footer One</h1>
                        </Col>
                        <Col xs={12} md={3}>
                        <h1>Footer One</h1>
                        </Col>
                        <Col xs={12} md={3}>
                        <h1>Footer One</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;