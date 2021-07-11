import React from 'react';
import { Link } from "react-router-dom";

// **Put database logic here.
// For now, it's pulling from OpenLibrary while testing/building, just have to
// swap that out for however we're talking to the dB.
const baseUrl = 'http://openlibrary.org';

export function searchBookmarks(query) {
    const url = new URL(baseUrl + '/search.json');
    url.searchParams.append('title', query);

    return fetch(url).then(response => response.json());
}

// **Put component render logic here.
export function MainPage() {

  // For now, 
  const [results, setResults] = React.useState(0);

  // Defines event handler for setting results of a search.
  const handleSearch = (event) => {
    searchBookmarks(event.target.value).then(response => {
      setResults(response.docs);
    });
  };
  
  // Creates the results list after a search. The callback defines the
  // structure of a single result table element.
  const resultList = (results || []).map((book) =>
    <tr key={book.key}>
      <td>
        <h2>{book.title}</h2>
        <h5>{book.first_publish_year}</h5>
        {book.author_name && book.author_name.join(', ')}
      </td>
    </tr>
  );

  return (
    <div>
      <div id="header">
        <Link to="/login">Login</Link>
        <Link to="/newAccount">Join</Link>
      </div>
      <Link to="/login">Add a Bookmark</Link>
      <div className="search-input">
      <input onChange={handleSearch} type="text" placeholder="Search"/>
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