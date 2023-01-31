import React from "react";

const Stats = () => {

    const dataTeamsUsed = [
        { username: "The Muffin Man", TeamsUsed: "New York Mets"},
        { username: "AGeller", TeamsUsed: "New York Yankees"},
        { username: "That Rance Kid", TeamsUsed: "St. Louis Cardinals"},
    ]

    return (
        <>
        <div className="standings-title">
            <h1>BiffleBall Advanced Stats</h1>
            <h3>2023 Season</h3>
        </div>
        <div className="stats-teamsused">
            <h2 className="teams-used">Teams Used</h2>
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
        </>
    )
}

export default Stats;