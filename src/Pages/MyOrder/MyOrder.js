import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();

    useEffect(()=>{
        fetch(`https://polar-hollows-25246.herokuapp.comgit /orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div>
            <h2>You have placed : {orders.length}</h2>
            <ul>
                {
                    orders.map(order => <li
                    key={order._id}
                    >{order.name} {order.email}</li>)
                }
            </ul>
        </div>
    );
};

export default MyOrder;