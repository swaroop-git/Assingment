class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.getArea = function () {
            return this.height * this.width;
        }
    }
}
let r = new Rectangle(4, 5);
r.hieght = 50;
console.log("Area: " + r.getArea());