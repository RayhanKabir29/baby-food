import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleProduct from '../../SingleProduct/SingleProduct';
import './Products.css';
import { useLocation } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const location = useLocation()
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then (data => setProducts(data))
    },[])
    return (
        <div id="products" >
          <Container>
              <Row>
                <Col className="single-product">
                    {
                    products.slice(0,location?.hash === `#products` ? products?.length:4 ).map(product => <SingleProduct
                    key={product.service_id}
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