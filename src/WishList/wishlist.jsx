import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Productitem from "/src/ProductList/Productitem.jsx";

function Wishlist() {
  const { userID } = useParams();
  const [listItems, setListItems] = useState([]);
  const fetchList = async () => {
    try {

    //   localStorage.setItem("wishlist_user122", JSON.stringify([
    //     {
    //         "name": "Elegant Necklace",
    //         "type": "necklace",
    //         "image": "../src/assets/necklace.jpeg",
    //         "details": "A stunning piece that complements any outfit.",
    //         "careTips": "Keep away from water and perfume to maintain shine.",
    //         "price": "7363 $"
    //     },
    //     {
    //         "name": "Golden Necklace",
    //         "type": "necklace",
    //         "image": "../src/assets/necklace2.jpeg",
    //         "details": "A perfect addition for formal occasions.",
    //         "careTips": "Wipe with a soft cloth after use.",
    //         "price": "7363 $"
    //     }
    // ]));
    
      const listItems = JSON.parse(localStorage.getItem(`wishlist_${userID}`)) || [];
      setListItems(listItems);
      console.log("fetch successful");
      console.log(listItems);
      console.log(userID);

    } catch (error) {
      console.error("Error fetching wishlist items:", error);
    }
  };

  useEffect(() => {
    if (userID) {
      fetchList();
    }
  }, [userID]);


  const addToWishlist = (product) => {
    let listItems = JSON.parse(localStorage.getItem(`wishlist_${userID}`)) || [];
    listItems.push(product);
    localStorage.setItem(`wishlist_${userID}`, JSON.stringify(listItems));
    setListItems(listItems);
  };

  function removeFromWishlist(index){
    const listItems = JSON.parse(localStorage.getItem(`wishlist_${userID}`)) || [];
    listItems.splice(index, 1);
  };

  return (
    <div>
      {!userID && (
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
      {userID && listItems.length > 0 && (     
          <>
          <h3>My Wishlist</h3>
          
          <ul> 
              {listItems.map((product, index) => ( 
                  <li key={index}> 
                      <div> 
                          <Productitem product={product}/>
                          <button onClick={() => removeFromWishlist(index)}>Remove</button>
                      </div> 
                  </li> ))} 
          </ul>           
          </>
      
       )}
      {userID && listItems.length === 0 && (
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





