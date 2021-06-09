var p = {
    FirstName: "Swaroop",
    //MiddleName = "madhukar",
    LastName: "Lute"
}

class Person {
    constructor(FirstName, LastName) {
        this.FirstName = FirstName;
        //this.MiddleName = MiddleName;
        this.LastName = LastName;
    }
}


//console.log(p.FirstName);
//console.log(p.MiddleName);
//console.log(p.LastName);

console.log(p.MiddleName);
p.MiddleName = "madhukar";
console.log(p.MiddleName);