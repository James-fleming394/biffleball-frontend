import React from "react";
import TwitterContainer from "../components/TwitterContainer";
import { useNavigate } from "react-router-dom";
import Tabs from "../components/HomeTabs";
import Timer from "../components/Timer";

const Home = () => {

    let navigate = useNavigate();

    const registerClick = () => {
        navigate("/register")
    }

    return (
        <div className="home">
            <div className="logo-home">
                <img className="blacklogo" src="/img/Biffle-small-black.png" />
            </div>
            <div className="welcome">
                <h1>Modernizing America's Pastime</h1>
                <div className="span">
                    <a onClick={registerClick}></a>
                </div>
            </div>
            <div className="Timer-section">
                <Timer />
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