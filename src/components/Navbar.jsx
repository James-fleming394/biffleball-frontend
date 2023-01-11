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
        <div className="top-bar">
            <span><img className='BB-logo' src="/img/b-solid.png" /><img className='BB-logo2' src="/img/b-solid.png" /></span>
            <ul>
                <li><a href="https://twitter.com/Biffle_Ball"><img src="/img/twitter.png"/></a></li>
                <li><a href="https://discord.gg/Vwz5yffp"><img src="/img/discord.png"/></a></li>
                <li><a href="mailto:register@biffleball.com"><img src="/img/email.png"/></a></li>
            </ul>
        </div>
    )

}

export default Navbar;

