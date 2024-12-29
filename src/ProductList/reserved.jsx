import { useState, useEffect } from "react";
import ReservedItem from "./reserveditem"; 

function Reserved() {
  const [reservedItems, setReservedItems] = useState([]);
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);


  const fetchReservedItems = () => {
    try {
      if (user) {
        const reservedItems = JSON.parse(localStorage.getItem(`reserved_user${user.id}`)) || [];
        setReservedItems(reservedItems);
      }
    } catch (error) {
      console.error("Error fetching reserved items:", error);
    }
  };


  useEffect(() => {
    if (user) {
      fetchReservedItems();
    }
  }, [user]);


  const removeItemFromReserved = (itemId) => {
    if (!user) {
      return; 
    }

    const currentReservedItems = JSON.parse(localStorage.getItem(`reserved_user${user.id}`)) || [];
    const updatedReservedItems = currentReservedItems.filter(item => item.id !== itemId);

    localStorage.setItem(`reserved_user${user.id}`, JSON.stringify(updatedReservedItems));
    setReservedItems(updatedReservedItems); 
  };

  return (
    <div>
      {reservedItems.length > 0 ? (
        <div>
          <h2 className="reserved">Your Reserved Items are Ready! 🌟 Come Visit Our Store and Claim Them – We Can’t Wait to See You! 🎉</h2>
          {reservedItems.map((item) => (
            <ReservedItem 
              key={item.id} 
              product={item} 
              removeItemFromReserved={removeItemFromReserved} 
            />
          ))}
        </div>
      ) : (
        <p className="reserved">Looks like your reserved list is empty! Explore our collection and reserve your favorites today to secure them before they sell out!💖</p>
      )}
    </div>
  );
}

export default Reserved;



