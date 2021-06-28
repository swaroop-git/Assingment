//1)promises
/*let x = 0;
let  y = 0;

function add(x,y) {
    return new Promise((resolve,reject) => {
        if (x+y){
            resolve(x+y)
        }
        else{
            reject("Could not add two values!!!")
        }
    })
}

add(x,y).then( (message) => {console.log(message)}).catch( (message) => {console.log(message)}) */


//2. Typescript classes & types: Write a class ..... to find out total balance in the bank.
class Account {
    constructor(id:string, name:string, balance:number) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
};
class SavingAccount extends Account {
    interest:number
    constructor(id, name, balance, interest){
        super(id, name, balance);
        this.interest = interest;
    }
    totalBalance(){
        return (this.balance + this.interest);
    }
};
class CurrentAccount extends Account {
    cash_credit:number;
    constructor(id, name, balance, cash_credit){
        super(id, name, balance);
        this.cash_credit = cash_credit;
    }
    totalBalance(){
        return (this.balance + this.cash_credit);
    }
};
var savingAccountOne = new SavingAccount("SA01", "John", 30000, 2000);
var savingAccountTwo = new SavingAccount("SA02", "Joe", 15000, 1000);
var currentAccountOne = new CurrentAccount("CA01", "Martin", 50000, 5000);
var currentAccountTwo = new CurrentAccount("CA02", "Thomas", 10000, 1500);
console.log(savingAccountOne.totalBalance());
console.log(savingAccountTwo.totalBalance());
console.log(currentAccountOne.totalBalance());
console.log(currentAccountTwo.totalBalance());

//3. TypeScript Interfaces: Write an Interface Printable ...... invoke print() method on every object.
interface Printable {
    username: string,
    print: (str:string) => string
}

var circle: Printable = {
    username: "John",
    print: (str) => { return "Good Morning " + str }
}

var employee: Printable = {
    username: "Team 9",
    print: (str) => { return "Hello " + str }
}

function printAll(ObjectOne:any, ObjectTwo:any){
    return [
        ObjectOne.print("James"),
        ObjectTwo.print("John")
    ]
}
console.log(printAll(circle, employee));
