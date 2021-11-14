import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';



const DashBoard = () => {
    const{user, logOut} = useAuth();
    return (
        <>
        <div className="top-header">
        </div>
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand as ={HashLink} to="/home#home"><span style ={{color: 'black'}}>Baby Spoon</span></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                
                    {user?.email?  <>
                    <Nav.Link as ={HashLink} to="/manageProducts">Manage Order</Nav.Link>
                    <Nav.Link as ={HashLink} to="/addProducts">Add Order</Nav.Link>
                    <Nav.Link as ={HashLink} to="/admin">Make Admin</Nav.Link>
                    <Nav.Link as ={HashLink} to="/addReview"> Add Review</Nav.Link>
                    <Nav.Link as ={HashLink} to="/myOrder">My Order</Nav.Link>
                    <Link style={{textDecoration:'none'}} onClick={logOut}>Log out</Link>
                    </>:
                        <Nav.Link as ={HashLink} to="/login">Login</Nav.Link>
                        }   
                    
               <Navbar.Text>
                </Navbar.Text>
                </Navbar.Collapse> 
            </Container>
        </Navbar>
    </>
    );
};


export default DashBoard;