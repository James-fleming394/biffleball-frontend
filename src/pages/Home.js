import React from "react";
import TwitterContainer from "../components/TwitterContainer";
import { useNavigate } from "react-router-dom";

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
            <div className="what-is">
                <h2>What is BiffleBall?</h2>
                <h4>
                    BiffleBall is a Survivor-Pool style competition designed and created specifically for Baseball. 
                    Although we love the sport, Baseball being 162 games over 5 months makes it hard for the average fan to stay invested, 
                    especially if their team is out of it by mid-summer. 
                    BiffleBall provides a way for fans of the game to stay connected and 
                    always have a rooting interest regardless of individual team success.
                </h4>
            </div>
            <div className="how-to">
                <section className="how-section">
                    <h2>How to Play</h2>
                    <h4>
                Each week (Monday-Sunday) you select a team and get 1 point for every win that team has during the week. 
                You can only use a team once per season (no repeats) and overall win % or total losses have no bearings 
                on your final score. All wins are worth 1 point regardless of innings played, strength of team, etc, 
                and whichever user has the most total wins after the season wins the coveted BiffleBall Belt.
                    </h4>
                </section>
                <section className="how-section">
                    <h2>Strategy</h2>
                    <h4>
                    Do you pick a team who plays 7 games during that week? Pick the team who Vegas has favored the most? The hottest team in the league? 
                    <br></br>
                    <br></br>
                    Avoid the team who is playing outdoors with rain in the forecast? You get to decide and see how it plays out!
                    </h4>
                </section>
            </div>
            <div className="twitter-widget">
                <TwitterContainer />
            </div>
        </div>
    )
}

export default Home;