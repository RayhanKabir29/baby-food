import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <div
             style={{
                backgroundImage: `url("https://i.ibb.co/dPyfYqz/6e6b1cd7a264e7044ee3dd1efa77bb42.png")`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center'
            }}>
            <div className="banner-section">
                <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <h1 className="text-center py-5 mt-5">Get Fresh With Us</h1>
                            <p className="text-center">From baby to big kid, we’re delivering mealtime, snacktime and more, right to your door.</p>
                            <Button variant="primary"> Get Started</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Banner;