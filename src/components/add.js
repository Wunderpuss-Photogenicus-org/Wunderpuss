import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
export default function AddBookmark() {
    const [websiteLink, setwebsiteLink] = useState('');
    const [websiteName, setwebsiteName] = useState('');
    const [webDes, setwebDes] = useState('');
    const [picLink, setpicLink] = useState('');
    const [missingInfo, setmissingInfo] = useState(false);
    const history = useHistory(); 
    const handleSubmit = event => {
        event.preventDefault();
        if (!websiteLink || !websiteName || !webDes || !picLink) {
            // checks if any fields are missing 
            setmissingInfo(true);
        } else {
          // sends websiteLink, websiteName, description, picture link to server 

          fetch('/add', {
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({websiteLink, websiteName, webDes, picLink})
            })
            .then(data => {data.json()
                // redirects to homepage 
                history.push("/")});
        }
    }
    return(
        <div className="login">
            <h1>Add Bookmark</h1>
            <form onSubmit={handleSubmit}> 
                <label>
                    <p>Website Link</p>
                    <input type="text" name="url" onChange={event => setwebsiteLink(event.target.value)}/>
                </label>
                <label>
                    <p>Website Name</p>
                    <input type="text" name="websitename" onChange={event => setwebsiteName(event.target.value)}/>
                </label>
                <label>
                    <p>Website Description</p>
                    <input type="text" name="description" onChange={event => setwebDes(event.target.value)}/>
                </label>
                <label>
                    <p>Picture URL</p>
                    <input type="text" name="picsrc" onChange={event => setpicLink(event.target.value)}/>
                </label>
                <div className="loginButton">
                    <button type="submit" >Add</button>
                </div>
                {missingInfo ? <div>Please fill in all fields</div>:null}
            </form>
    </div>
  );
}
