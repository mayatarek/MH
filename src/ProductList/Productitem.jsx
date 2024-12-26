import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Productitem.css';

function ProductItem({ product, liked, user }) {
  const [isLiked, setIsLiked] = useState(liked);
  const [message, showMessage] = useState(false);
  const [showDetails, setShowDetails] = useState(false); // State to toggle details visibility

  // Add to wishlist
  const addToWishlist = () => {
    if (!user) { showMessage(true); }
    const userWishlist = JSON.parse(localStorage.getItem(`wishlist_user${user.id}`)) || [];
    if (!userWishlist.find((item) => item.id === product.id)) {
      const updatedWishlist = [...userWishlist, product];
      localStorage.setItem(`wishlist_user${user.id}`, JSON.stringify(updatedWishlist));
      setIsLiked(true);
    }
  };

  // Remove from wishlist
  const removeFromWishlist = () => {
    if (!user) return;
    let userWishlist = JSON.parse(localStorage.getItem(`wishlist_user${user.id}`)) || [];
    userWishlist = userWishlist.filter((item) => item.id !== product.id);
    localStorage.setItem(`wishlist_user${user.id}`, JSON.stringify(userWishlist));
    setIsLiked(false);
  };

  // Toggle product details
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="productItem">
      <Card style={{ width: '22rem' }} className="product-card" onClick={toggleDetails}>
      <div className="image-container">
          {/* Main Image */}
          <Card.Img variant="top" src={product.image} alt={product.name} className="product-image" />
          {/* Hover Image */}
          <Card.Img variant="top" src={product.hoverImage} alt={product.name} className="hover-image" />
        </div>

        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          {isLiked ? (
            <button
              onClick={removeFromWishlist}
              className="liked"
              style={{ all: 'unset', color: 'red', cursor: 'pointer', fontSize: 30 }}
            >
              ♥
            </button>
          ) : (
            <button
              onClick={addToWishlist}
              style={{ all: 'unset', cursor: 'pointer', fontSize: 30 }}
            >
              ♡
            </button>
          )}
          {message && <p className="message">Please log in first to add to cart</p>}
        </Card.Body>

      
        
      </Card>
    </div>
  );
}

export default ProductItem;
