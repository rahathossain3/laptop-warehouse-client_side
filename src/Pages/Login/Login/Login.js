import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    return (
        <div className=' container-fluid from'>

            <div className=' entry-from  mx-auto text-white m-5 '>
                <h1 className='text-center p-1 mb-3'>Login</h1>
                <hr />
                <Form>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Your Email" required />

                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button className='w-25 mb-3' variant="primary" type="login">
                        Login
                    </Button>

                    <p className='text-center mb-3'>
                        <span className='me-2'>  Are you a New User.?</span>
                        <Link to='/registration' className='login-link'>Please Registration  </Link>
                    </p>

                </Form>

                <div className='text-center' >
                    <hr />
                    <h6 className='m-0 p-0'>Or</h6>
                    <hr />
                </div>
                <SocialLogin></SocialLogin>

            </div>
        </div>
    );
};

export default Login;