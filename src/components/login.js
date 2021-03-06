import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [missingInfo, setmissingInfo] = useState(false)
    const [wrongInfo, setwrongInfo] = useState(false)

    const history = useHistory(); 

    const handleSubmit = event => {
        event.preventDefault();
        const frontBody = {username, password};
        if (!username || !password) {
            // checks if any fields are missing 
            setmissingInfo(true);
        } else {
            // sends username and password to server 
            fetch('/login', {
                method: 'POST',
                mode: 'cors', 
                headers: {
                'Content-Type': 'application/json'              
                },
                body: JSON.stringify(frontBody)
            })
            .then((res) => {
                if (!res.ok) {
                    // if the username/password is incorrect
                    setwrongInfo(true);
                } else {
                    console.log("data")
                    // redirects to homepage 
                    history.push("/")
                }
            })
            .catch(err => console.log('this is err', err));
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
                {wrongInfo ? <div>Please enter correct information</div>:null}
            </form>
        </div>

    );
}
