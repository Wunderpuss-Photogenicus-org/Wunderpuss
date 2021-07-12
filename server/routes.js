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
    res.status(200).end();
})

router.get('/home/:users_id',controllers.getWebsitesLogin, (req, res)=>{
    res.status(200).json([...res.locals.websites])
})
router.get('/home/:users_id',controllers.getOneWebsite, (req, res)=>{
    res.status(200).json([...res.locals.websites])
})
router.post('/add', controllers.addBookmark, (req, res)=>{
    res.status(200).json({});
})

// when user goes to the bookmark page, will display bookmark info from database
router.get('/bookmarkPage', controllers.getWebsiteInfo, (req, res) => {
  res.status(200).json(res.locals.websites)
})
// when user tries to post a comment on the bookmarks page, should add comments to the comments table and display it
router.post('/addComment', controllers.postComment, (req, res) => {
  res.status(200).json(res.locals.comments)
})

module.exports = router


