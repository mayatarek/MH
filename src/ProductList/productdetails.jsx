import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productlist from './ProductList.jsx'; 
import SearchBar from './SearchBar'; 
const ProductDetails = () => {
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

 
  const filteredProducts = productlist
    .filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((x, y) => {
      if (sortOrder === 'asc') {
        return x.name.localeCompare(y.name);
      } else {
        return y.name.localeCompare(x.name);
      }
    });

  
  const product = filteredProducts.find((product) => product.id === parseInt(id));

  return (
    <div>
      <h1>Product Details</h1>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

    
      <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
        <option value="asc">Sort A-Z</option>
        <option value="desc">Sort Z-A</option>
      </select>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <a href={`/product/${product.id}`}>{product.name} - ${product.price}</a>
          </li>
        ))}
      </ul>

      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p><strong>Price:</strong> ${product.price}</p>
          <img
            src={product.image || 'https://via.placeholder.com/150'}
            alt={product.name}
            style={{ width: '150px', height: '150px' }}
          />
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Material:</strong> {product.material}</p>
          <p><strong>Care Tips:</strong> {product.careTips}</p>
        </div>
      ) : (
        <p>No product selected or product does not exist.</p>
      )}
    </div>
  );
};

export default ProductDetails;
