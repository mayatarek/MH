import HomepageList from "./HomepageList";
import { useState, useEffect } from 'react'


function Homepage(){

    const [user, setUser] = useState(null); 
    useEffect(() => { 
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); 
        if (loggedInUser) { 
            setUser(loggedInUser); } 
    }, []);
    
    return(
        <div>

            <div>
                {user ? (
                    <div>
                    <h2>Welcome back, {user.name}!</h2>
                    <p>Enjoy your personalized homepage.</p>
                    </div>
                ) : (
                    <div>
                    <h2>Welcome to our homepage!</h2>
                    <p>Please log in to access personalized features.</p>
                    </div>
                )}
            </div>
                
            <img id="homePic" src="/src/assets/hom55.webp"></img>
            <div id="bestSellingSection">
                <h3  className="bestSelling">
                    Best Selling necklaces
                </h3> 
                    <HomepageList key={'necklace'}/>
                <h3  className="bestSelling">
                    Best Selling Earrings
                </h3>
                    <HomepageList key={'earring'}/>
            </div>

        </div>
    )
}

export default Homepage


