import './wishlistitem.css';
import { Card } from 'react-bootstrap';


// function WishlistItem({ picture, name, price }) {
//     return (
//       <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
//         <img src={picture} alt={name} style={{ width: "100px", height: "100px" }} />
//         <h4>{name}</h4>
//         <p>Price: {price}</p>
//       </div>
//     );
//   }

// export default WishlistItem


function WishlistItem({ product}) {

  return (
    <div className="productItem">
      <Card style={{ width: '22rem' }} className="product-card">
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
        </button>

        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price}</Card.Text>

        </Card.Body>
      </Card>
    </div>
  );
}

export default WishlistItem