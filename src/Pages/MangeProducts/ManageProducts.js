import React, { useEffect, useState } from 'react';
import { Table,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://polar-hollows-25246.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handleDelete = (id) =>{
      const confirmation = window.confirm('Are You Sure?');
      if(confirmation){
        const url = `https://polar-hollows-25246.herokuapp.com/products/${id}`;
        fetch(url, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount){
                alert('deleted')
                const remaining = products.filter(product => product._id !==id );
                setProducts(remaining);
            }
        })
      }
    }
    return (
        <div>
        <h2 className="text-center">Service Action</h2>
        <div className="manage-service text-center">
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Service Name</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {products?.map(product => 
            <tr key={product?._id}>
            <td>{product?.name}</td>
            <td>
            <Link to ={`/update/${product._id}`}>
            <Button variant="info" className="me-3">Edit</Button>
            </Link>
            <Button variant="danger" className="me-3" onClick={()=> handleDelete(product._id)}>Delete</Button>
            </td>
            </tr>
            ) }
        </tbody>
        </Table>
        </div>
        
    </div>
    );
};

export default ManageProducts;