import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {

    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    // sign in user from user and password
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    // for loading----
    if (loading) {
        <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }


    if (error) {

        // console.log(error.message.split('/')[1].split(')')[0]);
        alert(error?.message?.split('/')[1]?.split(')')[0]);
    }

    // for sign in
    const handleSignIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        signInWithEmailAndPassword(email, password);
        console.log(email, password);
    }



    return (
        <div className=' container-fluid from'>

            <div className=' entry-from  mx-auto text-white m-5 '>
                <h1 className='text-center p-1 mb-3'>Login</h1>
                <hr />
                <Form onSubmit={handleSignIn}>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter Your Email" required />

                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passRef} type="password" placeholder="Password" required />
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