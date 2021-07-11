require('dotenv').config()
const { Pool } = require('pg');

// new pool here using the connection string above
const pool = new Pool({
  connectionString: process.env.PG_URI
});
//exporting the pool query
module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
  };