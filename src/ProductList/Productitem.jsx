import React from 'react';

const ProductItem = ({product}) => {


    return (
        <div className = "productItem">
            <img src ={product.image} alt={product.name} className='image'/>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button>More Details</button>

        </div>
    );

}



export default productItem;