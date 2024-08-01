class Shape {
    constructor() {
      if (new.target === Shape) {
        throw new Error("Cannot instantiate an abstract class.");
      }
    }
  
    calculateArea() {
      throw new Error("Method 'calculateArea()' must be implemented.");
    }
  }
  
  class Triangle extends Shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    calculateArea() {
      return 0.5 * this.base * this.height;
    }
  }
  
  class Square extends Shape {
    constructor(side) {
      super();
      this.side = side;
    }
  
    calculateArea() {
      return this.side * this.side;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  const triangle = new Triangle(5, 10);
  console.log(`Triangle area: ${triangle.calculateArea()}`); 
  
  const square = new Square(4);
  console.log(`Square area: ${square.calculateArea()}`); 
  
  const circle = new Circle(3);
  console.log(`Circle area: ${circle.calculateArea()}`); 