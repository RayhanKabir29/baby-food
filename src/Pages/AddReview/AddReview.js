import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddReview.css';
import ReactStars from "react-rating-stars-component";


const AddReview = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    
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

        <form onSubmit={handleSubmit(onSubmit)}>
        <h5>User Rating: <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                />,</h5>
         <input {...register("name", { required: true})}  placeholder="Name of Reviewer"/>
         <textarea {...register("review", { required: true})}  placeholder="Review Desc"/>
         <input type="submit" />
         </form>
    </div>
    );
};

export default AddReview;