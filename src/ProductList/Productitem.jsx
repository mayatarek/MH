import React, { useState } from 'react';

function ProductItem({ product, liked, user }) {
  const [isLiked, setIsLiked] = useState(liked);
  const [message, showMessage] = useState(false);

  // Add to wishlist
  const addToWishlist = () => {
    if (!user) {showMessage(true)};
    const userWishlist = JSON.parse(localStorage.getItem(`wishlist_user${user.id}`)) || [];
    if (!userWishlist.find((item) => item.id === product.id)) {
      const updatedWishlist = [...userWishlist, product];
      localStorage.setItem(`wishlist_user${user.id}`, JSON.stringify(updatedWishlist));
      setIsLiked(true);
      console.log(isLiked)
    }
  };

  // Remove from wishlist
  const removeFromWishlist = () => {
    if (!user) return;
    let userWishlist = JSON.parse(localStorage.getItem(`wishlist_user${user.id}`)) || [];
    userWishlist = userWishlist.filter((item) => item.id !== product.id);
    localStorage.setItem(`wishlist_user${user.id}`, JSON.stringify(userWishlist));
    setIsLiked(false);
    console.log(isLiked)
  };

  return (
    <div className="productItem">
      <img src={product.image} alt={product.name} className="image" />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      {/* {!user? <h2>not a user</h2>: <h2>user</h2>} just debugging*/}   
      <button>More Details</button> <span>  </span>
      {isLiked ? (
        <button
          onClick={removeFromWishlist}
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
      {message && <p>Please log in first to add to cart</p>}
    </div>
  );
}

export default ProductItem;
