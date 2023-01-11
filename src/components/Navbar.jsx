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
        <>
        <div className="top-bar">
            <span><img className='top' src="/img/b-solid.png" alt="logo" /><img className='top' src="/img/b-solid.png" alt="logo" /></span>
            <ul className="top-ul">
                <li className="top-li"><a href="https://twitter.com/Biffle_Ball"><img className="top" src="/img/twitter.png" alt="twitter"/></a></li>
                <li className="top-li-discord"><a href="https://discord.gg/Vwz5yffp"><img className="top" src="/img/discord.png" alt="discord" /></a></li>
                <li className="top-li"><a href="mailto:register@biffleball.com"><img className="top" src="/img/email.png" alt="email" /></a></li>
                <button className="top-link"><Link  to="/register">Register</Link></button>
                <button className="top-link"><Link  to="/login">Login</Link></button>
            </ul>
        </div>
        <nav>
            <div className="logo">
                <Link to='/'>
                <img src="/img/Biffle-small-black.png" alt="logo" />
                </Link>
            </div>
            <div className="toggle">
                <a href=""><img src="/img/bars-solid.png" alt="menu"/></a>
            </div>
            <ul className="menu">
                <li><Link to="/standings">Standings</Link></li>
                <li><Link to="/stats">Stats</Link></li>
                <li><Link to="/submit-pick">Submit Pick</Link></li>
                <li><Link to="/rules">Rules</Link></li>
            </ul>
        </nav>
            </>
    )

}

export default Navbar;

