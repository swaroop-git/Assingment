// 1) constant declaration
/*const num2 = 10;
const obj1 = {
    name: "swaroop"
};
console.log(obj1.name); */



//*******************************************************************************************************************************/



//2) scoping
/*function scope() {
    let x=10;
    console.log(x);
    
}
scope(); */



/************************************************************************************** */




//3)Enhanced object property
/*const order={
    id:`007`,
    title: `washing powder`,
    price: `30rs`,

    printorder : function() {
        console.log("order");
        
        
    },

    getprice:function(){
        console.log("Reshma order " + this.title + " of " + this.price");
    }
};
var copyorder = Object.assign(order);
console.log(copyorder);
 */


/*************************************************************************************************************** */



//4) Arrow function

/*let names=['tom','ivan','jerry'];
var x = {name: names.length}
console.log(names);
var obj = Object.assign({}, names);
console.log(obj); */



/************************************************************************************************************************* */



//5)Extended parameter handling
//a)add()
/*function add(num1 = 20, num2 = 30) {
    return num1 + num2;
}; */

//b)
/*let friends=["sukhvindar","santosh","babubhai","ramesh","vitthal"];
let [ name1 , ...elements]=friends;
console.log(name1);
console.log(elements); */

//c)
/*function printCapitalNames(username ,...friends) {
    console.log("Username: ", username);
    console.log("friends: ", friends);
}
printCapitalNames("john", "frank", "dave", "mike"); */

/*************************************************************************************************************************** */


//6. Template literals
/*let ticketSysnet = {};
ticketSysnet.laptopModel= `HPG250`;
ticketSysnet.deskNo= `007`;
ticketSysnet.name= `probook`;
console.log(ticketSysnet);*/


/*********************************************************************************************************************************/

//7. De-structuring assignment:
//a)
/*const arr = ['Tatya', 'Babubhai', 'Raju', 'Shyam'];
const [a, b, c, d] = arr;
console.log(c); */


//b)
/*let organization = {
    name: "ramukaka",
    address: {
        location: "lajpat nagar", pinCode: 1010, city: "Delhi"
    }
}
let { name, address: { pinCode } } = organization;
console.log("Pin Code: ", pinCode); */

/*********************************************************************************************************************************** */

//8)classes and modules







