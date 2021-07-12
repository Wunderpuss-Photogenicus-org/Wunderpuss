const express = require('express');

const controllers = require('./controllers');

const router = express.Router();

//  when page is loaded display all the websites
router.get('/h', controllers.getWebsites, (req, res) => {
    res.status(200).json([...res.locals.websites])
})
router.get('/search', controllers.getOneWebsite, (req, res)=>{
    res.status(200).json([...res.locals.singleWeb])
})
// when user clicks create account, will direct them to get new account
router.post('/newAccount', controllers.createAccount, (req, res)=>{
    res.status(200).json({});
})
// router.get('/login', controllers.logging, (req, res)=>{
//   // res.redirect('/') 
//   // without .end(), fetch request continues waiting   
//   res.status(200).end();
// })
// when user clicks log in, and has a successful log in, will redirect to home page
router.post('/login', controllers.logging
// (req, res)=>{
    // res.redirect('/') 
    // without .end(), fetch request continues waiting   
    // res.status(200).end();
// }
)

router.get('/home/',controllers.getWebsites, (req, res)=>{
    res.status(200).json([...res.locals.websites])
})
router.get('/home/',controllers.getOneWebsite, (req, res)=>{
    res.status(200).json([...res.locals.websites])
})
router.post('/add', controllers.addBookmark, (req, res)=>{
    res.status(200).json({}).end();
})

// when user goes to the bookmark page, will display bookmark info from database
router.get('/bookmarkPage', controllers.getWebsiteInfo, (req, res) => {
  res.status(200).json(res.locals.websites)
})
// when user tries to post a comment on the bookmarks page, should add comments to the comments table and display it
// router.post('/addComment', controllers.postComment, (req, res) => {
//   res.status(200).json(res.locals.comments)
// })

module.exports = router


