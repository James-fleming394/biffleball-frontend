import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    // let authenticatedOptions
    // if (user) {
    //     authenticatedOptions = (
    //         <nav>
    //             <Link className="link" to="/standings">Standings</Link>
    //             <Link className="link" to="/submit-pick">Submit Pick</Link>
    //             <Link className="link" to="/stats">Advanced Stats</Link>
    //             <Link className="link" to="/profile">Profile</Link>
    //             <Link className="link" onClick={handleLogout} to="/">Sign Out</Link>
    //         </nav>
    //     )
    // }

    // const publicOptions = (
    //     <nav>
    //         <Link className="link" to="/standings">Standings</Link>
    //         <Link className="link" to="/submit-pick">Submit Pick</Link>
    //         <Link className="link" to="/stats">Advanced Stats</Link>
    //         <Link className="right-link" to="/register">Register</Link>
    //         <Link className="right-link" to="/signin">Login</Link>
    //     </nav>
    // )

    return (
        <div>
            <header>
            <Link to="/">
                <div className="logo">
                    <img className="header-logo" src="/img/Biffle-Small-White.png" alt="welcome logo"/>
                    <nav1>
                        <ul className="links">
                            <li><Link className="link" to="/standings">Standings</Link></li>
                            <li><Link className="link" to="/stats">Stats</Link></li>
                            <li><Link className="link" to="/submit-pick">Submit a Pick</Link></li>
                            <li><Link className="link" to="/rules">Rules</Link></li>
                        </ul>
                    </nav1>
                    <nav2>
                        <ul className="links2">
                        <li><Link className="link" to="/login">Login</Link></li>
                        </ul>
                    </nav2>
                </div>
            </Link>
            </header>
        </div>
    )

}

export default Navbar;

