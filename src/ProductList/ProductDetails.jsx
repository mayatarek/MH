import React from 'react';
import { useParams } from 'react-router-dom';
import products from './products';
import './ProductDetails.css'; 

const ProductDetails = () => {

  const { id } = useParams(); 
  const product = products.find((product) => product.id === id); 

  if (!product) {
    return <div>Product not found</div>; 
  }

  return (
    <div className="product-details-container">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.details}</p>
      <p className="care-tips">{product.careTips}</p>
      <p className="price">{product.price}</p>
    </div>
  );
};

export default ProductDetails;
