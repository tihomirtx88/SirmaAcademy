function addSpecies(Class) {
  // Attach species property to the class prototype
  Class.prototype.species = "Human";

  // Attach toSpeciesString method to the class prototype
  Class.prototype.toSpeciesString = function () {
    return `I am a ${this.species}. ${this.toString()}`;
  };
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  toString() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

addSpecies(Person);

const person = new Person("John Doe", 30);
console.log(person.toSpeciesString()); 
