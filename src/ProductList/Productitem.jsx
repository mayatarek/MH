import React from 'react';

function Productitem  ({product})  {


    return (
        <div className = "productItem">
            <img src ={product.image} alt={product.name} className='image'/>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button>More Details</button> 
            <span>     </span>
            {<button style={{all: 'unset', cursor: 'pointer', fontSize: 30}}>♡</button>}
            {<button style={{all: 'unset', color: 'red', cursor: 'pointer', fontSize: 30}}>♥</button>}

        </div>
    );

}



export default Productitem;