import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import CreateAccount from './createAccount';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [missingInfo, setmissingInfo] = useState(false)

    const handleSubmit = event => {
        event.preventDefault();
        const frontBody = {username, password};
        if (!username || !password) {
            setmissingInfo(true);
        } else {
            console.log('body', JSON.stringify(frontBody));
            fetch('/login', {
                mode: 'no-cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/JSON',
                },
                body: JSON.stringify(frontBody)
            })
            .then(resp => resp.json())
            .then(data => {console.log('this is data', data)})
            .catch(err => console.log('this is err', err));
            return <Redirect to="/home" />
        }
    }
    return(
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}> 
                <label>
                    <p>Username</p>
                    <input type="text" name="username" onChange={event => setUsername(event.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" name="password" onChange={event => setPassword(event.target.value)}/>
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
