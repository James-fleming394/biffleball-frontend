import React, { useState } from "react";

const Tabs = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    };

    return (
        <div className="Tabs">
            <div className="block-tabs">
                <button className={toggleState === 1 ? "tabs  active tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                >
                About
                </button>
                <button className={toggleState === 2 ? "tabs  active tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                >
                How to Play
                </button>
                <button className={toggleState === 3 ? "tabs  active tabs" : "tabs"}
                        onClick={() => toggleTab(3)}
                >
                Entry + Prizes
                </button>
            </div>
            <div className="content-tabs">
                <div className={toggleState === 1 ? "content  active-content" : "content"}>
                    <h2>What is BiffleBall?</h2>
                    <hr />
                    <p>
                        BiffleBall is a Survivor-Pool style competition designed and created specifically for Baseball. Although we love the sport, 
                        Baseball being 162 games over 5 months makes it hard for the average fan to stay invested, especially if their team is out 
                        of it by mid-summer. BiffleBall provides a way for fans of the game to stay connected and always have a rooting interest 
                        regardless of individual team success.
                    </p>
                </div>
                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    <h2>How do I Play?</h2>
                    <hr />
                    <p>
                    Each week (Monday-Sunday) you select a team and get 1 point for every win that team has during the week. You can only use a 
                    team once per season (no repeats) and overall win % or total losses have no bearings on your final score. All wins are worth 
                    1 point regardless of innings played, strength of team, etc, and whichever user has the most total wins after the season wins 
                    the coveted BiffleBall Belt.
                    </p>
                </div>
                <div className={toggleState === 3 ? "content  active-content" : "content"}>
                    <h2>Entry Fee and Prizes</h2>
                    <hr />
                    <p>
                        The entry fee to join the BiffleBall community is $150 per person.  The prize is a Winner Take All cash prize and a beautiful
                        Championship Belt.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Tabs;