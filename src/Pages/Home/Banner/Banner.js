import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {


    return (


        <div className='d-flex container justify-content-center align-items-center p-3'>
            <div >
                <h3 className='text-warning'>Choose best Laptop form</h3>
                <h2 className='text-'>Laptop warehouse</h2>
            </div>


            <div className='banner'>

                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/XyFq0Mt/banner-1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className='mb-5'>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/GMHyhqs/banner-2.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption className='mb-5'>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>



                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/RDW5HkM/banner-3.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption className='mb-5'>
                            <h3>Shoe's are bring Fashion</h3>
                            <p>We love what we do! Every design is original made by us or made buy customers design or other designers..</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div >

    );
};

export default Banner;