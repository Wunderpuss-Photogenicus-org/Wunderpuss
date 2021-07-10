const express = require('express');
const app = express();
const path = require('path');


//only need app.get route, serving everything on the front end through localhost8080

// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).send('hi')
});

app.listen(3000, () => console.log('listening on port 3000')); //listens on port 3000 -> http://localhost:3000/