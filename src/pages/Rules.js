import React from "react";
import { Link } from "react-router-dom";


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
                <br></br>
                <h5>The entry fee to partiticpate in BiffleBall for the entire MLB 2023 season is $150.  This payment must be made in full 
                    prior to the first week of submission picks.</h5>
                    <br></br>
            </div>
            <div className="rules-payment">
                <h3>Scoring</h3>
                <br></br>
                <h5>The BiffleBall standings are based solely on the number of Wins the team you have selected has during that specific week.  
                    Every week will begin on Monday and go through the following Sunday.*</h5>
                <h6>* Exceptions to the weekly team selection: The first week of the season will be longer than other weeks.</h6>
                <h6>* The all-star weekend will require players to select a Home Run Derby participant, either the AL or NL all-star team 
                    and any team they choose for the remainder of the week.</h6>
                <h6>* The final week of the season will consist of players selecting 6 teams.  The goal is still to earn the most amount of wins possible.</h6>
                <br></br>
            </div>
            <div className="rules-payment">
                <h3>Submitting Picks</h3>
                <br></br>
                <h5>If a player does not meet this deadline, our database will select a team the player has not picked yet.</h5>
                <h5>After all submissions have been made, our system will update the standings for the week.  Along with these standings, 
                    the system will update our advanced analytics files related to how each player is doing relative to the teams they have selected.</h5>
                    <br></br>
            </div>
            <div className="rules-payment">
                <h3>Fair Play</h3>
                <br></br>
                <h5>Players are not allowed to collude or conspire throughout the BiffleBall season.  Players weekly picks should be kept to themselves until the standings are released.</h5>
                <h5>Any attempt to gain an unfair advantage through cheating will result in immediate dismissal from the community with no refund. </h5>
                <br></br>
            </div>
            <div className="rules-payment">
                <h3>Commonly Asked Questions</h3>
                <br></br>
                <h5>What happens if my team is rained out during my week?</h5>
                    <h6>Rain outs happen.  Unfortunately, if your team has a cancelled game and rescheduled for later in the season you will not be able to earn a win.</h6>
                    <h6>If the game is rescheduled for the same week, that win would count for you.</h6>
                    <h6>We recommend taking a look at the weather forecast at the beginning of each week, rainouts are part of the game and come with the territory.</h6>
                <h5>What do the advanced stats mean?</h5>
                    <h6>For a more comprehensive understanding of our advanced stats, please follow this <Link to="/stats">Link</Link></h6>
                <h5>How do I know which teams I have used?</h5>
                <h6>Each week, the standings will be updated and each player will have a full list of the teams they have already selected.</h6>
                <br></br>
                <h3>If you have any futher questions, please reach out to us at our email: <a href="mailto:register@biffleball.com">@register@biffleball.com</a></h3>
            </div>
            </div>
        </div>
    )
}

export default Rules;