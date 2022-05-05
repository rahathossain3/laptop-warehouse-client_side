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
                                    Difference between javascript and nodejs?
                                </span>
                            </div>
                        </h1>
                        <h3 className=' text-primary mb-3 mt-3'>Ans:</h3>
                        <div className='d-flex answer'>
                            <div className='answer-part'>
                                <ul>

                                    <h3 className='text-decoration-underline'> javascript</h3>
                                    <li>Javascript is a programming language that  used for writing scripts on the website.</li>
                                    <li> Javascript can run in any browser engine. </li>
                                    <li>  Some of the javascript frameworks are Reactjs.</li>
                                </ul>
                            </div>
                            <div className='answer-part'>
                                <ul>
                                    <h3 className=' text-decoration-underline'> nodejs</h3>
                                    <li>NodeJS is a Javascript runtime environment.</li>
                                    <li> V8 is the Javascript engine inside of node.js . </li>
                                    <li>  Some of the Nodejs modules are express etc.</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    {/* qus 2----------------- */}

                    <div className=' mb-3 mt-3 border-contain'>
                        <h1 className='d-flex'>
                            <div>
                                <samp className=' text-primary'>Qus 2:</samp>
                            </div>
                            <div>
                                <span className='blogs-title'>
                                    When should you use nodejs and when should you use mongodb?
                                </span>
                            </div>
                        </h1>
                        <h3 className=' text-primary mb-3 mt-3'>Ans:</h3>
                        <div className='d-flex answer'>
                            <div className='answer-part'>
                                <ul>

                                    <h3 className='text-decoration-underline'> Use nodejs</h3>
                                    <p> Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.</p>

                                </ul>
                            </div>
                            <div className='answer-part'>
                                <ul>
                                    <h3 className=' text-decoration-underline'> Use mongodb</h3>
                                    <p> SQL. NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.</p>
                                </ul>
                            </div>
                        </div>

                    </div>


                    {/* qus 3----------------- */}

                    <div className=' mb-3 mt-3 border-contain'>
                        <h1 className='d-flex'>
                            <div>
                                <samp className=' text-primary'>Qus 3:</samp>
                            </div>
                            <div>
                                <span className='blogs-title'>
                                    Differences between sql and nosql databases?
                                </span>
                            </div>
                        </h1>
                        <h3 className=' text-primary mb-3 mt-3'>Ans:</h3>
                        <div className='d-flex answer'>
                            <div className='answer-part'>
                                <ul>

                                    <h3 className='text-decoration-underline'> sql</h3>
                                    <li>RELATIONAL Database Management System (RDBMS).</li>
                                    <li> These databases are best for complex queries.</li>
                                    <li> Vertically Scalable.</li>
                                </ul>
                            </div>
                            <div className='answer-part'>
                                <ul>
                                    <h3 className=' text-decoration-underline'> nosql</h3>
                                    <li>Non-relational database system.</li>
                                    <li> These databases are not good for complex queries. </li>
                                    <li> Horizontally scalable.</li>
                                </ul>
                            </div>
                        </div>

                    </div>


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