import React, { useState } from "react";

const Tabs = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
    setToggleState(index);
    };

    return (
        <div className="container2">
        <div className="bloc-tabs">
        <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
        >
        About
        </button>
        <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
        >
        How To Play
        </button>
        <button
        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(3)}
        >
        Entry & Prizes
        </button>
    </div>

    <div className="content-tabs">
        <div
        className={toggleState === 1 ? "content  active-content" : "content"}
        >
        <h2>What is BiffleBall?</h2>
        <hr />
        <img className="mookie" 
        src="https://static01.nyt.com/images/2020/08/24/sports/24mlb-kepner-1/merlin_176084667_69b1099b-0b7e-41ce-bfdf-e407899f10dc-mobileMasterAt3x.jpg"
        alt="mookie-betts" />
        <br></br>
        <p>
        BiffleBall is a Survivor-Pool style competition designed and created specifically for Baseball. Although we love the sport, Baseball being 162 games over 5 months makes it hard for the average fan to stay invested, especially if their team is out of it by mid-summer. BiffleBall provides a way for fans of the game to stay connected and always have a rooting interest regardless of individual team success.
        </p>
        </div>

        <div
        className={toggleState === 2 ? "content  active-content" : "content"}
        >
        <h2>How Do I Play?</h2>
        <hr />
        <img className="ball" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Baseball.jpg/1200px-Baseball.jpg" about="baseball" />
        <br></br>
        <p>
        Each week (Monday-Sunday) you select a team and get 1 point for every win that team has during the week. You can only use a team once per season (no repeats) and overall win % or total losses have no bearings on your final score. All wins are worth 1 point regardless of innings played, strength of team, etc, and whichever user has the most total wins after the season wins the coveted BiffleBall Belt.
        <br></br>
        <br></br>
        Do you pick a team who plays 7 games during that week? Pick the team who Vegas has favored the most? The hottest team in the league? Avoid the team who is playing outdoors with rain in the forecast? The strategies are endless...
        </p>
        </div>

        <div
        className={toggleState === 3 ? "content  active-content" : "content"}
        >
        <h2>Entry Fee & Prizes</h2>
        <hr />
        <img className="winner" src="https://www.savethestudent.org/uploads/Man-celebrating-trophy-prize-confetti-win-first-competition.jpg" alt="winner" />
        <br></br>
        <p>
            The entry fee to join our BiffleBall community and play for the incredible prizes is $150.00 per season.  Our champion is awarded roughly 75% of the overall pot, while second place is awarded the remaining 25%.  The champion is also awarded an amazing BiffleBelt championship belt, which they keep through the off season and entire next season!
        </p>
        </div>
    </div>
    </div>
    )
}

export default Tabs;