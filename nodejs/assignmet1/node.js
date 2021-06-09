//1)
/*
var http =require('http');

var server = http.createServer(function(req,res){
    res.writeHead(200, {'content-type':'text/plain'});
    res.end('Success i m listening from port: 3000');
});
    
server.listen(3000 , `127.0.0.1`);
console.log('yo.....300');
*/


/*************************************************************************************** */


//2)
/*
var http =require('http');
var fs= require('fs');
 
var server = http.createServer(function(req,res){
    console.log('request was made' + req.url);
    res.writeHead(200, {'content-type':'text/plain'});
    var myreadStream = fs.createReadStream(__dirname + '/readme.txt','utf8');
    myreadStream.pipe(res);
    
});
    
server.listen(3000 , `127.0.0.1`);
console.log('its working');
*/


/******************************************************************************************* */


//3)
/*
var fs= require('fs');

let directory ='stuff';
let dirBuf = Buffer.from(directory);

let files = fs.readdirSync(directory);
console.log(files);
*/

/******************************************************************************************* */


//4)
/*
var fs = require('fs')

var readMe=fs.readFileSync('readme.txt', 'utf8');
console.log(readMe);
*/


/******************************************************************************************** */


//5)
/*
var fs= require('fs');

fs.readFile('readme.txt', 'utf8', (err, data) => {
    if (err) { console.log(err) };
    let occurenceArray = data.match(/ding/g);
    if (occurenceArray === null || occurenceArray.length <= 0) {
        console.log(0);
    } else {
        console.log(occurenceArray.length);
    }
});
console.log('yaahoooo');
*/

/********************************************************************************************* */



// 6th Question Phase 1
// var calculator = require('./calculator.js');
//
// console.log(calculator.add(3,7));
// console.log(calculator.multiply(3,7));

 

 

 

 


// 6th Question Phase 2
// var index = require('./index.js');
// console.log(index.sum(2,7));
// console.log(index.multiplication(2,7));
// console.log(index.subtraction(2,7));
// console.log(index..division(2,7));

 

 

 

 

 

// 6th Question Phase 3
// var moment = require('moment');
// var calculator = require('./calculator.js');
//
// console.log("Today is:",moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
// console.log(calculator.add(3,7));
// console.log(calculator.multiply(3,7));

 

 

 

 

 


// 7th Question
// var strftime = require('strftime'); // not required in browsers
// console.log(strftime('%H:%M:%S'));

 

 

 

 

 

 

 

 

 

 

 

// 8th Question
// var fs = require('fs');
//
// var myArgs = process.argv.slice(2);
// console.log('myArgs: ', myArgs);
//
// fs.readFile(myArgs[0], 'utf8' , (err, data) => {
// if (err) {
// console.error(err);
// return;
// }
// else{
// var array = data.split(",");
// var sum = 0;
// array.forEach((item, i, array1) => { sum += parseInt(item.trim());
// });
// console.log("The sum of the numbers in the integers.txt file is: "+sum);
// }
// });


/********************************************************************************************* */


//9)
/*

var fs = require('fs');
var array = fs.readFileSync('readme.txt').toString().split("\n");
for(i in array) {
    console.log(array[i]);
}

console.log(array);
*/
/********************************************************************************************* */



//10)
/*
var http =require('http');
var fs= require('fs');

var myreadStream = fs.createReadStream(__dirname + '/readme.txt','utf8');
var mywriteStream = fs.createWriteStream(__dirname + '/mytext.txt');


myreadStream.on('data', function(chunk){
    console.log('this file was saved');
    mywriteStream.write('hey yo! lets go');
    
});
*/

/******************************************************************************************** */


//11)
/*
var http =require('http');
var fs= require('fs');

var myreadStream = fs.createReadStream(__dirname + '/readme.txt','utf8');

myreadStream.on('data', function(chunk){
    console.log('ninja hattori:');
    console.log(chunk);
});
*/

/********************************************************************************************** */


//12)
//instance method
/*
let today = new Date();
let timestamp =today.valueOf();
console.log(timestamp);
console.log(today);
*/

/********************************************************************************************** */


//13)
//command line arguement
/*
const arguements = process.argv.slice(2);
const sum = arguements.reduce((acc,val) => acc + (val),0);

console.log(sum);
*/