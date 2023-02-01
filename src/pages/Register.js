import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const initialState = {
        username2: '',
        email: '',
        password: ''
    };
    const [formState, setFormState] = useState(initialState);

    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: [event.target.value]})
    }

    const handleSubmit = async (event) => {

        let newUser = await axios.post(`http://localhost:7001/api/users/new`, formState)
        .then((response) => {
            return response
        })
        .catch((error) => {
            console.log(error)
        });

        console.log(formState);
        setFormState(initialState);
    };

    let navigate = useNavigate();

    const loginClick = () => {
        navigate("/login")
    }

    return (
        <div className="container">
            <div className="card">
                <div className="form">
                    <div className="left-side">
                        <img src="/img/biffle-header Small.png" />
                    </div>
                    <div className="right-side">
                    <div className="register-link">
                            <p><button className="reg-button-login" type="button" onClick={loginClick}>Click Here to Login</button></p>
                        </div>
                    <div className="hello">
                        <h2>Register</h2>
                        <p>Sign up and play!</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className="input_text">
                                <input 
                                id="username2"
                                type="text"
                                placeholder="Enter Username"
                                name="username2"
                                onChange={handleChange}
                                value={formState.username2}
                                />
                            </div>
                        <div className="input_text">
                                <input 
                                id="email"
                                type="text"
                                placeholder="Enter Email"
                                name="email"
                                onChange={handleChange}
                                value={formState.email}
                                />
                        </div>
                        <div className="input_text">
                                <input 
                                id="password"
                                type="text"
                                placeholder="Enter Password"
                                name="password"
                                onChange={handleChange}
                                value={formState.password}
                                />
                        </div>
                        <div className="btn">
                            <button className="login-button" type="submit">Sign Up</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;