import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleProduct = ({product}) => {
    const{name, desc, age, price,_id,img} = product
    return (
        <div>
           
            <Card style={{margin:'20px'}}>
                <Card.Img variant="top" src={img} className="img-fluid" style={{height:'150px'}}/>
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>
                        <p> {desc}</p>
                        <h3> For {age} months babies</h3>
                       <h5>Price: {price}</h5>
                    </Card.Text>
                    <Link to={`/productDetails/${_id}`}><Button variant="primary">Buy Now</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleProduct;