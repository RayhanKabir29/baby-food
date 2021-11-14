import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleReview from '../../SingleReview/SingleReview';
import './Review.css';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://polar-hollows-25246.herokuapp.com/review')
        .then(res => res.json())
        .then (data => setReviews(data))
    },[])
    return (
        <div >
          <Container>
          <h2 className="text-center text-danger m-3">Our Happy Client Say</h2>
              <Row>
                <Col className="single-review">
                    {
                    reviews.map(r => <SingleReview
                    key={r._id}
                    r={r}
                    >
                    </SingleReview>)
                }
                </Col>
              </Row>
          </Container>
        </div>
    )
};

export default Review;