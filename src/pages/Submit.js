import axios from "axios";
import React, { useState } from "react";
import Schedule from "../components/Schedule";

const Submit = () => {

    const initialState = {
        username: '',
        week: '',
        team: ''
    }

    const [formState, setFormState] = useState(initialState);

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value });
    }

    const handleSubmit = async (event) => {
        
        let newPick = await axios.post(`http://localhost:7001/api/picks/new`, formState)
        .then((response) => {
            return response
        })
        .catch((error) => {
            console.log(error)
        });

        setFormState(initialState);
    }

    return (
        <div className="submit">
            <div className="submit-pick">
                <h2 className="sub-pick">Submit Pick</h2>
                <form className="pick" onSubmit={handleSubmit}>
                    <div className="user">
                        <label htmlFor="input-username">Username:</label>
                        <input 
                        id="username"
                        type="text"
                        placeholder="Enter Username"
                        name="username"
                        onChange={handleChange}
                        value={formState.username}
                        />
                    </div>
                    <div className="week">
                        <label htmlFor="input-week">Week:</label>
                        <select id="week" onChange={handleChange} value={formState.week}>
                            <option>Select Week</option>
                            <option value="1">Week #1</option>
                        </select>
                    </div> 
                    <div className="team">
                        <label htmlFor="team-selection">Select Team:</label>
                        <select id="team" onChange={handleChange} value={formState.team}>
                        <option>Select Team</option>
                        <option value="ARI">Arizona Diamondbacks</option>
                        <option value="ATL">Atlanta Braves</option>
                        <option value="BAL">Baltimore Orioles</option>
                        <option value="BOS">Boston Red Sox</option>
                        <option value="CHC">Chicago Cubs</option>
                        <option value="CHW">Chicago White Sox</option>
                        <option value="CIN">Cincinnati Reds</option>
                        <option value="CLE">Cleveland Indians</option>
                        <option value="COL">Colorado Rockies</option>
                        <option value="DET">Detroit Tigers</option>
                        <option value="HOU">Houston Astros</option>
                        <option value="KAN">Kansas City Royals</option>
                        <option value="LAA">Los Angeles Angels</option>
                        <option value="LAD">Los Angeles Dodgers</option>
                        <option value="MIL">Milwaukee Brewers</option>
                        <option value="MIN">Minnesota Twins</option>
                        <option value="NYM">New York Mets</option>
                        <option value="NYY">New York Yankees</option>
                        <option value="OAK">Oakland Athletics</option>
                        <option value="PHI">Philadelphia Phillies</option>
                        <option value="PIT">Pittsburgh Pirates</option>
                        <option value="SD">San Diego Padres</option>
                        <option value="SF">San Fransisco Giants</option>
                        <option value="SEA">Seattle Seahawks</option>
                        <option value="STL">St. Louis Cardinals</option>
                        <option value="TB">Tampa Bay Rays</option>
                        <option value="TEX">Texas Rangers</option>
                        <option value="TOR">Toronto Blue Jays</option>
                        <option value="WAS">Washington Nationals</option>
                        </select>
                    </div>
                    <div className="sub-button">
                    <button type="submit" className="submit-button">Submit Pick</button>
                    </div>
                </form>
            </div>
            <div className="weather">
                
            </div>
        </div>
    )
}

export default Submit;