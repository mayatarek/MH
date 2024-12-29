import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Productitem from "/src/ProductList/Productitem.jsx";
import WishlistItem from "./WishListItem";

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
    <div className="wishlist-page">
      {!user && (
        <div>
          <h2>Looks like you are not logged in</h2>
          <br />
          <button>
            <Link to="/login">Log in</Link>
          </button>
          <br />
          <h2>Or go back to the homepage as a guest</h2>
          <br />
          <Link to="/homepage">Continue as guest</Link>
        </div>
      )}
      {user && listItems.length > 0 && (     
          <>
          <h3>My Wishlist</h3>
          
          {/* <ul>  */}
              {listItems.map((product, index) => ( 
                  // <li key={index}> 
                      <div key={index}> 
                          <WishlistItem product={product}/>
                          <button onClick={() => removeFromWishlist(index)}
                          style={{ all: 'unset', color: 'red', cursor: 'pointer', fontSize: 30 }}
                          >
                          ♥
                          </button>
                          {/* <button onClick={() => removeFromWishlist(index)}>Remove</button> */}
                      </div> 
                  /* </li> */ ))} 
          {/* </ul> */}
          </>
      
       )}
      {user && listItems.length === 0 && (
        <div>
          <h3>
            You have not added anything to your wishlist yet :/ Browse our
            products and add what you like to your wishlist using the ♡ icon!
          </h3>
          <Link to="/homepage">Back to Homepage</Link>
        </div>
      )} 
    </div>
  );
}

export default Wishlist;





