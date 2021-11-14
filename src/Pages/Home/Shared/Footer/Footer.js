import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
        <Container>
            <Row>
            <Col xs={12} md={4}>
               <div className="location text-white">
               <h2>Baby Spoon By Kabir</h2>
               <h4>Location: Dhaka Banladesh</h4>
               <h4>Phone: +1234567</h4>
               <h4>Email: spoon@info.com</h4>
               </div>
            </Col>
            <Col xs={12} md={4}>
               <div className="footer-service text-white">
               <h2>Our Services</h2>
                <ul>
                    <li><Link to ="">Baby Care</Link></li>
                    <li><Link to ="">About Baby Health</Link></li>
                    <li><Link to ="">Best Food For Baby</Link></li>
                    <li><Link to ="">Child Specialist List</Link></li>
                    <li><Link to ="">Custom Order</Link></li>
                </ul>
               </div>
            </Col>
            <Col xs={12} md={4}>
               <h2 className="text-white">News Letter</h2>
               <p className="text-white">Best solution for your it startup business consecteturadipiscing elit.</p>
               <input type="email" name="" placeholder="Email" />
            </Col>
            </Row>
        </Container>
            </div>
        </div>
    );
};

export default Footer;