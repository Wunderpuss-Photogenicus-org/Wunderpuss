import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import CreateAccount from './createAccount';

export default function Login() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [missingInfo, setmissingInfo] = useState(false)

    const handleSubmit = event => {
        event.preventDefault();
        
        fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password})
            })
            .then(data => console.log(data));
            return <Redirect to="/home" />
        
    }
    return(
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}> 
                <label>
                    <p>Username</p>
                    <input type="text" onChange={event => setUserName(event.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={event => setPassword(event.target.value)}/>
                </label>
                <div className="loginButton">
                    <button type="submit">Login</button>
                </div>
                <div className="noAccount">Don't have an account? <NavLink to="/newAccount">Create Account</NavLink></div>
                {missingInfo ? <div>Please fill in all fields</div>:null}
            </form>
        </div>

    );
}
