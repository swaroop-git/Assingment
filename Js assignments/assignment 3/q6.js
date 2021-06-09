class Person {
    constructor(FirstName, LastName) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.FullName = function() {
            return this.FirstName + " " + this.LastName;
        }
    }
}

var p = new Person("swaroop", "lute");
console.log(eval(p.FullName() === "swaroop lute"));