import React, { useState } from 'react';
import ProductItem from "./ProductItem";
import products from "./products";
import SearchBar from './SearchBar';
import ShowSearchBar from './showsearchbar';

function ProductList({ category }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); 
  const [sortBy, setSortBy] = useState('name');


  const filteredProducts = products
    .filter((product) => product.type === category)
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

 
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortBy === 'name') {
     
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name); 
      } else {
        return b.name.localeCompare(a.name); 
      }
    } else if (sortBy === 'price') {
      
      if (sortOrder === 'asc') {
        return a.price - b.price; 
      } else {
        return b.price - a.price; 
      }
    }
    return 0; 
  });

  console.log(sortedProducts);

  return (
    <div className="productList">
     
     <ShowSearchBar>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </ShowSearchBar>

      
      <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
        <option value="name">Sort by Name</option>
        <option value="price">Sort by Price</option>
      </select>

     
      <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>

      
      {sortedProducts.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductList;

