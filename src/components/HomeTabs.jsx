import React, { useState } from "react";

const Tabs = () => {
    const openTab = (evt, tabName) => {
        let i, tabContent, tabLinks;
        tabContent = document.getElementsByClassName("tabContent");
        for (i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none";
        }
        tabLinks = document.getElementsByClassName("tabLinks");
        for (i = 0; i < tabLinks.length; i++) {
            tabLinks[i].className = tabLinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    return (
        <>
        <div class="tab">
            <button class="tabLinks" onclick="openTab(event, 'About')">About</button>
            <button class="tabLinks" onclick="openTab(event, 'How-To')">How to Play</button>
            <button class="tabLinks" onclick="openTab(event, 'Prizes')">Entry + Prizes</button>
        </div>
        <div id="About" className="tabcontent">
                <h3>What is BiffleBall?</h3>
                <p>
                    BiffleBall is a Survivor-Pool style competition designed and created specifically for Baseball. 
                    Although we love the sport, Baseball being 162 games over 5 months makes it hard for the average 
                    fan to stay invested, especially if their team is out of it by mid-summer. BiffleBall provides 
                    a way for fans of the game to stay connected and always have a rooting interest regardless 
                    of individual team success.
                </p>
            </div>
        <div id="How-To" className="tabcontent">
                <h3>How do I Play?</h3>
                <p>
                Each week (Monday-Sunday) you select a team and get 1 point for every win that team has during the week. 
                You can only use a team once per season (no repeats) and overall win % or total losses have no bearings on 
                your final score. All wins are worth 1 point regardless of innings played, strength of team, etc, and whichever 
                user has the most total wins after the season wins the coveted BiffleBall Belt. 
                </p>
            </div>
        <div id="Prizes" class="tabcontent">
                <h3>Entry Fee and Prizes</h3>
                <p>BiffleBall requires a $150.00 entry fee to join our community and play for our prizes.  These prizes consist of a 
                    Winner Take All payout at the end of the season to the #1 team, as well as an amazing BiffleBall Chmapionship Belt!
                </p>
            </div>
            </>
    )
}

export default Tabs;