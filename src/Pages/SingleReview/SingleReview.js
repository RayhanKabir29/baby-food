import React from 'react';
import { Card} from 'react-bootstrap';


const SingleReview = ({r}) => {
    const {name, review} = r;
    return (
        <div>  
            <Card style={{margin:'20px'}}>
                <Card.Body>
                    <Card.Title>Reviewer: {name}</Card.Title>
                    <Card.Text>
                        <p> {review}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleReview;