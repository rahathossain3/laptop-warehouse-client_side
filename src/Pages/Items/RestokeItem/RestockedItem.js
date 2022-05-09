import React, { useState } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useItemDetail from '../../../hooks/useItemDetails';
import './RestockedItem.css';

const RestockedItem = () => {

    let [restock, setRestock] = useState('');


    const { itemId } = useParams();
    // get single product
    const [product] = useItemDetail(itemId);

    //destructure product
    let { img, name, details, price, brandName, supplierName, email, quantity } = product;

    // for quantity 
    let finalQuantity;
    if (quantity <= 0 || quantity === 'null') {
        finalQuantity = <span className='item-tag text-danger'>Sold Out</span>
        quantity = 0;//----------
    }
    else {
        finalQuantity = <span className='item-tag text-success'>{quantity}</span>
    }

    //handle restock input
    const handleRestock = event => {
        setRestock(event.target.value);
    }

    //for refreshPage
    function refreshPage() {
        window.location.reload(false);
    }

    // for update quantity--ok
    const oldQuantity = parseInt(product.quantity);
    //set qut
    let newQuantity = oldQuantity + parseInt(restock);



    const handleRestockedItems = event => {

        // set new quantity
        const quantity = newQuantity;
        console.log(quantity);

        const updateItem = { quantity };

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
                alert('Quantity added successfully!!!');

                // setRestock(0);
                // setPlusQuantity = parseInt(product.quantity);
            })
        // console.log('quantity', quantity);
        refreshPage();

    }







    return (
        <div className='container text-center mt-4'>
            <h2 className='title m-3'>Update Your Product Stocks</h2>
            <div className='restacked-item mb-5 pb-2'>
                <div className='stock-img'>
                    <img src={img} alt="" />
                </div>
                <div className='stock-info m-2'>
                    <h2 className='text-primary mb-3'>{name}</h2>
                    <hr style={{ color: 'goldenrod' }} />
                    <div className=' text-start'>
                        <h6 className='item-details' title={details}>
                            <big className=' item-tag text-success'> Item Details: </big>{details}
                        </h6>

                        <ListGroupItem className='pt-0'>
                            <span className='item-tag'>Price: </span>
                            <span className='item-tag text-success'>{price} $</span>
                        </ListGroupItem>
                        <ListGroupItem className='pt-0'>
                            <span className='item-tag'>Brand Name: </span>
                            <span className='item-tag text-success'>{brandName}</span>
                        </ListGroupItem>
                        <ListGroupItem className='pt-0'>
                            <span className='item-tag'>Supplier Name: </span>
                            <span className='item-tag text-success'>{supplierName}</span>
                        </ListGroupItem>
                        <ListGroupItem className='pt-1'>
                            <span className='item-tag'>Supplier Email: </span>
                            <span className='item-tag text-success'>{email}</span>
                        </ListGroupItem>
                        <ListGroupItem className='pt-2 pb-2'>
                            <span className='item-tag'>Available Quantity: </span>
                            {finalQuantity}
                        </ListGroupItem>

                    </div>
                    <div className='stock-btn d-block  text-center px-5 mt-5'>
                        <button className='btn btn-warning me-2 m-2 rounded-2 delivery'>Delivery</button>

                        <>


                            <button onClick={handleRestockedItems} className='btn btn-success me-2 m-2 rounded-2 re-stock'>Re Stock</button>
                            <input onChange={handleRestock} type="number" name="restock" id="" placeholder='Re-Stock Quantity' />

                        </>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default RestockedItem;