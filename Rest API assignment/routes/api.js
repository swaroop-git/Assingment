const express = require ("express");
const fruits = require("../models/fruits");
const router = express.Router();


// get a list of fruits from the db
router.get('/fruits', function(req, res){
    res.send(fruits);
});

// add a new fruits to the db
router.post('/fruits', function(req, res){
    fruits.create(req.body).then(function(fruits){
        res.send(fruits);
    });
    
});

// update a fruits in the db
router.put('/fruits/:id', function(req, res){
    fruits.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        fruits.findOne({_id: req.params.id}).then(function(fruits){
            res.send(fruits);
        });
    });//.catch(next);
});

// delete a fruits from the db
router.delete('/fruits/:id', function(req, res){
    fruits.findByIdAndRemove({_id:req.params.id}).then(function(fruits){
        res.send(fruits);
    });
});

module.exports = router;
