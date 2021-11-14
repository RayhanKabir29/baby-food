import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleProduct = ({product}) => {
    const{name, desc, age, price,_id} = product
    return (
        <div>
            <Card>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>
                        Desc : {desc}
                        Age: {age} months
                        Price: {price}
                    </Card.Text>
                    <Link to={`/productDetails/${_id}`}><Button variant="primary">Buy Now</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleProduct;