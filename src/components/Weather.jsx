import React, { useState, useEffect } from 'react';

const WeeklyWeather = () => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q=London,uk&cnt=7&appid=YOUR_API_KEY')
        .then(response => response.json())
        .then(data => setWeatherData(data.list));
    }, []);

    return (
    <div>
        {weatherData.length > 0 && (
        <table>
            <thead>
            <tr>
                <th>Date</th>
                <th>Temperature (Kelvin)</th>
                <th>Humidity (%)</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {weatherData.map(day => (
                <tr key={day.dt}>
                <td>{new Date(day.dt * 1000).toLocaleDateString()}</td>
                <td>{day.temp.day}</td>
                <td>{day.humidity}</td>
                <td>{day.weather[0].description}</td>
            </tr>
            ))}
        </tbody>
        </table>
    )}
    </div>
);
};

export default WeeklyWeather;
