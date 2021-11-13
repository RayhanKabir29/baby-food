import React, { useState } from 'react';
import { Col, Container, Form, Row,Button, Spinner} from 'react-bootstrap';
import { Link,useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const[loginData, setLoginData] = useState({});
    const{user, isLoading,loginWithEmail, loginWithGoogle} = useAuth();
    
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLogin = e =>{
        loginWithEmail(loginData.email, loginData.password)
        .then(result=>{
            history.push(redirect_uri);
        })
        e.preventDefault();
    }
    const handleGoogleLogin = () =>{
        loginWithGoogle()
        .then(result=>{
            history.push(redirect_uri);
        })
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <h2 className="mt-3 text-dangeruos">Please Log in Here!</h2>
                        {!isLoading && <Form onSubmit={handleLogin} style={{width:'60%'}}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"
                                 name="email"
                                 onBlur={handleOnChange}
                                 />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" 
                                name="password"
                                onBlur={handleOnChange}
                                />
                            </Form.Group>
                            <Button  variant="primary" type="submit" style={{width:'100%'}} className="mb-3">
                                Log in
                            </Button>
                            <Link to="/register" style={{textDecoration:'none',color:'red',marginBotom:' 10px'}}>New Here? Please Register</Link>
                        </Form>}
                        <p style={{width:'80%', margin:'0 auto 10px'}}>================</p>
                        <Button onClick={handleGoogleLogin} style={{marginBottom:'10px', width:'30%'}} variant="primary">Google Login</Button>
                        {isLoading && <Spinner animation="grow" />}
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="log-in-imh">
                            <img src="https://i.ibb.co/bvytN7g/signin-image.jpg" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;