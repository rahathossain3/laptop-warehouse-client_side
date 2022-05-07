import React, { useEffect, useState } from 'react';
import useItems from '../../../hooks/useItems';
import ItemDetails from '../ItemDetails/ItemDetails';
import './ManageItems.css'

const ManageItems = () => {

    const [products, setProducts] = useItems([]);


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