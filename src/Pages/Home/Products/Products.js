import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleProduct from '../../SingleProduct/SingleProduct';
import './Products.css';
import { useLocation } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const location = useLocation()
    useEffect(()=>{
        fetch('https://polar-hollows-25246.herokuapp.com/products')
        .then(res => res.json())
        .then (data => setProducts(data))
    },[])
    return (
        <div id="products" >
          <Container>
          <h2 className="text-center text-danger m-3">Select For Your Baby</h2>
            <p className="text-center text-success m-3 px-5">According to your need You can selct the best Item from Us. According to your need You can selct the best Item from Us. According to your need You can selct the best Item from Us.According to your need You can selct the best Item from Us</p>
              <Row>
                <Col className="single-product">
                    {
                    products.slice(0,location?.hash === `#products` ? products?.length : 6).map(product => <SingleProduct
                    key={product._id}
                    product={product}
                    >
                    </SingleProduct>)
                }
                </Col>
              </Row>
          </Container>
        </div>
    );
};

export default Products;