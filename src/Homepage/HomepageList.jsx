import React, { useState, useEffect } from 'react';
import ProductItem from "../ProductList/Productitem"
import products from "../ProductList/products"
function HomepageList({ category }) {
    const [randomProducts, setRandomProducts] = useState([]);

    useEffect(() => {
        //select three random items
        const filteredProducts = products.filter((product) => product.type === category);
        const shuffledProducts = filteredProducts.sort(() => 0.5 - Math.random());
        setRandomProducts(shuffledProducts.slice(0, 3)); 
    }, [category]);

    return (
        <div className="homepage-list">
            {randomProducts.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    user={JSON.parse(localStorage.getItem('loggedInUser'))}
                />
            ))}
        </div>
    );
}

export default HomepageList;