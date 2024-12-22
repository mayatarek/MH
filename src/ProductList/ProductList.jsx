import React from "react";
import ProductItem from "./Productitem";
import products from "./products";

function productList({category}){


    const filteredProduct = products.filter(product => product.type === category);
    return (
        <div className = "productList">
            {filteredProduct.map((product,index)=>
            
            (
                <ProductItem key ={index} product ={product}/>
            )
            
            )}
        </div>
    );
};

export default productList;