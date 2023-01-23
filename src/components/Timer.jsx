import React from 'react';
import { useState, useEffect } from 'react';

const Timer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "March, 30, 2023";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
};

    useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
}, []);

    return (
    <div className="timer-entire">
        <h1>Countdown to Opening Day:</h1>
        <div className='timer'>
            <h2>{days}</h2>
            <h4>Days</h4>
        </div>
        <div className='timer'>
            <h2>{hours}</h2>
            <h4>Hours</h4>
        </div>
        <div className='timer'>
            <h2>{minutes}</h2>
            <h4>Minutes</h4>
        </div>
        <div className='timer'>
            <h2>{seconds}</h2>
            <h4>Seconds</h4>
        </div>
    </div>
    );
};

export default Timer;