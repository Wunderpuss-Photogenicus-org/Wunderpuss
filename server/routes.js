const express = require('express');

const controllers = require('./controllers');

const router = express.Router();

//  when page is loaded display all the websites
router.get('/', controllers.getWebsites, (req, res) => {
    res.status(200).json([...res.locals.websites])
})
router.get('/search', controllers.getOneWebsite, (req, res)=>{
    res.status(200).json([...res.locals.singleWeb])
})
// when user clicks create account, will direct them to get new account
router.post('/newAccount', controllers.createAccount, (req, res)=>{
    res.status(200).json({});
})
// when user clicks log in, and has a successful log in, will redirect to home page
router.post('/login', controllers.logging, (req, res)=>{
    // res.redirect('/') 
    // without .end(), fetch request continues waiting   
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
module.exports = router

// controllers.getWebsites
// controllers.getOneWebsite
// controllers.createAccount
// controllers.logging

