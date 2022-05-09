import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import axios from 'axios';
import ItemDetails from '../ItemDetails/ItemDetails';
import Loading from '../../Shared/Loading/Loading';

const MyItems = () => {
    const [user, loading] = useAuthState(auth)
    const [products, setProducts] = useState([]);

    // for loading----
    if (loading) {
        <Loading></Loading>
    }

    //for unauthorize user
    // const navigate = useNavigate();

    useEffect(() => {

        const getItems = async () => {
            //user wish product
            const email = user.email;

            const url = `https://lit-harbor-38143.herokuapp.com/item?email=${email}`;
            const { data } = await axios.get(url);
            setProducts(data);


        }
        getItems();


    }, [user])



    return (
        <div className='container mx-auto'>
            <h2 className='title text-center'> My Item</h2>
            <hr />
            <h3 className=' text-success text-center'>My selected Item Is: {products.length} Items </h3>

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