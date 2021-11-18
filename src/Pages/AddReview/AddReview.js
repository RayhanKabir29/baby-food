import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddReview.css';


const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://polar-hollows-25246.herokuapp.com/review', data)
        .then(res => {
            if(res.data.insertedId){
                alert('review added successfully');
                reset();
            }
        })
    };
    return (
        <div className="add-review">
        <h2 className="text-center">Add Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
         <input {...register("name", { required: true})}  placeholder="Name of Reviewer"/>
         <textarea {...register("review", { required: true})}  placeholder="Review Desc"/>
         <input type="submit" />
         </form>
    </div>
    );
};

export default AddReview;