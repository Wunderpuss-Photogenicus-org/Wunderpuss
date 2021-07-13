import React, { useState, useEffect } from 'react';
import { NavLink, Redirect} from 'react-router-dom';

export default function bookMarks(props) {
    const [comment, setComment] = useState();
    const [missingInfo, setmissingInfo] = useState(false)
    const [results, setResults] = React.useState([]);
    const [displayComment, setdisplayComment] = useState([]);
    

    const handleSubmitComment = event => {
        event.preventDefault();
        if(comment.length < 1){
            setmissingInfo(true)
        }else{
            fetch('/comment', {
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({comment})
            })
            .then(data => data.json());
        }
    }
    return(
        <div className="bookmark">
            <h1>Reddit</h1>
            <img className="reddit" src="https://www.redditinc.com/assets/images/site/reddit-logo.png"></img>
            <div>
                <h5>https://www.reddit.com</h5>
            </div>
            <div>
                <h5>Reddit is a social news website and forum where content is socially curated and promoted by site members through voting. The site name is a play on the words "I read it." Reddit member registration is free, and it is required to use the website's basic features.</h5>
            </div>
            <div>
                <h5>4.5/5</h5>
            </div>
            <div>
                <h5>Comments</h5>
                <div className="comments">
                    <div className="commentUser"> 
                    User: hanging_with_my_gnomies
                    </div>
                    <div className="commentDate"> 
                    07/12/2021
                    </div>
                    <div className="commentDescription"> 
                    dudeeee this site is da bomb. 10000/10 fer reals.  
                    </div>
                </div>
                <form onSubmit={handleSubmitComment}> 
                    <label>
                        <p>Comment</p>
                        <input type="text" name="username" onChange={event => setComment(event.target.value)}/>
                    </label>
                    {missingInfo ? <div>Please add more characters</div>:null}
                </form>
            </div>
        </div>
    );
}