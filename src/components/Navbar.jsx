import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <nav className="nav">
                <h2 className="logo">BiffleBall Logo Here</h2>
                <Link className="nav-link"to="/">Home</Link>
                <Link className="nav-link"to="/picks">Picks</Link>
                <Link className="nav-link"to="/standings">Standings</Link>
                <Link className="nav-link"to="/profile">Profile</Link>
            </nav>
        </div>
    )
}

export default Navbar;

