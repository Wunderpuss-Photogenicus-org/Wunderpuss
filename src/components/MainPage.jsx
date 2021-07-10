import React from 'react';

export function MainPage() {
  return (
    <div>
      TEST TEST TEST
      <div className="search-input">
        <input type="text" placeholder="Search"/>
      </div>
      <h1 className="h1">Search Results</h1>
      <div className="books">
        <table>
          <thead>
            <tr>
              <th className="title-col">Title</th>
              <th className="author-col">Author</th>
              <th className="year-col">Pub Year</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}