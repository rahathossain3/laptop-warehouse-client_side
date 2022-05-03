import { Carousel } from 'react-bootstrap';
import './Banner.css'


const Banner = () => {

    return (

        <div className='d-flex container justify-content-center align-items-center banner p-3'>
            <div className='title m-5' >
                <h3>Choose best Laptop form</h3>
                <h2>Laptop Warehouse</h2>
            </div>


            <div className='banner-slider'>

                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/8btw1sy/banner-1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className=' bg-dark bg-opacity-50 rounded-pill'>
                            <h4 className='m-0'>Hp Supper Cool</h4>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/yfYryPv/banner-2.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption className=' bg-dark bg-opacity-50 rounded-pill'>
                            <h4 className='m-0'>Asus ROG G1000</h4>
                        </Carousel.Caption>
                    </Carousel.Item>



                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/F64b1c5/banner-3.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption className=' bg-dark bg-opacity-50 rounded-pill'>
                            <h4 className='m-0'>Microsoft Surface g10</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div >

    );
};

export default Banner;