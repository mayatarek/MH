import HomepageList from "./HomepageList";
import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'; // Importing Bootstrap Carousel

import './homepage.css';

function Homepage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (loggedInUser) {
            setUser(loggedInUser);
        }
    }, []);

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="container">
          <div className="welcome-container">
            {user ? (
              <div>
                <h2 className="welcome-back">Welcome back, {user.name}!</h2>
                <p className="welcome-message">Enjoy your personalized homepage.</p>
              </div>
            ) : (
              <div>
                <h2 className="welcome-back">Welcome to our homepage!</h2>
                <p className="welcome-message">Please log in to access personalized features.</p>
              </div>
            )}
          </div>
    

            <img id="homePic" src="/src/assets/home2.jpg" alt="Homepage visual" />

            <div className="glamorous-quote"> <h2>"Elegance is not standing out, but being remembered."</h2> </div>

            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/src/assets/carsouel.jpg" 
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Stunning Necklaces</h3>
                        <p>Explore our collection of breathtaking necklaces that complement every style.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/src/assets/secondC.jpg" 
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Complete Your Look</h3>
                    <p>Find the perfect accessories to elevate your outfit, from bracelets to earrings.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/src/assets/carsouel3.jpg" 
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Unique Accessories</h3>
                    <p>Our exclusive range of accessories is designed to make you stand out.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div id="bestSellingSection">
                <h3 className="bestSelling">
                    Best Selling Necklaces
                </h3>
                <HomepageList key={'necklace'} />
                <h3 className="bestSelling">
                    Best Selling Earrings
                </h3>
                <HomepageList key={'earring'} />
            </div>
        </div>
    );
}

export default Homepage;
