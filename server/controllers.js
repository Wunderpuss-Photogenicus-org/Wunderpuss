const db = require('./models');

const websitesController = {};

websitesController.getWebsites = (req,res,next)=>{
    //declare a variable assgin it our query string
    const text = 'SELECT * FROM websites'
    //call the method from models called db.query, inside the method it will take the query str
    db.query(text)
    //then get the result
    .then((data)=>{
        console.log()
        res.locals.websites = data.rows
        //return next
        return next()
         //catch error
    }).catch((err)=>{
        console.log(err);
        //return next
        return next(err)
    })
    
}
websitesController.getOneWebsite = (req, res, next)=>{

    //request the input from the input field's body
    const {input} = req.body
    //declare a variable assgin it our query string
    const text = 'SELECT * FROM websites WHERE websitename = $1'
    //call the method from models called db.query, inside the method it will take the query str
    db.query(text, [input])
    //then get the result
    .then((data)=>{
        
        res.locals.singleWeb = data.rows
        console.log(res.locals.singleWeb)
        //return next
        return next()
         //catch error
    }).catch((err)=>{
        console.log(err);
        //return next
        return next(err)
    })
}
websitesController.createAccount = (req, res, next)=>{
    //request the body from the input fields
    const {username, firstname, lastname, date, password} = req.body;
    const list = [username, firstname, lastname, date, password]
    //delcare a variable assign it our query string to post data
    const text = 'INSERT INTO users (username, firstname, lastname, date, password) values($1, $2, $3, $4, $5)'
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
websitesController.logging = (req, res, next) =>{
    const {username, password} = req.body
    const list = [username, password]
    const text = 'SELECT * FROM users WHERE username = $1 AND password = '
        db.query(text, list)
        .then ((data)=>{  
            console.log(data)
            if (data.rows[0].username === username && data.rows[0] && data.rows[0].password === password) {
                // req.session.loggedin = true;
                // req.session.username = username;
                res.redirect('/');
                res.next();
            }        
        }).catch(err=>{
            console.log(err)
            return next()
        })
    
}
module.exports = websitesController;