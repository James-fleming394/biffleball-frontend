import React from "react";


const Rules = () => {
    return (
        <div className="rules">
            <div className="rules-title">
                <h1>Rules & System</h1>
            </div>
            <div className="rules-closer">
                <h2 className="rulesh2">Overview</h2>
            </div>
            <div className="rules-area">
            <div className="rules-payment">
                <h3>Payment</h3>
                <h5>The entry fee to partiticpate in BiffleBall for the entire MLB 2023 season is $150.  This payment must be made in full 
                    prior to the first week of submission picks.</h5>
            </div>
            <div className="rules-scoring">
                <h3>Scoring</h3>
                <h5>The BiffleBall standings are based solely on the number of Wins the team you have selected has during that specific week.  
                    Every week will begin on Monday and go through the following Sunday.*</h5>
                <h6>* Exceptions to the weekly team selection: The first week of the season will be longer than other weeks.</h6>
                <h6>* The all-star weekend will require players to select a Home Run Derby participant, either the AL or NL all-star team 
                    and any team they choose for the remainder of the week.</h6>
                <h6>* The final week of the season will consist of players selecting 6 teams.  The goal is still to earn the most amount of wins possible.</h6>
            </div>
            <div className="rules-picks">
                <h3>Submitting Picks</h3>
                <h5>If a player does not meet this deadline, our database will select a team the player has not picked yet.</h5>
                <h5>After all submissions have been made, our system will update the standings for the week.  Along with these standings, 
                    the system will update our advanced analytics files related to how each player is doing relative to the teams they have selected.</h5>
            </div>
            <div className="rules-question">
                <h3>If you have any futher questions, please reach out to us at our email: <a href="mailto:register@biffleball.com">@register@biffleball.com</a></h3>
            </div>
            </div>
        </div>
    )
}

export default Rules;