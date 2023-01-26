import React from "react";
import TwitterContainer from "../components/TwitterContainer";
import Button from "../components/Button";
import Tabs from "../components/HomeTabs";
import Timer from "../components/Timer";

const Home = () => {

    return (
        <div className="home">
            <div className="logo-home">
                <img className="blacklogo" src="/img/Biffle-small-black.png" />
            </div>
            <div className="welcome">
                <h1>Modernizing America's Pastime</h1>
            </div>
            <div className="Timer-section">
            <h1>Countdown to Opening Day:</h1>
                <Timer />
            </div>
            <div className="button-section">
                <Button />
            </div>
            <div className="Tab-section">
                <Tabs />
            </div>
            <div className="twitter-widget">
                <TwitterContainer />
            </div>
        </div>
    )
}

export default Home;