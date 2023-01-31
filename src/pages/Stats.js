import React from "react";

const Stats = () => {

    const dataTeamsUsed = [
        { username: "The Muffin Man", TeamsUsed: "New York Mets"},
        { username: "AGeller", TeamsUsed: "New York Yankees"},
        { username: "That Rance Kid", TeamsUsed: "St. Louis Cardinals"},
        { username: "Team Average Wins"},
    ];

    const WAAData = [
        { team: "Blue Jays", wins: 0, winsAvg: 0.0},
        { team: "Yankees", wins: 0, winsAvg: 0.0},
        { team: "Rays", wins: 0, winsAvg: 0.0},
        { team: "Red Sox", wins: 0, winsAvg: 0.0},
        { team: "Orioles", wins: 0, winsAvg: 0.0},
        { team: "Guardians", wins: 0, winsAvg: 0.0},
        { team: "Twins", wins: 0, winsAvg: 0.0},
        { team: "White Sox", wins: 0, winsAvg: 0.0},
        { team: "Tigers", wins: 0, winsAvg: 0.0},
        { team: "Royals", wins: 0, winsAvg: 0.0},
        { team: "Mariners", wins: 0, winsAvg: 0.0},
        { team: "Angels", wins: 0, winsAvg: 0.0},
        { team: "Athletics", wins: 0, winsAvg: 0.0},
        { team: "Astros", wins: 0, winsAvg: 0.0},
        { team: "Rangers", wins: 0, winsAvg: 0.0},
        { team: "Mets", wins: 0, winsAvg: 0.0},
        { team: "Braves", wins: 0, winsAvg: 0.0},
        { team: "Marlins", wins: 0, winsAvg: 0.0},
        { team: "Phillies", wins: 0, winsAvg: 0.0},
        { team: "Nationals", wins: 0, winsAvg: 0.0},
        { team: "Cardinals", wins: 0, winsAvg: 0.0},
        { team: "Brewers", wins: 0, winsAvg: 0.0},
        { team: "Cubs", wins: 0, winsAvg: 0.0},
        { team: "Pirates", wins: 0, winsAvg: 0.0},
        { team: "Reds", wins: 0, winsAvg: 0.0},
        { team: "Dodgers", wins: 0, winsAvg: 0.0},
        { team: "Giants", wins: 0, winsAvg: 0.0},
        { team: "Rockies", wins: 0, winsAvg: 0.0},
        { team: "Padres", wins: 0, winsAvg: 0.0},
        { team: "Diamondbacks", wins: 0, winsAvg: 0.0},
        { team: "All Star Week", wins: 0,winsAvg: 0.0},
    ];

    return (
        <>
        <div className="standings-title">
            <h1>BiffleBall Advanced Stats</h1>
            <h3>2023 Season</h3>
        </div>
        <div className="stats-teamsused">
            <h2 className="teams-used">Teams Used by Individual</h2>
            <table className="teamsused-table">
                <tr>
                    <th>Username</th>
                    <th>Week 1</th>
                    <th>Week 2</th>
                    <th>Week 3</th>
                    <th>Week 4</th>
                    <th>Week 5</th>
                    <th>Week 6</th>
                    <th>Week 7</th>
                    <th>Week 8</th>
                    <th>Week 9</th>
                    <th>Week 10</th>
                    <th>Week 11</th>
                    <th>Week 12</th>
                    <th>Week 13</th>
                    <th>Week 14</th>
                    <th>Week 15</th>
                    <th>Week 16</th>
                    <th>Week 17</th>
                    <th>Week 18</th>
                    <th>Week 19</th>
                    <th>Week 20</th>
                    <th>Week 21</th>
                    <th>Week 22</th>
                    <th>Week 23</th>
                    <th>Week 24</th>
                    <th>Week 25</th>
                </tr>
            {dataTeamsUsed.map((val, key) => {
                return (
                    <tr key={key}>
                        <td>{val.username}</td>
                        <td>{val.TeamsUsed}</td>
                    </tr>
                )
            })}
            </table>
        </div>
        <div className="WAA-title">
            <h1>WAA</h1>
        </div>
        <div className="waa-table">
            <table>
                <tr>
                    <th>Username</th>
                    <th>Blue Jays</th>
                    <th>Yankees</th>
                    <th>Rays</th>
                    <th>Red Sox</th>
                    <th>Orioles</th>
                    <th>Guardians</th>
                    <th>Twins</th>
                    <th>White Sox</th>
                    <th>Tigers</th>
                    <th>Royals</th>
                    <th>Mariners</th>
                    <th>Angels</th>
                    <th>Athletics</th>
                    <th>Astros</th>
                    <th>Rangers</th>
                    <th>Mets</th>
                    <th>Braves</th>
                    <th>Marlins</th>
                    <th>Phillies</th>
                    <th>Nationals</th>
                    <th>Cardinals</th>
                    <th>Brewers</th>
                    <th>Cubs</th>
                    <th>Pirates</th>
                    <th>Reds</th>
                    <th>Dodgers</th>
                    <th>Giants</th>
                    <th>Rockies</th>
                    <th>Padres</th>
                    <th>Diamondbacks</th>
                    <th>All-Star Week</th>
                </tr>
                {dataTeamsUsed.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.username}</td>
                            <td>{val.wins}</td>
                        </tr>
                    )
                })}
                {/* {WAAData.map((val, key) => {
                    return (
                        <tr key={key}>

                        </tr>
                    )
                })} */}
            </table>
        </div>
        <div className="waa*">
            <h1>WAA*</h1>
        </div>
        <div className="waa-table">
            <table>
            <tr>
                    <th>Username</th>
                    <th>Blue Jays</th>
                    <th>Yankees</th>
                    <th>Rays</th>
                    <th>Red Sox</th>
                    <th>Orioles</th>
                    <th>Guardians</th>
                    <th>Twins</th>
                    <th>White Sox</th>
                    <th>Tigers</th>
                    <th>Royals</th>
                    <th>Mariners</th>
                    <th>Angels</th>
                    <th>Athletics</th>
                    <th>Astros</th>
                    <th>Rangers</th>
                    <th>Mets</th>
                    <th>Braves</th>
                    <th>Marlins</th>
                    <th>Phillies</th>
                    <th>Nationals</th>
                    <th>Cardinals</th>
                    <th>Brewers</th>
                    <th>Cubs</th>
                    <th>Pirates</th>
                    <th>Reds</th>
                    <th>Dodgers</th>
                    <th>Giants</th>
                    <th>Rockies</th>
                    <th>Padres</th>
                    <th>Diamondbacks</th>
                    <th>All-Star Week</th>
                </tr>
                {dataTeamsUsed.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.username}</td>
                            <td>{val.wins}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
        </>
    )
}

export default Stats;