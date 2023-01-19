import React from "react";
import { useState } from "react";

const Login = () => {
    const initialState = {email: '', password: ''};
    const [formState, setFormState] = useState(initialState);

    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: [event.target.value]})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
        setFormState(initialState);
    };


    return (
        <>
        <div className="login-page">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input 
                id="email"
                type="text"
                onChange={handleChange}
                value={formState.email}
                />
                <label htmlFor="password">Password:</label>
                <input 
                id="password"
                type="text"
                onChange={handleChange}
                value={formState.password}
                />
                <button type="submit">Login</button>
            </form>
        </div>
        </>
    )
}

export default Login;