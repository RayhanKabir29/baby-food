import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
    const {id} = useParams();

    const [products, setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState({});

    useEffect(()=>{
        fetch('/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    useEffect(()=>{
        const foundproduct = products?.find(product=> product?.service_id===id)
        setSingleProduct(foundproduct)
    },[products])
    return (
        <div>
            <h2>Name: {singleProduct?.name}</h2>
            <h4>Doctor name: {singleProduct?.doctorname}</h4>
            <p>Description: {singleProduct?.desc}</p>
        </div>
    );
};

export default ProductDetails;