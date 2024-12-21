import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div id="navContainer" className="container-fluid">
                <Link className="navbar-brand" to="/home" id="logo">
                    <img src="/src/assets/logo.png" id="logo"></img>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul id="mainNavMenu" className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Homepage">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/destinations">
                                Rings
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">
                                Bracelets
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/gallery">
                                Necklaces
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/faqs">
                                Earrings
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contactus">
                                Contact Us
                            </Link>
                        </li>    
                    </ul>
                    <ul className="navbar-nav ms-auto">
                            <Link id ="logIn" className="nav-link" to="/contact">
                                Log In
                            </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

