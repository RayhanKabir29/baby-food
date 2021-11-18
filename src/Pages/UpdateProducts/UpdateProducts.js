import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './UpdateProducts.css';

const UpdateProducts = () => {
    const [product, setProduct] = useState({})
    const{id} = useParams();

    //handle onChange
    const handleNameChange =e =>{
        const updateName = e.target.value;
        const upDateProductName = {name:updateName , desc:product.desc, price:product.price, img:product.img}
        setProduct(upDateProductName);
    }
    const handleDescChange =e =>{
        const updateDesc = e.target.value;
        const upDateProductDesc = {name:product.name , desc:updateDesc, price:product.price, img:product.img}
        setProduct(upDateProductDesc);
    }
    const handlePriceChange = e =>{
        const updatePrice = e.target.value;
        const upDateProductPrice = {name:product.name , desc:product.desc, price:updatePrice, img:product.img}
        setProduct(upDateProductPrice);
    }
    const handleImgChange = e =>{
        const updateImgUrl = e.target.value;
        const upDateProductImg = {name:product.name , desc:product.desc, price:product.price, img:updateImgUrl}
        setProduct(upDateProductImg);
    }
    const handleSubmit = e =>{
        const url = `https://polar-hollows-25246.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    setProduct({});
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    
    useEffect(()=>{
        const url = `https://polar-hollows-25246.herokuapp.com/products/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setProduct(data))
    },[])
    return (
        <>
            <div className="update-products">
            <h2 className="text-center">Update Product</h2>
            <form onSubmit={handleSubmit}>
            <input onChange={handleNameChange} type="text" value={product.name || ''}/>
            <textarea onChange={handleDescChange} type="text" value={product.desc || ''}/>
            <input onChange={handlePriceChange} type="number" value={product.price || ''}/>
            <input onChange={handleImgChange} value={product.img || ''}/>
            <input type="submit" value="Update"/>
            </form>
            </div>
        </>
    );
};

export default UpdateProducts;