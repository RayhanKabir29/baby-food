import React, { useEffect, useState } from 'react';
import { Col, Container, Row,Button } from 'react-bootstrap';
import SingleProduct from '../../SingleProduct/SingleProduct';
import './Products.css';
import { Link, useLocation} from 'react-router-dom';

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
                    products.slice(0,location?.hash === `#home` ? 6 : products.length).map(product => <SingleProduct
                    key={product._id}
                    product={product}
                    >
                    </SingleProduct>)
                }
                </Col>
              </Row>
              <Row>
                <Col>
                <Link to="/products" style={{textDecoration:'none', display:'flex', justifyContent:'center'}}> <Button variant="success" className="m-3">Explore More Baby Food</Button></Link>
                </Col>
              </Row>
          </Container>
        </div>
    );
};

export default Products;