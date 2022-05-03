import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faF } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer mt-2 justify-content-between p-3 px-5'>
            <div className='d-flex flex-column ps-2'>
                <a className=' text-decoration-none footer-text ' href="https://www.facebook.com/Rahat.Imon.01/" target='blank'>
                    <i className="fa-brands fa-facebook "></i><span> Facebook</span>
                </a>
                <a className=' text-decoration-none footer-text' href="https://www.linkedin.com/in/rahathossain3/" target='blank'>
                    <i className="fa-brands fa-linkedin">  </i><span> Linkedin</span>
                </a>
                <a className=' text-decoration-none footer-text' href="https://www.facebook.com/Rahat.Imon.01/" target='blank'>
                    <i className="fa-brands fa-github"> </i><span> Github</span>
                </a>

            </div>
            <div>
                <p className=' footer-text mx-auto '>copyright <FontAwesomeIcon icon={faCopyright} /> Fashion BD warehouse</p>
            </div>

        </div >


    );
};

export default Footer;