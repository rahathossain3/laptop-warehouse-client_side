import React, { useEffect, useState } from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';

const ManageItems = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h1>This is items: {products.length}</h1>
            <ItemDetails></ItemDetails>
        </div>
    );
};

export default ManageItems;