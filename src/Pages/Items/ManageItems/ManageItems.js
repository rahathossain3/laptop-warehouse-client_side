import React, { useEffect, useState } from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';
import './ManageItems.css'

const ManageItems = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products);

    return (
        <div className='container text-center pt-4'>
            <h1 className='title '>Manage Warehouse Items</h1>
            <hr />


            <div className='item-cart'>

                {
                    products.map(product => <ItemDetails
                        key={product._id}
                        product={product}
                        editItem={true}
                    >
                    </ItemDetails>
                    )
                }
            </div>

        </div >
    );
};

export default ManageItems;