import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs-bg container-fluid'>
            <div className=' p-4 text-center'>
                <h1>Questions Answer </h1>
                <hr />
                <div className='blogs'>

                    {/* qus 1----------------- */}
                    <div className=' mb-3 mt-3 border-contain'>
                        <h1 className='d-flex'>
                            <div>
                                <samp className=' text-primary'>Qus 1:</samp>
                            </div>
                            <div>
                                <span className='blogs-title'>
                                    Difference between javascript and nodejs.
                                </span>
                            </div>
                        </h1>
                        <h3 className=' text-primary mb-3 mt-3'>Ans:</h3>
                        <div className='d-flex answer'>
                            <div className='answer-part'>
                                <ul>

                                    <h3 className='text-decoration-underline'> Authentication</h3>
                                    <li>Authentication verifies who the user.</li>
                                    <li> Authentication works through passwords, one-time pins, other information provided or entered by the user. </li>
                                    <li>  Authentication is visible to and partially changeable by the user.</li>
                                </ul>
                            </div>
                            <div className='answer-part'>
                                <ul>
                                    <h3 className=' text-decoration-underline'> Authorization</h3>
                                    <li>Authorization declare what resources a user can access.</li>
                                    <li> Authorization works through settings that are implemented and maintained by the System. </li>
                                    <li>  Authorization changeable by the user..</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    {/* qus 2----------------- */}
                    <div className=' mb-3 mt-3 border-contain'>
                        <h1 >
                            <samp className=' text-primary'>Qus 2:</samp>
                            <span className='blogs-title'>
                                Why are you using firebase? What other options do you have to implement authentication?
                            </span>
                        </h1>

                        <ul>
                            <h3 className=' text-primary mb-3 mt-3'>Ans: </h3>
                            <h3 className='text-decoration-underline'> Firebase using for</h3>

                            <h5>
                                Firebase provides easy-to-use SDKs, hosting, database managemen, ready-made UI libraries to authenticate users etc  to my app.
                            </h5>

                            <h3 className='text-decoration-underline'> Some Firebase options are</h3>
                            <li> Authentication.</li>
                            <li> Cloud Firestore.</li>
                            <li> Extensions.</li>
                            <li> Hosting. etc</li>

                        </ul>

                    </div>

                    {/* qus 3----------------- */}
                    <div className=' mb-3 mt-3 border-contain'>
                        <h1 >
                            <samp className=' text-primary'>Qus 3:</samp>
                            <span className='blogs-title'>
                                What other services does firebase provide other than authentication?
                            </span>
                        </h1>

                        <ul>
                            <h3 className=' text-primary mb-3 mt-3'>Ans: <span className=' text-black'>Other services does firebase provide other than authentication those are </span></h3>
                            <li>Cloud Firestore</li>
                            <li>Cloud Functions</li>
                            <li>Authentication</li>
                            <li>Hosting</li>
                            <li>Cloud Storage</li>
                            <li>Google Analytics</li>
                            <li>Predictions</li>
                            <li>Cloud Messaging</li>
                            <li>Dynamic Links</li>
                            <li>Remote Config</li>

                        </ul>

                    </div>

                </div>

            </div >
        </div>
    );
};

export default Blogs;