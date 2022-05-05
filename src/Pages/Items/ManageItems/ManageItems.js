import React, { useEffect, useState } from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';

const ManageItems = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products);

    return (
        <div>
            <h1>This is items: {products.length}</h1>


            <div className='d-flex'>

                {
                    products.map(product => <ItemDetails
                        key={product._id}
                        product={product}
                    >
                    </ItemDetails>
                    )
                }
            </div>

        </div >
    );
};

export default ManageItems;