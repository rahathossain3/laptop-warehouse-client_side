import React from 'react';
import './AddItem.css'
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddItem = () => {

    const { register, handleSubmit } = useForm();


    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast('Item Add successfully');

            })
    };

    //const { img, name, details, price, brandName, supplierName, email, quantity } = product;

    return (
        <div className='w-50 mx-auto'>
            <h2 className='title text-center mt-3'>Add Item in Laptop Warehouse</h2>
            <hr style={{ color: 'goldenrod', border: '2px solid goldenrod' }} />

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                <label className='field-name' for="name">Item Name</label>
                <input className='mb-2 ' id='name' placeholder='Item Name' {...register("name", { required: true, maxLength: 30 })} />

                <label className='field-name' for="details">Item Details</label>
                <textarea className='mb-2 ' id='details' placeholder='Item Details' {...register("details", { required: true })} />

                <label className='field-name' for="price">Item Price</label>
                <input className='mb-2 ' id='price' placeholder=' Item Price $' type="number" {...register("price", { required: true })} />

                <label className='field-name' for="brandName">Item Brand Name</label>
                <input className='mb-2 ' id='brandName' placeholder='Item Brand Name' {...register("brandName", { required: true })} />

                <label className='field-name' for="supplierName">Supplier Name</label>
                <input className='mb-2 ' id='supplierName' placeholder='Supplier Name' {...register("supplierName", { required: true })} />

                <label className='field-name' for="quantity">Item Quantity</label>
                <input className='mb-2 ' id='quantity' placeholder='Item Quantity' type="number" {...register("quantity", { required: true })} />

                <label className='field-name' for="email">Supplier Email</label>
                <input className='mb-2 ' id='email' placeholder='Supplier Email' type="email" {...register("email", { required: true })} />

                <label className='field-name' for="img">Item Image</label>
                <input className='mb-2 ' id='img' placeholder='Item Photo URL' type="Text" {...register("img", { required: true })} />

                <input type='submit' value="Add service" />

            </form>
            <ToastContainer />
        </div>
    );
};

export default AddItem;