import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import axios from 'axios';
import ItemDetails from '../ItemDetails/ItemDetails';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [products, setProducts] = useState([]);

    //for unauthorize user
    // const navigate = useNavigate();

    useEffect(() => {

        const getItems = async () => {
            //user wish product
            const email = user.email;

            const url = `http://localhost:5000/item?email=${email}`;
            const { data } = await axios.get(url);
            setProducts(data);


        }
        getItems();


    }, [user])



    return (
        <div className='container mx-auto'>
            <h2>Your Items: {products.length} </h2>

            <div className='item-cart'>

                {
                    products.map(product => <ItemDetails
                        key={product._id}
                        product={product}
                        editItem={true}
                    >
                    </ItemDetails>
                    )
                }
            </div>

        </div>
    );
};

export default MyItems;