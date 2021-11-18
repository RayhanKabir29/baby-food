import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios'

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    
    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        let email = data.email;
        // console.log('data',data.email)
        const res = await axios.put(`https://polar-hollows-25246.herokuapp.com/users/admin`,{ email })
        console.log('res===',res)
        // fetch('http://localhost:5000/users/admin',{
        //     method:'PUT',
        //     headers:{
        //         'content-type':'application/js'
        //     },
        //     body: JSON.stringify(data?.email)
        //     })
        //     .then(res => res.json())
        //     .then( data =>{
        //         console.log('data=====',data)
        //     })         
    };
    return (
        <div className="text-center m-5">
            <h2>Make Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                               
                <input  {...register("email", { required: true})} />
                    <input type="submit" value="Make Admin"/>
                </form>
        </div>
    );
};

export default MakeAdmin;