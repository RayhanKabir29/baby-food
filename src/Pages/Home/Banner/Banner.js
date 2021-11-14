import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Banner.css';

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
                           <div className="banner-text">
                           <h1>Get Fresh With Us</h1>
                            <p>From baby to big kid, we’re delivering mealtime, snacktime and more, right to your door.From baby to big kid, we’re delivering mealtime, snacktime and more, right to your door</p>
                            <Button variant="primary"> Get Started</Button>
                           </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Banner;