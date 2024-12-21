import React from "react";
import ProductItem from "productItem";
import products from "products";

const productList = () =>{


    const filteredProduct = product.filter(product => product.type === category);
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