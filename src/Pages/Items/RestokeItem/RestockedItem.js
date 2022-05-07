import React from 'react';
import { useParams } from 'react-router-dom';

const RestockedItem = () => {
    const { id } = useParams();

    return (
        <div>
            <h2>This is Form re stack : {id}</h2>
        </div>
    );
};

export default RestockedItem;