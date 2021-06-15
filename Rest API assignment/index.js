const express = require('express');
//const routes = require("./routes/api");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const array1 = [{
    "name":"Apples",
    "quantity":3
},
{
    "name":"Oranges",
    "quantity":7
},
{
    "name":"Pomegranates",
    "quantity":55
}];


const app = express();


mongoose.connect('mongodb://localhost/inventory');
mongoose.Promise = global.Promise;


app.use(bodyParser.json());

//initialize routes
app.use('/api', require('./routes/api'));


app.get('/inventory',function(req,res){
    

    res.send(array1);
});

app.get('/inventory/:itemname', function(req,res){
    var i;
    for ( i = 0; i < array1.length; i++){
        if ( array1[i].name === req.params.itemname ){
            res.send(array1[i]);
        }
    }
    if (i === array1.length ){
        res.send("Cannot find the item");
    }
})


app.listen(process.env.port||8081, function(){

    console.log('now listening for request');
    
}); 