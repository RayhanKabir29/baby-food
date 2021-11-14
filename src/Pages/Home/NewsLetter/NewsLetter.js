import React from 'react';
import { Button, Container,Row } from 'react-bootstrap';
import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div>
            <h2 className="text-center m-5">Keep In Touch!</h2>

            <Container>
                <Row>
                <div className="news-letter">
                <input type="email" name="" id="" placeholder="Give Your mail Here"/>
                <Button variant="success" style={{margin:'10px'}}>Submit</Button>
            </div>
                </Row>
            </Container>
            
        </div>
    );
};

export default NewsLetter;