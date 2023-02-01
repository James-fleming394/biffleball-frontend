// import React from "react";
// import { useState, useEffect } from "react";

// const WeatherForcast = () => {

//     const [city, setCity] = useState("");
//     const [weatherData, setWeatherData] = useState([]);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         if(!city) return;

//         setLoading(true);
//         fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=a7d88bd22da196dd0a55310dfe834d9b`)
//         .then(response => response.json())
//         .then(data => {
//             setWeatherData(data.list);
//             setLoading(false);
//         });
//     }, [city]);

//     return (
//         <div className="weather">
//             <h2>Weather Forecast</h2>
//             <div className="weather-input">
//                 <input 
//                 type="text"
//                 value={city}
//                 onChange={event => setCity(event.target.value)}
//                 placeholder="Enter City Name"
//             />
//             {loading && <p>Loading...</p>}
//             {weatherData.length > 0 && (
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Date</th>
//                             <th>Temperature</th>
//                             <th>Humidity</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {weatherData.map(item => {
//                             <tr key={item.dt}>
//                                 <td>{new Date(item.dt * 1000).toLocaleDateString()}</td>
//                                 <td>{item.main.temp}°F</td>
//                                 <td>{item.main.humidity}%</td>
//                             </tr>
//                         })}
//                     </tbody>
//                 </table>
//             )}
//             </div>
//         </div>
//     )
// }

// export default WeatherForcast;
