import React, { useRef } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useItemDetail from '../../../hooks/useItemDetails';
import './RestockedItem.css';

const RestockedItem = () => {
    // const reStockInput = useRef()

    const { itemId } = useParams();
    // get single product
    const [product] = useItemDetail(itemId);

    //destructure product
    const { _id, img, name, details, price, brandName, supplierName, email, quantity } = product;

    // for quantity
    let finalQuantity;
    if (quantity <= 0) {
        finalQuantity = <span className='item-tag text-danger'>Sold Out</span>
    }
    else {
        finalQuantity = <span className='item-tag text-success'>{quantity}</span>
    }



    // // for re-stock
    // const handleRestockedItems = event => {

    //     const reStockQuantity = event.target.restock.value;
    //     console.log(reStockQuantity);

    // }


    return (
        <div className='container text-center mt-4'>
            <h2 className='title m-3'>Update Your Product Stocks</h2>
            <div className='restacked-item'>
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
                    <div className='stock-btn  text-center px-5 mt-5'>
                        <button className='btn btn-warning me-2 m-2 rounded-2 delivery'>Delivery</button>

                        <>

                            <button className='btn btn-success me-2 m-2 rounded-2 re-stock'>Re Stock</button>
                            <input type="text" name="restock" id="" placeholder='Re-Stock Quantity' />

                        </>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestockedItem;