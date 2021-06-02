function rolldice(numberofrolls){
    
    for (i = 1; i <= numberofrolls; i++){
        var x = Math.floor(Math.random()*2);
        if ( x === 1){
            console.log("its six");
            count++;
    
        }else {
            console.log("its five");
        }
    
    }console.log("the no. of six is" + count);
}   
var numberofrolls= parseInt(prompt("please enter the number of rolls"),6);
rolldice(numberofrolls);
 
    
    
    
    
