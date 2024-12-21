import React from "react";
import ProductItem from "productItem";
import products from "products";

const productList = () =>{
    return (
        <div className = "productList">
            {products.map((product,index)=>
            
            (
                <ProductItem key ={index} product ={product}/>
            )
            
            )}
        </div>
    );
};

export default productList;