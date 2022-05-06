import React from 'react';
import { Button, Card, CardGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import './ItemDetails.css'

const ItemDetails = ({ product }) => {
    const { _id, img, name, details, price, brandName, supplierName, quantity } = product;


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
                    <ListGroup className="list-group-flush mt-0">
                        <ListGroupItem>Price: {price}</ListGroupItem>
                        <ListGroupItem>Brand Name: {brandName}</ListGroupItem>
                        <ListGroupItem>Supplier Name: {supplierName} </ListGroupItem>
                        <ListGroupItem>Available Quantity: {quantity}</ListGroupItem>

                    </ListGroup>

                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
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