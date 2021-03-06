import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './styles.scss'

// **Put database logic here.
// For now, it's pulling from OpenLibrary while testing/building, just have to
// swap that out for however we're talking to the dB.
// const baseUrl = 'http://openlibrary.org';
export function searchBookmarks() {
    // const url = new URL(baseUrl + '/search.json');
    // url.searchParams.append('title', query);
  fetch('/search')
    .then(data => {
    console.log("data is: ", data)
    return data;
    })
    .catch((err) => {
      console.log(err);
    });
}
// **Put component render logic here.
export function MainPage() {
  // For now, 
  const [results, setResults] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');
  // Defines event handler for setting results of a search.
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
  const resultList = (results.reverse() || []).map((book) =>
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
        <Link to="/login" className="link-button">Login</Link>
        <Link to="/newAccount" className="link-button">Join</Link>
        <Link to="/bookmark" className="link-button">bookmark</Link>
        <Link to="/add" className="link-button">Add a Bookmark</Link>
      </div>
      <div id="main-content">
        <br></br>
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
          <div className="books">
            <h1 className="h1">Bookmarks</h1>
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
    </div>
  );
}
