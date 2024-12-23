

function WishlistItem({ picture, name, price }) {
    return (
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
        <img src={picture} alt={name} style={{ width: "100px", height: "100px" }} />
        <h4>{name}</h4>
        <p>Price: {price}</p>
      </div>
    );
  }

export default WishlistItem