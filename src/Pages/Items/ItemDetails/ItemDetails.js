import React from 'react';
import { Button, Card, CardGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import './ItemDetails.css'

const ItemDetails = ({ product, editItem }) => {
    const { _id, img, name, details, price, brandName, supplierName, quantity } = product;

    // for quantity
    let finalQuantity;
    if (quantity <= 0) {
        finalQuantity = <span className='item-tag text-danger'>Sold Out</span>
    }
    else {
        finalQuantity = <span className='item-tag text-success'>{quantity}</span>
    }

    //for button option
    let itemsButtons
    if (!editItem) {
        itemsButtons = <button className='btn btn-success'>Stock Update</button>
    }
    else {
        itemsButtons = < >
            <button className='btn btn-success me-4'>Edit item</button>
            <button className='btn btn-danger'>Delete Item </button>
        </>
    }



    return (

        <CardGroup className='item-card'>
            <Card className='item-box'>
                <Card.Img className='card-img' variant="top" src={img} />
                <Card.Body className='item-info'>
                    <Card.Title className='item-title'>{name}</Card.Title>
                    <Card.Text className='item-details' title={details}>
                        {
                            details.slice(0, 100)
                        }
                    </Card.Text>
                    <ListGroup className="list-group-flush mt-0 ">
                        <ListGroupItem>
                            <span className='item-tag'>Price: </span>
                            <span className='item-tag text-success'>{price} $</span>
                        </ListGroupItem>
                        <ListGroupItem>
                            <span className='item-tag'>Brand Name: </span>
                            <span className='item-tag text-success'>{brandName}</span>
                        </ListGroupItem>
                        <ListGroupItem>
                            <span className='item-tag'>Supplier Name: </span>
                            <span className='item-tag text-success'>{supplierName}</span>
                        </ListGroupItem>
                        <ListGroupItem>
                            <span className='item-tag'>Available Quantity: </span>
                            {finalQuantity}
                        </ListGroupItem>

                    </ListGroup>

                </Card.Body>
                <Card.Footer className='d-flex justify-content-center text-center py-2 bg-white'>
                    {itemsButtons}
                </Card.Footer>
            </Card >
        </CardGroup >


        // {/* <h2>{_id}</h2>
        // <img src={img} alt={name} />
        // <h2>{name}</h2>
        // <h2>{details}</h2>
        // <h2>{price}</h2>
        // <h2>{brandName}</h2>
        // <h2>{supplierName}</h2>
        // <h2>{quantity}</h2> */}



    );
};

export default ItemDetails;