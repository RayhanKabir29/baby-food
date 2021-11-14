import React from 'react';
import { Container, Nav, Navbar,Button, NavDropdown } from 'react-bootstrap';
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
                <NavDropdown title="Log in" id="basic-nav-dropdown">
                    {user?.email?  <><Button onClick={logOut}>Log out</Button>
                    <Nav.Link as ={HashLink} to="/manageProducts">Manage Products</Nav.Link>
                    <Nav.Link as ={HashLink} to="/addProducts">Add Products</Nav.Link>
                    <Nav.Link as ={HashLink} to="/myOrder">My Order</Nav.Link>
                    <Nav.Link as ={HashLink} to="/review">Review</Nav.Link>
                    </>:
                        <Nav.Link as ={HashLink} to="/login">Login</Nav.Link>
                        }   
                    </NavDropdown> 
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