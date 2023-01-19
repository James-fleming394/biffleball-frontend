import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    let navigate = useNavigate();

    const loginClick = () => {
        navigate("/login")
    }

    const registerClick = () => {
        navigate("/register")
    }

    return (
        <>
        <div className="top-bar">
            <span><img className='top' src="/img/b-solid.png" alt="logo" /><img className='top' src="/img/b-solid.png" alt="logo" /></span>
            <ul className="top-ul">
                <li className="top-li"><a href="https://twitter.com/Biffle_Ball"><img className="top" src="/img/twitter.png" alt="twitter"/></a></li>
                <li className="top-li-discord"><a href="https://discord.gg/Vwz5yffp"><img className="top" src="/img/discord.png" alt="discord" /></a></li>
                <li className="top-li"><a href="mailto:register@biffleball.com"><img className="top" src="/img/email.png" alt="email" /></a></li>
                <button className="top-link" type="button" onClick={registerClick}>Register</button>
                <button className="top-link" type="button" onClick={loginClick} >Login</button>
            </ul>
        </div>
        <nav>
            <ul className="menu">
                <li className="menu-list"><Link to="/">Home</Link></li>
                <li className="menu-list"><Link to="/standings">Standings</Link></li>
                <li className="menu-list"><Link to="/stats">Stats</Link></li>
                <li className="menu-list"><Link to="/submit-pick">Submit Pick</Link></li>
                <li className="menu-list"><Link to="/rules">Rules</Link></li>
            </ul>
        </nav>
            </>
    )

}

export default Navbar;

