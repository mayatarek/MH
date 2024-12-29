import React, { useState,useEffect } from 'react';
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

  const reserveproduct = () => {
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
              onClick={(e) => {
                e.stopPropagation();
                removeFromWishlist();
              }}
              className="liked"
              style={{ all: 'unset', color: 'red', cursor: 'pointer', fontSize: 30 }}
            >
              ♥
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation(); 
                addToWishlist();
              }}
              style={{ all: 'unset', cursor: 'pointer', fontSize: 30 }}
            >
              ♡
            </button>
          )}

          <button
            onClick={(e) => {
              e.stopPropagation(); 
              reserveproduct();
            }}
            style={{
              all: 'unset',
              cursor: reserved ? 'not-allowed' : 'pointer',
              fontSize: 30,
              color: reserved ? 'gray' : 'blue',
            }}
            disabled={reserved} 
          >
            {reserved ? 'Reserved' : 'Reserve'}
          </button>
          {message && <p className="message">Please log in first</p>}
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductItem;

