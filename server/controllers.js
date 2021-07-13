const db = require('./models');
const express = require('express');
const app = express();
const websitesController = {};

websitesController.getWebsites = (req, res, next) => {
  //declare a variable assgin it our query string
  const text = 'SELECT * FROM websites';
  //call the method from models called db.query, inside the method it will take the query str
  db.query(text)
    //then get the result
    .then((data) => {
      console.log();
      res.locals.websites = data.rows;
      //return next
      return next();
      //catch error
    })
    .catch((err) => {
      console.log(err);
      //return next
      return next(err);
    });
};
websitesController.getOneWebsite = (req, res, next) => {
  //request the input from the input field's body
  const { input } = req.body;
  //declare a variable assgin it our query string
  const text = 'SELECT * FROM websites WHERE websitename = $1';
  //call the method from models called db.query, inside the method it will take the query str
  db.query(text, [input])
    //then get the result
    .then((data) => {
      res.locals.singleWeb = data.rows;
      console.log(res.locals.singleWeb);
      //return next
      return next();
      //catch error
    })
    .catch((err) => {
      console.log(err);
      //return next
      return next(err);
    });
};
websitesController.createAccount = (req, res, next) => {
  //request the body from the input fields
  const { username, firstname, lastname, password } = req.body;
  const list = [username, firstname, lastname, password];
  //delcare a variable assign it our query string to post data
  const text =
    'INSERT INTO users (username, firstname, lastname, password) values($1, $2, $3, $4)';
  //call the db function that takes in the text variable as the first param, req.body as the second param in array form
  db.query(text, list)
    //get the data using a promise
    .then((data) => {
      console.log(data);
      res.json(data);
      return next();
      //catch error
    })
    .catch((err) => {
      console.log(err);
      return next(err);
    });
};


websitesController.getWebsiteInfoAfterAdd = (req, res, next) => {
  // retrieve from table website logo, website name, website url, website description
  const websiteInfo = 'SELECT websites.*, comments.cdescription AS comments FROM websites LEFT OUTER JOIN comments ON websites.website_id = comments.website_id ORDER BY website_id DESC LIMIT 1'
  //call the method from models called db.query, inside the method it will take the query str
  db.query(websiteInfo)
    //then get the result
    .then((data) => {
      console.log();
      res.locals.websites = data.rows;
      //return next
      return next();
      //catch error
    })
    .catch((err) => {
      console.log(err);
      //return next
      return next(err);
    });
}

websitesController.getWebsiteInfoAfterClick = (req, res, next) => {
  const {websitename} = req.body;
  // retrieve from table website logo, website name, website url, website description
  const websiteInfo = 'SELECT websites.*, comments.cdescription AS comments FROM websites LEFT OUTER JOIN comments ON websites.website_id = comments.website_id WHERE websitename = $1'
  db.query(websiteInfo, [websitename])
  //then get the result
  .then((data) => {
    console.log();
    res.locals.websites = data.rows;
    //return next
    return next();
    //catch error
  })
  .catch((err) => {
    console.log(err);
    //return next
    return next(err);
  });
}
websitesController.logging = (req, res, next) =>{
    const {username, password} = req.body
    const list = [username, password]
    const text = 'SELECT * FROM users WHERE username = $1 AND password =$2 '
        db.query(text, list)
        .then ((data)=>{  
            console.log('dattaaa', data.rows);
            if (data.rows[0].username === username && data.rows[0].password === password) {
              console.log('usernameee', data.rows[0].username )
              console.log('passworddd', data.rows[0].password )
                // req.session.loggedin = true;
                // req.session.username = username;
              res.status(200).end()
            } else {
              res.status(404).end()
            }       
        }).catch(err=>{
            console.log(err)
            return next()
        })
}
websitesController.addBookmark = (req, res, next)=>{
  //request the body from the input fields
  console.log(req.app.locals.id)
  const {websitename, picsrc, url, description,username} = req.body;
  const list = [websitename, picsrc, url, description, username]
  //delcare a variable assign it our query string to post data
  const text = 'INSERT INTO websites (websitename, picsrc, url,description, user_id) values($1, $2, $3, $4, (select id from users where username= $5))'
  //call the db function that takes in the text variable as the first param, req.body as the second param in array form
  db.query(text, list)
   //get the data using a promise
  .then((data)=>{
      console.log(data);
      res.json(data);
      return next();
      //catch error
  }).catch((err)=>{
      console.log(err)
      return next(err)
  })
}
websitesController.postComment = (req, res, next) => {
  //request the body from the input fields
  const {comment, user_id, websitename} = req.body;
  const postedComment = [comment, user_id, websitename]
  //delcare a variable assign it our query string to post data
  const addedComment = 'insert into comments (cdescription, user_id, website_id) values ($1, $2,( select website_id from websites where websitename=$3))';

  db.query(addedComment, postedComment)
  // then get the data using a promise
  .then((data) => {
    console.log(data);
    return next();
  }).catch((err) => {
    console.log(err);
    return next(error);
  })
}
websitesController.getNewestComment = (req, res, next) => {
  // retrieve from table website logo, website name, website url, website description
  const websiteInfo = 'SELECT comments.cdescription FROM comments LEFT OUTER JOIN comments ON websites.website_id = comments.website_id ORDER BY website_id DESC LIMIT 1'
  //call the method from models called db.query, inside the method it will take the query str
  db.query(websiteInfo)
    //then get the result
    .then((data) => {
      console.log();
      res.locals.websites = data.rows;
      //return next
      return next();
      //catch error
    })
    .catch((err) => {
      console.log(err);
      //return next
      return next(err);
    });
}

module.exports = websitesController;
