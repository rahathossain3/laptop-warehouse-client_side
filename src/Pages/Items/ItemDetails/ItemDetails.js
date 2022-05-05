import React from 'react';

const ItemDetails = ({ product }) => {
    const { _id, img, name, details, price, brandName, supplierName, quantity } = product;


    return (
        <div>
            <h2>This is item details</h2>
            <h2>{_id}</h2>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <h2>{details}</h2>
            <h2>{price}</h2>
            <h2>{brandName}</h2>
            <h2>{supplierName}</h2>
            <h2>{quantity}</h2>


        </div>
    );
};

export default ItemDetails;