function headsFraction(numberofFlips){
    var count = 0;
    for(i = 1; i <= numberofFlips; i++){
        var x = Math.floor(Math.random()*2);
        if ( x === 1){
            console.log("its a head!!");
            count++;

        }else {
            console.log("its a tail");
        }
    }
    console.log("the feaction of heads is equal to" +(count/numberofFlips));
}

var numsofFlips = parseInt(prompt("please enter the no. of flips!!"),10);
headsFraction(numsofFlips)