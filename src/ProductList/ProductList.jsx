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

  // Fetch the logged-in user
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  // Fetch the wishlist for the user
  useEffect(() => {
    if (user) {
      const userWishlist = JSON.parse(localStorage.getItem(`wishlist_user${user.id}`)) || [];
      setWishlist(userWishlist);
    }
  }, [user]);

  // Filter products based on category and search query
  const filteredProducts = products
    .filter((product) => product.type === category)
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // Sort products
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

      <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
        <option value="name">Sort by Name</option>
        <option value="price">Sort by Price</option>
      </select>

      <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
        <option value="asc">{sortBy === 'name' ? 'A to Z' : 'Low to High'}</option>
        <option value="desc">{sortBy === 'name' ? 'Z to A' : 'High to Low'}</option>
      </select>

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
  );
}

export default ProductList;
