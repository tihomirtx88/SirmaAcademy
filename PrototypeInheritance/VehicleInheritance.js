class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

class Bike extends Vehicle {
    constructor(make, model, type) {
        super(make, model);
        this.type = type;
    }
    getDescription() {
        return `${this.make} ${this.model} which is a ${this.type} bike`;
    }

}

class Car extends Vehicle {
    constructor(make, model, doors) {
        super(make, model);
        this.doors = doors;
    }

    getDescription() {
        return `${this.make} ${this.model} with ${this.doors} doors`;
    }


}

const car = new Car("Toyota", "Corolla", 4);
console.log(car.getDescription());

const bike = new Bike("Yamaha", "MT-07", "sport");
console.log(bike.getDescription());
