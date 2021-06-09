class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
  
  const obj = new Rectangle(3, 5);
  obj.height; // 3
  obj.width; // 5
  
  // The `instanceof` keyword is how you test whether an object was created
  // from a certain class.
  obj instanceof Rectangle; // true
  ({}) instanceof Rectangle; // false
  console.log(Rectangle)