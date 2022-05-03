import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Registration from '../Registration/Registration';
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

                    <p className='text-center text-warning'>Are you a New User.!?
                        <button className='btn btn-link text-warning text-decoration-none'>Please Registration  </button>
                    </p>


                </Form>
            </div>

        </div>
    );
};

export default Login;