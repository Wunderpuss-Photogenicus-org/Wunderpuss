import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

export default function AddBookmark() {
    const [websiteLink, setwebsiteLink] = useState('');
    const [websiteName, setwebsiteName] = useState('');
    const [webDes, setwebDes] = useState('');
    const [picLink, setLastname] = useState('');
    const [missingInfo, setmissingInfo] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        if (!websiteLink || !websiteName || !webDes || !picLink) {
            setmissingInfo(true);
        } else {
            fetch('http://localhost:3000/add', {
                mode: 'no-cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({websiteLink, websiteName, webDes, picLink})
            })
            .then(data => data.json());
            <Redirect to="/" />
        }
    }
    return(
        <div className="login">
            <h1>Add Bookmark</h1>
            <form onSubmit={handleSubmit}> 
                <label>
                    <p>Website Link</p>
                    <input type="text" name="websiteLink" onChange={event => setwebsiteLink(event.target.value)}/>
                </label>
                <label>
                    <p>Website Name</p>
                    <input type="text" name="websiteName" onChange={event => setwebsiteName(event.target.value)}/>
                </label>
                <label>
                    <p>Website Description</p>
                    <input type="text" name="webDes" onChange={event => setFwebDes(event.target.value)}/>
                </label>
                <label>
                    <p>Picture URL</p>
                    <input type="text" name="picLink" onChange={event => setpicLink(event.target.value)}/>
                </label>
                <div className="loginButton">
                    <button type="submit" >Add</button>
                </div>
                {missingInfo ? <div>Please fill in all fields</div>:null}
            </form>
        </div>
    );
}

