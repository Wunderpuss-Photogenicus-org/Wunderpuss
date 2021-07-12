const express = require('express');

const controllers = require('./controllers');

const router = express.Router();

router.get('/', controllers.getWebsites, (req, res)=>{
    res.status(200).json([...res.locals.websites])
})
router.get('/search', controllers.getOneWebsite, (req, res)=>{
    res.status(200).json([...res.locals.singleWeb])
})
router.post('/newAccount', controllers.createAccount, (req, res)=>{
    res.status(200).json({});
})
router.post('/login', controllers.logging, (req, res)=>{
    res.redirect('/')
})
module.exports = router