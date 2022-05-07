import React, { useEffect, useState } from 'react';
import ItemDetails from '../../Items/ItemDetails/ItemDetails';
import Banner from '../Banner/Banner';

const Home = () => {

    // for items
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div>
            <Banner></Banner>

            <h2 className=' title text-center mt-5 mb-3'>Warehouse Items</h2>
            <hr className='mb-1' />
            <hr className='mt-1' />
            <div className='item-cart container'>
                {
                    products.slice(0, 6).map(product => <ItemDetails
                        key={product._id}
                        product={product}
                        editItem={false}
                    >
                    </ItemDetails>
                    )
                }

            </div>


        </div>
    );
};

export default Home;