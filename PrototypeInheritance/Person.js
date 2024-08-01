class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(name) {
    this._firstName = name;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(name) {
    this._lastName = name;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  set fullName(name) {
    const names = name.split(" ");
    if (names.length === 2) {
      this._firstName = names[0];
      this._lastName = names[1];
    } else {
      throw new Error("Full name must include first name and last name");
    }
  }
}

// Example usage:
const person = new Person("John", "Doe");
console.log(person.fullName); // Output: John Doe

person.firstName = "Jane";
console.log(person.fullName); // Output: Jane Doe

person.lastName = "Smith";
console.log(person.fullName); // Output: Jane Smith

person.fullName = "Alice Johnson";
console.log(person.firstName); // Output: Alice
console.log(person.lastName); // Output: Johnson
