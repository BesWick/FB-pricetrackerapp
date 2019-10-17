const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const mysql = require('mysql');


//connecting to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'fbscraper',
});


db.connect((err) => {
        if(err){
            return console.error('error: ' + err.message);
        }else{
            console.log('Connected Successfully to database');
        }

});
global.db = db;


//MIDDLEWARE
//bvody parser is a middleware that parses request bodies 
//to make form data available in req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

const itemsRouter = require('./routes/items.js');
app.use('/items', itemsRouter);



app.listen(3000, () => console.log('server started'));



