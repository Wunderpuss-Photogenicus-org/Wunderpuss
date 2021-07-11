const express = require('express');

const controllers = require('./controllers');

const router = express.Router();

//  when page is loaded display all the websites
router.get('/', controllers.getWebsites, (req, res) => {
    res.status(200).json([...res.locals.websites])
})
// when user inputs a search request in the search bar
router.get('/', controllers.getOneWebsite ,(req, res)=>{
    res.status(200).json([...res.locals.singleWeb])
})
// when user clicks create account, will direct them to get new account
router.post('/newAccount', controllers.createAccount, (req, res)=>{
    res.status(200).json({});
})
// when user clicks log in, and has a successful log in, will redirect to home page
router.post('/login', controllers.logging, (req, res)=>{
    res.redirect('/')
})
// when user clicks add bookmark button and has successfully added a new bookmark
router.post('/addBookmark', (req, res) => {
  // redirect them to bookmark page
  res.redirect('/bookmarkPage');
})
// when user goes to the bookmark page, will display bookmark info from database

module.exports = router

// controllers.getWebsites
// controllers.getOneWebsite
// controllers.createAccount
// controllers.logging