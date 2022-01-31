import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAll } from "../global/ProductSlice";

export const Main = () => {
    const dispatch = useDispatch();
    const { products } = 
    useSelector((state) => state.products);

    React.useEffect(() => {
        dispatch(fetchAll());
    }, [dispatch]);

    return (
        <React.Fragment>
            
            {products.map((product) => (
                <main key={product.id}>
                    <h2>{product.title}</h2>
                    <p>Price: ${product.price}</p>
                    <p>Description: {product.description}</p>
                    <p>Category: {product.category}</p>
                    <p>Rating: {product.rating.rate}</p>
                    <p>Count: {product.rating.count}</p>
                    <img src={product.image} alt={product.title} />
                </main>
            ))}
        </React.Fragment>
    );
};



