import React, { useState } from 'react';
import { Col, Container, Form, Row,Button, Spinner, Alert } from 'react-bootstrap';
import { Link,useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const[loginData, setLoginData] = useState({});
    const {user,addUser,isLoading,authError} = useAuth();
    const history = useHistory()
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = {...loginData};
        newRegisterData[field] = value;
        setLoginData(newRegisterData);
    }
    const handleRegister = e =>{
        if(loginData.password!==loginData.password2){
            alert('password did not match')
            return;
        }
        addUser(loginData.email, loginData.password,history);
        e.preventDefault();
    }
    return (
        <>
             <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <h2 className="mt-3 text-dangeruos">Pleas Register Here!</h2>
                       {!isLoading && <Form onSubmit={handleRegister} style={{width:'60%'}}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your Name" 
                                name="name"
                                onBlur={handleOnBlur}
                                 />  
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" 
                                name="email"
                                onBlur={handleOnBlur}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" 
                                name="password"
                                onBlur={handleOnBlur}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Re -Type Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                name="password2"
                                onBlur={handleOnBlur}
                                />
                            </Form.Group>
                            <Button style={{width:'100%', marginBottom:'10px'}} variant="primary" type="submit">
                                Register Now
                            </Button>
                            <Link to ="/login" style={{textDecoration:'none',color:'red',marginBotom:' 10px'}}>Already Have an Account! Log in Here</Link>
                        </Form>}
                        {isLoading && <Spinner animation="grow" />}
                        {user?.email && <Alert variant="success">User Created successfully</Alert>}
                        {authError && <Alert variant="danger">{authError}</Alert>}
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="log-in-imh">
                            <img src="https://i.ibb.co/VHk7ZZT/signup-image.jpg" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Register;