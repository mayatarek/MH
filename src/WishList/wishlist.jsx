import { useState, useEffect} from 'react'
import Productitem from "/src/ProductList/Productitem.jsx";


function Wishlist({username}){

    const [wishList, setWishlist] = useState([]);

    useEffect()=>{(
        
    ), []}
    

    return (
        <>
        <h3>My Wishlist</h3>
        
        <ul> 
            {wishList.map((product, index) => ( 
                <li key={index}> 
                    <div> 
                        <Productitem product={product}/>
                        <button onClick={() => removeFromWishlist(product)}>Remove</button>
                    </div> 
                </li> ))} 
        </ul>
        
        
        </>
    );
};

export default Wishlist;