import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

// **Put component render logic here.
export function MainPage() {
  // For now, 
  const [results, setResults] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');
  // Defines event handler for setting results of a search.

  // Fetch query results on search
  const searchBookmarks = (searchText) => {
    fetch('/search', {
      method: 'GET',
      query: {searchText: JSON.stringify({searchText})}
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .then(data => {
        setResults(data)})
      .catch(err => console.log('bookmarks search err', err))
  }

  const handleSearch = (event) => {
    event.preventDefault();
    searchBookmarks(searchText)
      .then(response => {
        console.log('Response is: ', response)
        setResults(response);
      });
  };
  const handleOnChange = (event) => {
    setSearchText(event.target.value);
  }

  // Fetch database contents on page load.
  const getAPI = () => {
    fetch('/h')
      .then(res => res.json())
      .then(data => {
        setResults(data)})
    .catch(err => console.log('this is err', err))
  }

  useEffect(() => {
    return getAPI();
  },[]);

  // Creates the results list after a search. The callback defines the
  // structure of a single result table element.
  const resultList = (results || []).map((book) =>
    <tr key={book.website_id}>
      <td>
        <h2>{book.websitename}</h2>
        <img src={`${book.picsrc}`} />
        <h5>{book.user_id}</h5>
        {book.description}
      </td>
    </tr>
  );
  return (
    <div>
      <div id="header">
        <Link to="/login">Login</Link>
        <Link to="/newAccount">Join</Link>
      </div>
      <Link to="/add">Add a Bookmark</Link>
      <div className="search-input">
      <form onSubmit={handleSearch}>
        <input 
          name="input" 
          className="search" 
          type="search" 
          placeholder="Search" 
          //value={this.state.searchTerm} 
          onChange={handleOnChange}
        />
      </form>
      </div>
      <h1 className="h1">Bookmarks</h1>
      <div className="books">
        <table>
          <thead>
            <tr>
              <th className="results-col"></th>
            </tr>
          </thead>
          <tbody>{resultList}</tbody>
        </table>
      </div>
    </div>
  );
}