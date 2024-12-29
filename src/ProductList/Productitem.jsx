import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './Productitem.css';
import { useNavigate } from 'react-router-dom';

function ProductItem({ product, liked, user }) {
  const [isLiked, setIsLiked] = useState(liked);
  const [reserved, setReserved] = useState(false); 
  const [message, showMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const reservedItems = JSON.parse(localStorage.getItem(`reserved_user${user.id}`)) || [];
      const isReserved = reservedItems.some(item => item.id === product.id);
      setReserved(isReserved);  // Update reserved state based on localStorage
    }
  }, [user, product.id]);

  useEffect(() => {
    if (user) {
      const userWishlist = JSON.parse(localStorage.getItem(`wishlist_user${user.id}`)) || [];
      const isProductLiked = userWishlist.some(item => item.id === product.id);
      setIsLiked(isProductLiked);  // Update liked state based on localStorage
    }
  }, [user, product.id]);

  const addToWishlist = () => {
    if (!user) { showMessage(true); }
    const userWishlist = JSON.parse(localStorage.getItem(`wishlist_user${user.id}`)) || [];
    if (!userWishlist.find((item) => item.id === product.id)) {
      const updatedWishlist = [...userWishlist, product];
      localStorage.setItem(`wishlist_user${user.id}`, JSON.stringify(updatedWishlist));
      setIsLiked(true);
    }
  };

  const removeFromWishlist = () => {
    if (!user) return;
    let userWishlist = JSON.parse(localStorage.getItem(`wishlist_user${user.id}`)) || [];
    userWishlist = userWishlist.filter((item) => item.id !== product.id);
    localStorage.setItem(`wishlist_user${user.id}`, JSON.stringify(userWishlist));
    setIsLiked(false);
  };

  const reserveProduct = () => {
    if (!user) { showMessage(true); }
    const reservedItems = JSON.parse(localStorage.getItem(`reserved_user${user.id}`)) || [];
    if (!reservedItems.find((item) => item.id === product.id)) {
      const updatedReservedItems = [...reservedItems, product];
      localStorage.setItem(`reserved_user${user.id}`, JSON.stringify(updatedReservedItems));
      setReserved(true); 
    }
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  useEffect(() => {
    if (message) {
      setTimeout(() => showMessage(false), 3000);
    }
  }, [message]);

  return (
    <div className="productItem">
      <Card style={{ width: '22rem' }} className="product-card" onClick={handleCardClick}>
        <div className="image-container">
          <Card.Img variant="top" src={product.image} alt={product.name} className="product-image" />
          <Card.Img variant="top" src={product.hoverImage} alt={product.name} className="hover-image" />
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            isLiked ? removeFromWishlist() : addToWishlist();
          }}
          className="heart-button"
        >
          {isLiked ? '♥' : '♡'}
        </button>

        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price}</Card.Text>

          <button
            onClick={(e) => {
              e.stopPropagation(); 
              reserveProduct();
            }}
            style={{
              all: 'unset',
              cursor: reserved ? 'not-allowed' : 'pointer',
              fontSize: 15,
              color: reserved ? 'gray' : '#093621e1',
            }}
            disabled={reserved} 
          >
            {reserved ? 'Reserved' : 'Reserve '}
          </button>
          {message && <p className="message">Please log in first</p>}
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductItem;
