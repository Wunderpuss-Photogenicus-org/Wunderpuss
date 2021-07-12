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
// when user goes to the bookmark page, will display the most recent entry from database(the one user just created)
router.get('/bookmarkPage', controllers.getWebsiteInfo, (req, res) => {
  res.status(200).json(res.locals.websites)
})
// // when user goes to the bookmark page, will display all comments info from database in relation to the website id
// router.get('/bookmarkPage', controllers.getCommentsList, (req, res) => {
//   res.status(200).json(res.locals.comments)
// })

module.exports = router

// controllers.getWebsites
// controllers.getOneWebsite
// controllers.createAccount
// controllers.logging