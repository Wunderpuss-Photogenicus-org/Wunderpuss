const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');

/**
 * handle parsing request body
 */


 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));

app.use(express.json());
<<<<<<< HEAD
// app.use(express.urlencoded({ extended: true }));
=======
app.use(express.urlencoded({ extended: true }));

>>>>>>> da442f854ade030dbd0d642b88ec7f548ebdbaa2
//only need app.get route, serving everything on the front end through localhost8080

// serve index.html on the route '/'
app.use(routes);

app.listen(3000, () => console.log('listening on port 3000')); //listens on port 3000 -> http://localhost:3000/