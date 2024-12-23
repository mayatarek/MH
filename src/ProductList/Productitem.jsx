// import React, { useState } from 'react';

// function ProductItem({ product, liked, user, setWishlist }) {
//   const [isLiked, setIsLiked] = useState(liked);

//   // Add to wishlist
//   const addToWishlist = () => {
//     if (!user) return;
//     const userWishlist = JSON.parse(localStorage.getItem(`wishlist_user${user.id}`)) || [];
//     const updatedWishlist = [...userWishlist, product];
//     localStorage.setItem(`wishlist_user${user.id}`, JSON.stringify(updatedWishlist));
//     //setWishlist(updatedWishlist);
//     setIsLiked(true);
    
//   };

//   const removeFromWishlist = () => {
//     if (!user) return;
//     let userWishlist = JSON.parse(localStorage.getItem(`wishlist_user${user.id}`)) || [];
//     userWishlist = userWishlist.filter((item) => item.id !== product.id);
//     localStorage.setItem(`wishlist_user${user.id}`, JSON.stringify(userWishlist));
//     //setWishlist(userWishlist);
//     setIsLiked(false);
//   };

//   return (
//     <div className="productItem">
//       <img src={product.image} alt={product.name} className="image" />
//       <h2>{product.name}</h2>
//       <p>{product.price}</p>
//       <button>More Details</button> <span>  </span>
//       {isLiked ? (
//         <button
//           onClick={removeFromWishlist}
//           style={{ all: 'unset', color: 'red', cursor: 'pointer', fontSize: 30 }}
//         >
//           ♥
//         </button>
//       ) : (
//         <button
//           onClick={addToWishlist}
//           style={{ all: 'unset', cursor: 'pointer', fontSize: 30 }}
//         >
//           ♡
//         </button>
//       )}
//     </div>
//   );
// }

// export default ProductItem;









import React, { useState } from 'react';

function ProductItem({ product, liked, user, setWishlist }) {
  const [isLiked, setIsLiked] = useState(liked);

  // Add to wishlist
  const addToWishlist = () => {
    if (!user) return;
    const userWishlist = JSON.parse(localStorage.getItem(`wishlist_user${user.id}`)) || [];
    if (!userWishlist.find((item) => item.id === product.id)) {
      const updatedWishlist = [...userWishlist, product];
      localStorage.setItem(`wishlist_user${user.id}`, JSON.stringify(updatedWishlist));
      setWishlist(updatedWishlist);
      setIsLiked(true);
    }
  };

  // Remove from wishlist
  const removeFromWishlist = () => {
    if (!user) return;
    let userWishlist = JSON.parse(localStorage.getItem(`wishlist_user${user.id}`)) || [];
    userWishlist = userWishlist.filter((item) => item.id !== product.id);
    localStorage.setItem(`wishlist_user${user.id}`, JSON.stringify(userWishlist));
    setWishlist(userWishlist);
    setIsLiked(false);
  };

  return (
    <div className="productItem">
      <img src={product.image} alt={product.name} className="image" />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button>More Details</button>
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
    </div>
  );
}

export default ProductItem;
