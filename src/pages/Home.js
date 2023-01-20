import React from "react";
import TwitterContainer from "../components/TwitterContainer";

const Home = () => {
    return (
        <div className="home">
            <div className="logo-home">
                <img className="blacklogo" src="/img/Biffle-small-black.png" />
            </div>
            <div className="welcome">
                <h1>Modernizing America's Pastime</h1>
                <button>Get Started</button>
            </div>
            <div className="twitter-widget">
                <TwitterContainer />
            </div>
        </div>
    )
}

export default Home;