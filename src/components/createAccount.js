import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function CreateAccount() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [missingInfo, setmissingInfo] = useState(false)
    const history = useHistory(); 

    const handleSubmit = event => {
        event.preventDefault();
        if (!firstname || !lastname || !username || !password) {

            setmissingInfo(true);
        } else {
             // sends firstname, lastname, username, password to server 
            fetch('/newAccount', {
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password, firstname, lastname})
            })
            .then(data => {
                data.json()
                // redirects to login page
                history.push("/login")
            });
        }
    }
    return(
        <div className="login">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}> 
                <label>
                    <p>Username</p>
                    <input type="text" name="username" onChange={event => setUsername(event.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" name="password" onChange={event => setPassword(event.target.value)}/>
                </label>
                <label>
                    <p>First Name</p>
                    <input type="text" name="firstname" onChange={event => setFirstname(event.target.value)}/>
                </label>
                <label>
                    <p>Last Name</p>
                    <input type="text" name="lastname" onChange={event => setLastname(event.target.value)}/>
                </label>
                <div className="loginButton">
                    <button type="submit" >Login</button>
                </div>
                {missingInfo ? <div>Please fill in all fields</div>:null}
            </form>
        </div>

    );
}

