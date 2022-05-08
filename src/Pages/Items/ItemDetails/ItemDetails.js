import React from 'react';
import { Card, CardGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import './ItemDetails.css'

const ItemDetails = ({ product, editItem }) => {
    // for delete ----------
    const [products, setProducts] = useItems();

    //destructure product
    const { _id, img, name, details, price, brandName, supplierName, email, quantity } = product;

    let navigate = useNavigate();

    // for quantity
    let finalQuantity;
    if (quantity <= 0) {
        finalQuantity = <span className='item-tag text-danger'>Sold Out</span>
    }
    else {
        finalQuantity = <span className='item-tag text-success'>{quantity}</span>
    }

    // for update stock page
    const handleRestockedItems = (id) => {
        console.log(id);
        navigate(`/restockedItem/${id}`);
    }


    //handle delete------------

    const handleItemDelete = id => {
        // console.log(id);

        const proceed = window.confirm('Are you sure?');

        if (proceed) {
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    // console.log(data);

                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }

    }



    //for button option
    let itemsButtons
    if (!editItem) {
        itemsButtons = <button onClick={() => handleRestockedItems(_id)} className='btn btn-success'>Stock Update</button>
    }
    else {
        itemsButtons = < >
            <button className='btn btn-success me-4'>Edit item</button>
            <button onClick={() => handleItemDelete(_id)} className='btn btn-danger'>Delete Item </button>
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
                        <ListGroupItem className='pt-0'>
                            <span className='item-tag'>Supplier Email: </span>
                            <span className='item-tag text-success'>{email}</span>
                        </ListGroupItem>
                        <ListGroupItem className='pt-0 pb-1'>
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