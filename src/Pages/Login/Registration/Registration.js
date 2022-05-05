import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Registration = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const nameRef = useRef('');
    const navigate = useNavigate();

    // for set user name
    const [updateProfile] = useUpdateProfile(auth);


    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    let errorMessage;

    // sign in user from user and password

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    // for loading----
    if (loading) {
        <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }


    if (error) {
        errorMessage = alert(error?.message?.split('/')[1]?.split(')')[0]);
    }

    // for sign in -----
    const handleSignIn = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        const displayName = nameRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });

    }
    console.log(user);

    return (
        <div className='container-fluid from'>

            <div className=' entry-from  mx-auto text-white m-5 '>
                <h1 className='text-center p-1 mb-3'>Registration</h1>
                <hr />
                <Form onSubmit={handleSignIn}>
                    <Form.Group className="mb-4" controlId="text">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" required />

                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter Your Email" required />

                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passRef} type="password" placeholder="Password" required />
                    </Form.Group>


                    <Button className='login-btn mb-3' variant="primary" type="login">
                        Registration
                    </Button>

                    <p className='text-center mb-3'>
                        <span className='me-2'>  Have an Account.</span>
                        <Link to='/login' className='login-link'>Please Login </Link>
                    </p>

                </Form>

                {/* error message  */}
                {errorMessage}

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

export default Registration;