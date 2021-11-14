import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './ProductDetails.css'
import useAuth from '../../hooks/useAuth';

const ProductDetails = () => {
    const {id} = useParams();
    const{user} = useAuth();
    const [product, setProduct] = useState([]);
    //const [singleProduct, setSingleProduct] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[]);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/orders',{
            method:'POST',
            headers:{
                'content-type':'application/js'
            },
            body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then( data =>{
                console.log(data)
            })         
    };
    return (
        <div>
           <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <img src={product.img} alt=""  style={{height:'350px', width:'550px'}}/>
                        <h2>Name:{product.name}</h2>
                        <p>Detais About the Product: {product.desc}</p>
                    </Col>
                    <Col sm={12} md={6}>
                        <h2 className="text-center mb-3">Order Your Product!</h2>
                        <div className="product-details">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input defaultValue={user.displayName} {...register("name", { required: true})} />
                                <input defaultValue={user.email} {...register("email", { required: true})} />
                                <input {...register("address", { required: true})} placeholder="Address"/>
                                <input {...register("phone", { required: true})} placeholder="Phone"/>
                                <input type="submit" value="Order"/>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductDetails;