//1)
/*
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
*/

/***************************************************************************************************************** */

//2)

// var express = require('express')
// var app = express()
// var port = 3000
//
// app.get('/year', (req, res) => {
//   var d = new Date();
//   var n = d.getFullYear();
//   res.send('You were born in '+(n-req.query.age));
// });
//
// app.listen(port, '127.0.0.1', () => {
//   console.log(`Now we are listening at http://localhost:${port}`);











// 3rd Question
// var express = require('express');
// var app = express();
// var myArgs = process.argv;
// console.log('myArgs: ', myArgs);
// app.get('/home', function(request, response){
//  response.end('Hello World!');
// });
// app.listen(process.argv[2]);
// });










// 4th Question
// var express = require('express');
// var app = express();
// var moment = require('moment');
// var myArgs = process.argv;
// console.log('myArgs: ', myArgs);
// app.get('/', function(request, response){
//  response.end('Hello World!');
// });
// app.get('/time', function(request, response){
//   var dateFormat = require("dateformat");
//   var now = new Date();
//   response.end(dateFormat(now, "yyyy-mm-dd'T'HH:MM:ss:l'Z'"));
// });
// console.log(process.env);
// var port = process.env.PORT || 3000;
//
// app.listen(port, function () {
//   console.log('Example app listening on port ' + port + '!');
// });

















// 5th Question
// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
//
// // Create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
// // app.set('view engine', 'ejs');
// app.use('/assets', express.static('assets'));
// app.get('/form', function(request, response){
//       response.sendFile(__dirname + '/form.html');
// });
// app.post('/form', urlencodedParser, function (req, res) {
//    // Prepare output in JSON format
//    res.end(req.body.fname.split("").reverse().join("")+"\n"+req.body.lname.split("").reverse().join(""));
// });
// console.log(process.env);
// var port = process.env.PORT || 3000;
//
// app.listen(port, function () {
//   console.log('Example app listening on port ' + port + '!');
// });


















// 6th Question
// var express = require('express');
// var app = express();
// app.use('/public', express.static('public'));
// app.get('/index', function(request, response){
//       response.sendFile(__dirname + '/public/index.html');
// });
// var port = process.env.PORT || 3000;
// app.listen(port, function () {
//   console.log('Example app listening on port ' + port + '!');
// });










// 8th question
// var express = require('express');
// var path = require('path');
// var app = express();
// var myArgs = process.argv.slice(2);
// console.log('myArgs: ', myArgs);
// app.set('view engine', 'pug');
// console.log(path.join(__dirname , myArgs[1]));
// app.set('views', path.join(__dirname , myArgs[1]));
// app.get('/home', function(request, response){
//       response.render('index', {date: new Date().toDateString()});
// });
// // var port = process.env.PORT || 3000;
// app.listen(myArgs[0], function () {
//   console.log('Example app listening on port ' + myArgs[0] + '!');
// });









// 9th Question
// var fs = require('fs');
// var express = require('express');
// var app = express();
// var myArgs = process.argv.slice(2);
// console.log('myArgs: ', myArgs);
// app.get('/books', function(request, response){
//   // Use fs.readFile() method to read the file
//   fs.readFile(myArgs[1], 'utf8', function(err, data){
//       var object = JSON.parse(data);
//       response.json(object);
//   });
// });
// app.listen(myArgs[0], function () {
//   console.log('Example app listening on port ' + myArgs[0] + '!');
// });


















var express = require('express');
var app = express();
var prompt = require('prompt-sync')();
var readLine = require('readline');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended:true
}));
var k;
var len;
var array = [{Id: 1, Item: "Coffee", Price: 50},{Id: 2, Item: "Tea", Price: 30 },{Id: 3, Item: "Milk", Price: 60}];
var array1 = array;
var oldarray = [{Id: 1, Item: "Coffee", Price: 50},{Id: 2, Item: "Tea", Price: 30 },{Id: 3, Item: "Milk", Price: 60}];
app.set('view engine', 'ejs');
app.use('/stuff', express.static('stuff'));
app.get('/items', function(request, response){
        if (array.length>=1){
          response.render('list',{Items: array});
        }
        else{
          response.render('list',{Items: oldarray});
          array=oldarray;
        }
});
app.post("/items", function(req, res) {
  len=array.length;
  k=array[len-1].Id;
  array.push({Id: k+1, Item: req.body.Item, Price: parseInt(req.body.Price)});
  console.log(array);
  res.redirect("/items");
});
app.get('/items/:id', function (req, res) {
  res.render('specificname',{Items: array, ItemId: req.params.id});
});

app.delete('/items/:id', function (req,res) {
  array = array.filter(function(value){
    if (value.Id != req.params.id){
      return value;
    }
  res.json(array);
  })
});
app.put('/items/:id',function (req,res){
  for (i = 0; i < array.length; i++ ){
    if (array[i].Id === parseInt(req.params.id)){
      console.log(array[i].Item);
      // const r1 = readLine.createInterface({
      //   input: process.stdin,
      //   output: process.stdout
      // });
      // r1.question("Enter a new name: ", function saveinput(name){
      //   // array[i].Item = name.toString();
      //   console.log(array[i].Item);
      // });
      var name = prompt("Enter a new name: ");
      array[i].Item = name;
    }
  }
  res.json(array);
});

// module.exports.app1 = app;
// module.exports.arrayf = array;
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});

