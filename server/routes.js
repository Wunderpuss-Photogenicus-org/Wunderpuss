const express = require('express');

const controllers = require('./controllers');

const router = express.Router();

router.get('/', controllers.getWebsites, (req, res)=>{
    res.status(200).json([...res.locals.websites])
})
router.get('/', controllers.getOneWebsite, (req, res)=>{
    res.status(200).json([...res.locals.singleWeb])
})
router.post('/newAccount', controllers.createAccount, (req, res)=>{
    res.status(200).json({});
})
router.post('/login', controllers.logging, (req, res)=>{
    res.redirect('/')
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
module.exports = router