function ReservedItem({ product, removeItemFromReserved }) {
    return (
      <div className="productItem">
        <img src={product.image} alt={product.name} className="image" />
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <button 
          onClick={() => removeItemFromReserved(product.id)} 
          style={{
            backgroundColor: 'black',
            color: 'white',
            cursor: 'pointer',
            padding: '5px 10px',
            marginTop: '10px',
          }}
        >
          Remove
        </button>
      </div>
    );
  }
  
  export default ReservedItem;
  