import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

    let errorMessage;

    // sign in user from user and password
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // for reset password
    const [
        sendPasswordResetEmail,
        sending
    ] = useSendPasswordResetEmail(auth);




    // for loading----
    if (loading || sending) {
        <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }


    if (error) {
        errorMessage = alert(error?.message?.split('/')[1]?.split(')')[0]);
    }

    // for sign in
    const handleSignIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        signInWithEmailAndPassword(email, password);
        // console.log(email, password);
    }

    // for password send

    const handlePassReset = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Send Reset Link');
        }
        else {
            toast('Please enter Your Email')
        }
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

                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <p onClick={handlePassReset} style={{ margin: '10px' }} className='bg-dark bg-opacity-50 rounded-pill'>
                        <span className='mx-2 login-link reset'> Forgat Password  </span>
                    </p>

                    <Button className='mb-3 login-btn' variant="primary" type="login">
                        Login
                    </Button>

                    <p className='text-center mb-3'>
                        <span className='me-2'>  Are you a New User.?</span>
                        <Link to='/registration' className='login-link'>Please Registration  </Link>
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
                <ToastContainer />

            </div>
        </div>
    );
};

export default Login;