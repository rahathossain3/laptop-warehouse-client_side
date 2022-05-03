import React from 'react';
import './NotFound.css'

const Notfound = () => {
    return (
        <div className='d-flex flex-column  justify-content-center align-items-center not-found'>
            <h1 className='e-massage' >Oops!</h1>
            <h1 className='t-massage' >Not Found</h1>
            <img src="https://i.ibb.co/Df8YMPF/404-error-lost-in-space.gif" alt="" />

        </div>
    );
};

export default Notfound;