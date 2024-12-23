import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function Wishlist() {
  const { userID } = useParams();
  const [logged, setLogged] = useState(true); // change later
  const [listItems, setListItems] = useState([]);

  const fetchList = async () => {
    try {
      const wishlistItems = JSON.parse(localStorage.getItem("wishlistitems")) || [];
      const userWishlist = wishlistItems.filter((item) => item.userId === userID);
      setListItems(userWishlist);
      console.log("fetch successfuk")
    } catch (error) {
      console.error("Error fetching wishlist items:", error);
    }
  };

  useEffect(() => {
    if (userID) {
      fetchList();
    }
  }, [userID]);

  return (
    <div>
      {!logged && (
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
      {logged && listItems.length > 0 && (
        <div>
          {listItems.map((item, index) => (
            <WishlistItem
              key={index}
              picture={item.picture}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      )}
      {logged && listItems.length === 0 && (
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
