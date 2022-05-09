import { useEffect, useState } from "react";

const useItems = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://lit-harbor-38143.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products]);

    return [products, setProducts]
}

export default useItems;