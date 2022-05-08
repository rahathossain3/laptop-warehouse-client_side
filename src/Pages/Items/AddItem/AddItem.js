import React from 'react';
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
            <h2>Add an Item</h2>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input value={val} className='mb-2 ' placeholder='Item Name' {...register("name", { required: true, maxLength: 30 })} />

                <textarea className='mb-2 ' placeholder='Item Details' {...register("details", { required: true })} />

                <input className='mb-2 ' placeholder=' Item Price $' type="number" {...register("price", { required: true })} />

                <input className='mb-2 ' placeholder='Item Brand Name' {...register("brandName", { required: true })} />

                <input className='mb-2 ' placeholder='Supplier Name' {...register("supplierName", { required: true })} />

                <input className='mb-2 ' placeholder='Item Quantity' type="number" {...register("quantity", { required: true })} />

                <input className='mb-2 ' placeholder='Supplier Email' type="email" {...register("email", { required: true })} />

                <input className='mb-2 ' placeholder='Photo URL' type="Text" {...register("img", { required: true })} />

                <input type='submit' value="Add service" />

            </form>
            <ToastContainer />
        </div>
    );
};

export default AddItem;