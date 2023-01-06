import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ authenticated, user, handleLogout }) => {
    let authenticatedOptions
    if (user) {
        authenticatedOptions = (
            <nav>
                <Link className="link" to="/picks">Picks</Link>
                <Link className="link" to="/standings">Standings</Link>
                <Link className="link" to="/profile">Profile</Link>
                <Link className="link" onClick={handleLogout} to="/">Sign Out</Link>
            </nav>
        )
    }

    const publicOptions = (
        <nav>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/register">Register</Link>
            <Link className="link" to="/signin">Sign In</Link>
        </nav>
    )

    return (
        <div>
            {authenticated && user ? authenticatedOptions : publicOptions}
        </div>
    )

}

export default Navbar;

