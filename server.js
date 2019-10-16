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
