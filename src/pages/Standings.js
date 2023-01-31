import React from "react";

const Standings = () => {

    const data = [
        { username: "The Muffin Man", wins: 0, WAA: 0, WAAStar: 0, SOTU: 0, Week1: 0 },
        { username: "AGeller", wins: 0, WAA: 0, WAAStar: 0, SOTU: 0, Week1: 0 },
        { username: "Sokun", wins: 0, WAA: 0, WAAStar: 0, SOTU: 0, Week1: 0 },
        { username: "Sir Pony Zook Sir", wins: 0, WAA: 0, WAAStar: 0, SOTU: 0, Week1: 0 },
        { username: "Gricken", wins: 0, WAA: 0, WAAStar: 0, SOTU: 0, Week1: 0 },
        { username: "CMcTear", wins: 0, WAA: 0, WAAStar: 0, SOTU: 0, Week1: 0 },
        { username: "TMargolis", wins: 0, WAA: 0, WAAStar: 0, SOTU: 0, Week1: 0 },
        { username: "Hubbs", wins: 0, WAA: 0, WAAStar: 0, SOTU: 0, Week1: 0 },
        { username: "Cooksville Loudmouths", wins: 0, WAA: 0, WAAStar: 0, SOTU: 0, Week1: 0 },
        { username: "Smitty", wins: 0, WAA: 0, WAAStar: 0, SOTU: 0, Week1: 0 },
        { username: "Gratataman", wins: 0, WAA: 0, WAAStar: 0, SOTU: 0, Week1: 0 },
        { username: "FKelly", wins: 0, WAA: 0, WAAStar: 0, SOTU: 0, Week1: 0 },
        { username: "Matty2294", wins: 0, WAA: 0, WAAStar: 0, SOTU: 0, Week1: 0 },
        { username: "Eric Adams Wainwright", wins: 0, WAA: 0, WAAStar: 0, SOTU: 0, Week1: 0 },
        { username: "PGroft", wins: 0, WAA: 0, WAAStar: 0, SOTU: 0, Week1: 0 },
        { username: "AdamsEaton", wins: 0, WAA: 0, WAAStar: 0, SOTU: 0, Week1: 0 },
        { username: "CThompson", wins: 0, WAA: 0, WAAStar: 0, SOTU: 0, Week1: 0 },
        { username: "Rjovellanos", wins: 0, WAA: 0, WAAStar: 0, SOTU: 0, Week1: 0 },
        { username: "hshore", wins: 0, WAA: 0, WAAStar: 0, SOTU: 0, Week1: 0 },
        { username: "That Rance Kid", wins: 0, WAA: 0, WAAStar: 0, SOTU: 0, Week1: 0 },
        { username: "JesseCohen1994", wins: 0, WAA: 0, WAAStar: 0, SOTU: 0, Week1: 0 },
        { username: "bshore", wins: 0, WAA: 0, WAAStar: 0, SOTU: 0, Week1: 0 },
        { username: "Euphoria", wins: 0, WAA: 0, WAAStar: 0, SOTU: 0, Week1: 0 },
    ]

    return (
        <>
        <div className="standings-title">
            <h1>BiffleBall Overall Standings</h1>
            <h3>2023 Season</h3>
        </div>
        <div className="standings">
            <table>
                <tr>
                    <th>Username</th>
                    <th>Wins</th>
                    <th>WAA</th>
                    <th>WAA*</th>
                    <th>SOTU</th>
                    <th>
                        <select className="weeks-standing">
                        <option value="week 1">Week 1</option>
                        </select>
                    </th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.username}</td>
                            <td>{val.wins}</td>
                            <td>{val.WAA}</td>
                            <td>{val.WAAStar}</td>
                            <td>{val.SOTU}</td>
                            <td>{val.Week1}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
        <div className="standings-info">
                <h3>Understanding the Stats</h3>
                <br></br>
                <h4>WAA - Wins Above Average</h4>
                <h5>Your standardized win total relative to those who have used the same teams as you alreadys</h5>
                <br></br>
                <h4>WAA* - Wins Above Average*</h4>
                <h5>Standardized win total if your teams played 7 games every week</h5>
                <br></br>
                <h4>SOTU - Strength of Teams Used</h4>
                <h5>Combined record of all your teams selected. The lower your SOTU the worse teams you have used so far</h5>
            </div>
        </>
    )
}

export default Standings;