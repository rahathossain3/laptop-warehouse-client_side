import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useItemDetail from '../../../hooks/useItemDetails';

const EditItem = () => {

    const { itemId } = useParams();

    // get single product
    const [product] = useItemDetail(itemId);

    const [user] = useAuthState(auth)

    //destructure product
    const { _id, img, name, details, price, brandName, supplierName, email, quantity } = product;


    return (
        <div>
            <h2>this is form edit item</h2>
            <h2>{product.name}</h2>


        </div>
    );
};

export default EditItem;