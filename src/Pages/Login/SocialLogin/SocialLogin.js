import React from 'react';
import './SocialLogin.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    let errorMessage;

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (loading) {
        <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorMessage = <p> {error?.message?.split('/')[1]?.split(')')[0]}</p>;
    }



    return (
        <div>
            <span className=' text-center text-capitalize  text-info'>  {errorMessage}</span>
            <br />
            <div className='d-flex mx-auto'>
                <button onClick={() => signInWithGoogle()} className='w-50 mx-auto social-btn'> <i className="fab fa-google social-icon" ></i> Google Sign In</button>
            </div>

        </div>
    );
};

export default SocialLogin;