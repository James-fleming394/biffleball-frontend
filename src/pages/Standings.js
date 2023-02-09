import React from "react";

const Standings = () => {

    const data = [

        { username: "That Rance Kid", wins: 137, WAA: 6.12, WAAStar: 7.55, SOTU: 0, Week1: 5, },
        { username: "Sokun", wins: 136, WAA: 12.26, WAAStar: 9.31, SOTU: 0, Week1: 5 },
        { username: "Gricken", wins: 133, WAA: 11.63, WAAStar: 9.37, SOTU: 0, Week1: 5 },
        { username: "CMcTear", wins: 130, WAA: 3.32, WAAStar: 5.25, SOTU: 0, Week1: 5 },
        { username: "The Muffin Man", wins: 129, WAA: 3.93, WAAStar: 0.09, SOTU: 0, Week1: 5 },
        { username: "TMargolis", wins: 129, WAA: 0.18, WAAStar: 1.23, SOTU: 0, Week1: 5 },
        { username: "Hubbs", wins: 128, WAA: 8.49, WAAStar: 0, SOTU: 0, Week1: 5 },
        { username: "Cooksville Loudmouths", wins: 126, WAA: 0.15, WAAStar: 4.50, SOTU: 0, Week1: 3 },
        { username: "Sir Pony Zook Sir", wins: 123, WAA: 1.35, WAAStar: 4.06, SOTU: 0, Week1: 4 },
        { username: "Smitty", wins: 123, WAA: 3.14, WAAStar: 2.14, SOTU: 0, Week1: 4 },
        { username: "FKelly", wins: 122, WAA: -2.04, WAAStar: 5.75, SOTU: 0, Week1: 4 },
        { username: "Matty2294", wins: 121, WAA: -1.77, WAAStar: -4.09, SOTU: 0, Week1: 5 },
        { username: "Eric Adams Wainwright", wins: 121, WAA: 7.35, WAAStar: 4.32, SOTU: 0, Week1: 5 },
        { username: "AGeller", wins: 120, WAA: 0.00, WAAStar: -5.11, SOTU: 0, Week1: 5 },
        { username: "Gratataman", wins: 120, WAA: 4.63, WAAStar: 0.82, SOTU: 0, Week1: 4 },
        { username: "PGroft", wins: 120, WAA: 5.32, WAAStar: 4.55, SOTU: 0, Week1: 7 },
        { username: "Euphoria", wins: 119, WAA: -4.26, WAAStar: -2.96, SOTU: 0, Week1: 3 },
        { username: "AdamsEaton", wins: 117, WAA: -5.92, WAAStar: 0.50, SOTU: 0, Week1: 4 },
        { username: "CThompson", wins: 116, WAA: -5.83, WAAStar: -8.47, SOTU: 0, Week1: 4 },
        { username: "Rjovellanos", wins: 114, WAA: -10.98, WAAStar: -14.01, SOTU: 0, Week1: 5 },
        { username: "hshore", wins: 108, WAA: -5.82, WAAStar: -3.74, SOTU: 0, Week1: 5 },
        { username: "JesseCohen1994", wins: 106, WAA: -16.41, WAAStar: -7.56, SOTU: 0, Week1: 5 },
        { username: "bshore", wins: 104, WAA: -13.33, WAAStar: -11.19, SOTU: 0, Week1: 5 },
    ]

    return (
        <>
        <div className="standings-title">
            <h1>BiffleBall Overall Standings</h1>
            <h3>2023 Regular Season</h3>
        </div>
        <div className="standings">
            <table>
                <tbody>
                <tr>
                    <th>Username</th>
                    <th>Wins</th>
                    <th>WAA</th>
                    <th>WAA*</th>
                    <th>SOTU</th>
                    <th>
                        <select className="weeks-standing">
                        <option value="week 1">Week 1</option>
                        <option value="week 2">Week 2</option>
                        <option value="week 1">Week 3</option>
                        <option value="week 1">Week 4</option>
                        <option value="week 1">Week 5</option>
                        <option value="week 1">Week 6</option>
                        <option value="week 1">Week 7</option>
                        <option value="week 1">Week 8</option>
                        <option value="week 1">Week 9</option>
                        <option value="week 1">Week 10</option>
                        <option value="week 1">Week 11</option>
                        <option value="week 1">Week 12</option>
                        <option value="week 1">Week 13</option>
                        <option value="week 1">Week 14</option>
                        <option value="week 1">All Star</option>
                        <option value="week 1">Week 16</option>
                        <option value="week 1">Week 17</option>
                        <option value="week 1">Week 18</option>
                        <option value="week 1">Week 19</option>
                        <option value="week 1">Week 20</option>
                        <option value="week 1">Week 21</option>
                        <option value="week 1">Week 22</option>
                        <option value="week 1">Week 23</option>
                        <option value="week 1">Week 24</option>
                        <option value="week 1">Bonanza</option>
                        </select>
                    </th>
                </tr>
                </tbody>
                {data.map((val, key) => {
                    return (
                        <tbody key={key}>
                        <tr key={key}>
                            <td>{val.username}</td>
                            <td>{val.wins}</td>
                            <td>{val.WAA}</td>
                            <td>{val.WAAStar}</td>
                            <td>{val.SOTU}</td>
                            <td>{val.Week1}</td>
                            
                        </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
        <div className="standings-info">
                <h3 className="stats-title">Understanding the Stats</h3>
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