import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <div className='footer justify-content-between p-3 px-5'>
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
                <p className=' footer-text mx-auto '>copyright <FontAwesomeIcon icon={faCopyright} /> Laptop warehouse</p>
            </div>

        </div >


    );
};

export default Footer;