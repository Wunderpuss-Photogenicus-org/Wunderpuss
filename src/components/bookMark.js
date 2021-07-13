import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
export default function bookMarks() {
  const [comment, setComment] = useState();
  const [missingInfo, setmissingInfo] = useState(false);
  const handleSubmitComment = (event) => {
    event.preventDefault();
    if (comment.length < 1) {
      setmissingInfo(true);
    } else {
      fetch('http://localhost:3000/comment', {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment }),
      }).then((data) => data.json());
    }
  };
  return (
    <div className="bookmark">
      <h1>Website:</h1>
      <div>
        <h5>Website Url</h5>
      </div>
      <div>
        <h5>description</h5>
      </div>
      <div>
        <h5>ratings</h5>
      </div>
      <div>
        <h5>Comments</h5>
        <form onSubmit={handleSubmitComment}>
          <label>
            <p>Comment</p>
            <input
              type="text"
              name="username"
              onChange={(event) => setComment(event.target.value)}
            />
          </label>
          {missingInfo ? <div>Please add more characters</div> : null}
        </form>
      </div>
      <img class="fit-picture" src="/media/cc0-images/grapefruit-slice-332-332.jpg"></img>
    </div>
  );
}
