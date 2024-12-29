import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Productitem from "/src/ProductList/Productitem.jsx";
import WishlistItem from "./WishListItem";
import { Card } from 'react-bootstrap';


function Wishlist() {
  const [listItems, setListItems] = useState([]);
  const [user, setUser] = useState(null); 

  useEffect(() => { 
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); 
      if (loggedInUser) { 
          setUser(loggedInUser); } 
  }, []);

  const fetchList = async () => {
    try {

      // localStorage.setItem("wishlist_user1", JSON.stringify([
      //   {
      //       "name": "Elegant Necklace",
      //       "type": "necklace",
      //       "image": "../src/assets/necklace.jpeg",
      //       "details": "A stunning piece that complements any outfit.",
      //       "careTips": "Keep away from water and perfume to maintain shine.",
      //       "price": "7363 $"
      //   },
      //   {
      //       "name": "Golden Necklace",
      //       "type": "necklace",
      //       "image": "../src/assets/necklace2.jpeg",
      //       "details": "A perfect addition for formal occasions.",
      //       "careTips": "Wipe with a soft cloth after use.",
      //       "price": "7363 $"
      //   }
      // ]));
    
      const listItems = JSON.parse(localStorage.getItem(`wishlist_user${user.id}`)) || [];
      setListItems(listItems);
      console.log("fetch successful");
      console.log(listItems);
      console.log(user.id);

    } catch (error) {
      console.error("Error fetching wishlist items:", error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchList();
    }
  }, [user]);


  // const addToWishlist = (product) => {
  //   let listItems = JSON.parse(localStorage.getItem(`wishlist_user${user.id}`)) || [];
  //   listItems.push(product);
  //   localStorage.setItem(`wishlist_user${user.id}`, JSON.stringify(listItems));
  //   setListItems(listItems);
  // };

  function removeFromWishlist(index){
    const listItems = JSON.parse(localStorage.getItem(`wishlist_user${user.id}`)) || [];
    listItems.splice(index, 1);
    localStorage.setItem(`wishlist_user${user.id}`, JSON.stringify(listItems)); 
    setListItems(listItems);
  };

  return (
    <div className="containerwish">
      <div className="wishlist-page">
        {!user && (
          <div>
            <h2 style={{color:'#093621',fontWeight:'bold',fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>Oops you're not logged in 😭! </h2>
           
          </div>
        )}
        {user && listItems.length > 0 && (
          <>
            <h3>My Wishlist</h3>
            <div id="wishList">
            {listItems.map((product, index) => (
              <div key={index}>
                <WishlistItem product={product} />
                <button
                  onClick={() => removeFromWishlist(index)}
                  style={{
                    all: "unset",
                    color: "red",
                    cursor: "pointer",
                    fontSize: 30,
                  }}
                >
                  ♥
                </button>
              </div>
            ))}
            </div>
          </>
        )}
        {user && listItems.length === 0 && (
          <div>
            <h3 style={{color:'#093621',fontWeight:'bold',fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>
              You have not added anything to your wishlist yet :/ Browse our
              products and add what you like to your wishlist using the ♡ icon!
            </h3>
            <Link to="/homepage" style={{color:'#093621'}}>Back to Homepage</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;