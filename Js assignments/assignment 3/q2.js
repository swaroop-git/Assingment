class Rectangle  {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
  
  Rectangle.prototype.area = function area() {
    return this.width * this.height;
  };
  
  const obj = new Rectangle(3, 5);
  
  obj.area(); // 15

console.log(obj.area());