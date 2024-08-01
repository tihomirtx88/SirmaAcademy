// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   getInfo() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   }
// }

// class Student extends Person {
//   constructor(name, age, school) {
//     super(name, age);
//     this.school = school;
//   }

//   getInfo() {
//     return `Name: ${this.name}, Age: ${this.age}, School: ${this.school}`;
//   }
// }

// const person = new Person("John Doe", 30);
// console.log(person.getInfo());

// const student = new Student("Jane Doe", 20, "XYZ University");
// console.log(student.getInfo());

// With function constructor and prototype

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getInfo = function () {
  return `Name: ${this.name}, Age: ${this.age}`;
};

function Student(name, age, school) {
  // Call the Person constructor with the Student instance
  Person.call(this, name, age);
  this.school = school;
}

// Inherit the Person prototype methods
Student.prototype = Object.create(Person.prototype);

// Correct the constructor pointer because it points to Person
Student.prototype.constructor = Student;

// Add a method to the Student prototype
Student.prototype.getInfo = function() {
  return `Name: ${this.name}, Age: ${this.age}, School: ${this.school}`;
};

const person = new Person("John Doe", 30);
console.log(person.getInfo()); 

const student = new Student("Jane Doe", 20, "XYZ University");
console.log(student.getInfo()); 
