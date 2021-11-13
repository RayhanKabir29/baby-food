import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../../hooks/useAuth';



const Header = () => {
    const{user, logOut} = useAuth();
    return (
        <>
        <div className="top-header">
           <Link to="/products"> <Button variant="primary">Explore</Button></Link>
        </div>
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand as ={HashLink} to="/home#home"><span style ={{color: 'black'}}>Baby Spoon</span></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link as ={HashLink} to="/home#home">Home</Nav.Link>
                <Nav.Link as ={HashLink} to="/home#about-us">About Us</Nav.Link>
                <Nav.Link as ={HashLink} to="/home#products">Products</Nav.Link>
               { user?.email?
               <Nav.Link onClick={logOut}>Log Out</Nav.Link>
               :<Nav.Link as ={HashLink} to="/login">Login</Nav.Link> }  
               <Navbar.Text>
                    <div className="sign-in-msg text-primary">
                    Signed in as: 
                    </div>
                </Navbar.Text>
                </Navbar.Collapse> 
            </Container>
        </Navbar>
    </>
    );
};

export default Header;