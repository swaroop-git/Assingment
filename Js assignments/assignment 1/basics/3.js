

function numheads(numberofFlips){

    var count = 0;
 for( i = 1; i<= numberofFlips; i++){

    var x = Math.floor(Math.random()*2);
    if ( x === 1){
        console.log("its head!!");
        count++;

    }else {
        console.log("its tail!!");
    }
 }
 console.log("the no. of heads is" + count);


}

var numsofFlips = parseInt(prompt("please enter the number of flips!!"),10);
numheads(numsofFlips);
