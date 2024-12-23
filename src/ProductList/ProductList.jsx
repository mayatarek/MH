import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import products from './products';
import SearchBar from './SearchBar';
import ShowSearchBar from './showsearchbar';

function ProductList({ category }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortBy, setSortBy] = useState('name');
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

 
  useEffect(() => {
    if (user) {
      const userWishlist = JSON.parse(localStorage.getItem(`wishlist_user${user.id}`)) || [];
      setWishlist(userWishlist);
    }
  }, [user]);

  
  const filteredProducts = products
    .filter((product) => product.type === category)
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

 
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortBy === 'name') {
      return sortOrder === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else if (sortBy === 'price') {
      const priceA = parseFloat(a.price.replace('£', ''));
      const priceB = parseFloat(b.price.replace('£', ''));
      return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
    }
    return 0;
  });

  return (
    <div className="productList">
      <ShowSearchBar>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </ShowSearchBar>
  
    
      <select onChange={(e) => setSortBy(e.target.value)} value={sortBy} className="sort-name">
        <option value="name">Sort by Name</option>
        <option value="price">Sort by Price</option>
      </select>
  
     
      {sortBy === 'name' ? (
        <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder} className="sort-name">
          <option value="asc">A to Z</option>
          <option value="desc">Z to A</option>
        </select>
      ) : (
        <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder} className="sort-price">
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      )}
  
     
      {sortedProducts.map((product) => {
        const liked = wishlist.some((item) => item.id === product.id);
        return (
          <ProductItem
            key={product.id}
            product={product}
            liked={liked}
            user={user}
          />
        );
      })}
    </div>
)};
  
export default ProductList;
