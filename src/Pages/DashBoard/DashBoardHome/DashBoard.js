import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import {Link,useRouteMatch,Switch,Route} from "react-router-dom";
import MakeAdmin from '../../MakeAdmin/MakeAdmin';
import ManageProducts from '../../MangeProducts/ManageProducts';
import AddProducts from '../../AddProducts/AddProducts';
import AddReview from '../../AddReview/AddReview';
import MyOrder from '../../MyOrder/MyOrder';

const DashBoard = () => {
    const{logOut, admin} = useAuth();
    let {path, url} = useRouteMatch();
    return (
    <>
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand as ={HashLink} to="/home#home"><span style ={{color: 'black'}}>Baby Spoon</span></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    {admin &&<Link style={{textDecoration:'none', marginRight:'10px'}} to={`${url}/manageProducts`}>Manage Order</Link>}
                   {admin && <Link style={{textDecoration:'none', marginRight:'10px'}} to={`${url}/addProducts`}>Add Order</Link>}
                   {admin && <Link style={{textDecoration:'none', marginRight:'10px'}} to={`${url}/admin`}>Make Admin</Link>}
                    <Link style={{textDecoration:'none', marginRight:'10px'}} to={`${url}/addReview`}> Add Review</Link>
                    <Link style={{textDecoration:'none', marginRight:'10px'}} to={`${url}/myOrder`}>My Order</Link>
                    <Link style={{textDecoration:'none'}} onClick={logOut}>Log out</Link>
                </Navbar.Collapse> 
            </Container>
        </Navbar>
        <Switch>
        <Route path={`${path}/admin`}>
         <MakeAdmin/>
        </Route>
        <Route path={`${path}/manageProducts`}>
         <ManageProducts/>
        </Route>
        <Route path={`${path}/addProducts`}>
         <AddProducts/>
        </Route>
        <Route path={`${path}/addReview`}>
         <AddReview/>
        </Route>
        <Route path={`${path}/myOrder`}>
         <MyOrder/>
        </Route>
      </Switch>
    </>
    );
};


export default DashBoard;