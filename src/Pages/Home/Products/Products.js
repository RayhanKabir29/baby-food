import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleProduct from '../../SingleProduct/SingleProduct';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

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
                    products.map(product => <SingleProduct
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