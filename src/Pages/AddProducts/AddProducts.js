import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProducts.css';

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/products', data)
        .then(res => {
            if(res.data.insertedId){
                alert('product added successfully');
                reset();
            }
        })
    };
  
    return (
       <div className="add-products">
           <h2 className="text-center">Add Product</h2>
           <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true})}  placeholder="Product Name"/>
            <textarea {...register("desc", { required: true})}  placeholder="Desc"/>
            <input type="number" {...register("price")}  placeholder="Price"/>
            <input type="number" {...register("age", { min: 3, max: 24 })} placeholder="Age"/>
            <input {...register("img")} placeholder="Img-URL"/>
            <input type="submit" />
            </form>
       </div>
    );
};

export default AddProducts;