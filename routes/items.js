const express = require('express');
const router = express.Router();


//get all 
router.get('/', (req,res) =>{
    let query  = 'SELECT * FROM items';
    db.query(query, (err,result) =>{
        if(err){
            return console.error('error: ' + err.message);
        }
        return res.send({ error: false, data: result, message: 'items list.' });
    })

});

//get one

//creating one

//updating one

//deleting one



module.exports = router;