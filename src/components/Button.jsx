import React from "react";
import { useNavigate } from "react-router-dom";

const Button = () => {
    let navigate = useNavigate();

    const registerClick = () => {
        navigate("/register")
    }

    return (
        <div className="cool-button">
            <button className="cool" onClick={registerClick}>
                Don't Miss Out!  
                <br></br>
                Join the Community Now!
            </button>
        </div>
    )
}

export default Button;