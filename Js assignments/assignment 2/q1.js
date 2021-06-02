var x= prompt("enter first value");
var y= prompt("enter second value");
//function addAndsquare(x,y) {
  

    //function square(z){
    //  return Math.pow(z,2);
   //}
    /*let total=add(x,y);
    return square(total);
    document.write(); */          
//}
//addAndsquare(x,y);
const compose =(a,b,c) => (data) => a(b(c(data)));
const multiby3 =(num)=> {
    return num * 3;
}
const multiby4 =(num)=> {
    return num * 4;
}
const multiby5 =(num)=> {
    return num * 5;
}
