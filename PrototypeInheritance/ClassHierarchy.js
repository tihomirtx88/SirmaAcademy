function createShapes() {
  class Figure {
    constructor(units = "cm") {
      this.units = units;
    }

    get area() {
      throw new Error("Area method not implemented in base class");
    }

    changeUnits(newUnits) {
      this.units = newUnits;
    }

    convertUnits(value) {
      if (this.units === "m") {
        return value / 100;
      } else if (this.units === "mm") {
        return value * 10;
      } else {
        return value;
      }
    }

    toString() {
      return `Figures units: ${this.units}`;
    }
  }

  class Circle extends Figure {
    constructor(radius, units) {
      super(units);
      this.radius = radius;
    }

    get area() {
      const radius = this.convertUnits(this.radius);
      return Math.PI * radius * radius;
    }

    toString() {
      const radius = this.convertUnits(this.radius);
      return `Figures units: ${this.units} Area: ${this.area} - radius: ${radius}`;
    }
  }

  class Rectangle extends Figure {
    constructor(width, height, units) {
      super(units);
      this.width = width;
      this.height = height;
    }

    get area() {
      const width = this.convertUnits(this.width);
      const height = this.convertUnits(this.height);
      return width * height;
    }

    toString() {
      const width = this.convertUnits(this.width);
      const height = this.convertUnits(this.height);
      return `Figures units: ${this.units} Area: ${this.area} - width: ${width}, height: ${height}`;
    }
  }

  return {
    Figure,
    Circle,
    Rectangle,
  };
}

const { Figure, Circle, Rectangle } = createShapes();

const circle = new Circle(5);
console.log(circle.toString());

circle.changeUnits("mm");
console.log(circle.toString());

const rectangle = new Rectangle(3, 4, "m");
console.log(rectangle.toString());

rectangle.changeUnits("cm");
console.log(rectangle.toString());
