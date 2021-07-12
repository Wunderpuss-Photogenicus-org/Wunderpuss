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
    // res.redirect('/') 
    // without .end(), fetch request continues waiting 
    res.status(200).end();
})
module.exports = router