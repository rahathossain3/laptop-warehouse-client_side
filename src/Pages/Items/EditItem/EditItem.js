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



    const handleUpdateItem = event => {
        event.preventDefault();
        const name = event.target.details.value;
        const details = event.target.details.value;
        const email = event.target.email.value;
        const price = event.target.price.value;
        const supplierName = event.target.supplierName.value;
        const img = event.target.img.value;
        const quantity = event.target.quantity.value;

        const updateItem = { img, name, details, price, supplierName, email, quantity };

        // send data to the server
        const url = `http://localhost:5000/item/${itemId}`;
        // console.log(url);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('success', data);
                alert('Item added successfully!!!');
                event.target.reset();
            })
    }



    return (
        <div className='w-50 mx-auto'>
            <h2 className='title text-center mt-3'>Update {product.name} Item </h2>
            <hr style={{ color: 'goldenrod', border: '2px solid goldenrod' }} />
            <form className='d-flex flex-column mb-5' onSubmit={handleUpdateItem}>


                <label className='field-name' for="name">Item Name</label>
                <input className='mb-2 ' id='name' name="name" placeholder='Item Name' />

                <label className='field-name' for="details">Item Details</label>
                <textarea className='mb-2 ' id='details' name="details" placeholder='Item Details' />

                <label className='field-name' for="price">Item Price</label>
                <input className='mb-2 ' id='price' name="price" placeholder=' Item Price $' type="number" />

                <label className='field-name' for="supplierName">Supplier Name</label>
                <input className='mb-2 ' value={user.displayName} id='supplierName' name="supplierName" placeholder='Supplier Name' />

                <label className='field-name' for="email">Supplier Email</label>
                <input className='mb-2 ' id='email' value={user.email} name="email" placeholder='Supplier Email' type="email" required />

                <label className='field-name' for="quantity">Item Quantity</label>
                <input className='mb-2 ' id='quantity' name="quantity" placeholder='Item Quantity' type="number" />

                <label className='field-name' for="img">Item Image</label>
                <input className='mb-2 ' id='img' name="img" placeholder='Item Photo URL' type="Text" />


                <input className='btn btn-primary w-50 mx-auto mt-2' type='submit' value="Update Item" />


            </form>
        </div>
    );
};

export default EditItem;