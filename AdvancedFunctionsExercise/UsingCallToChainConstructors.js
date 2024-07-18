function Person(name) {
  this.name = name;
}

function Employee(name, job) {
    // Call the Person constructor with the current object context and the name argument
    Person.call(this, name);
    this.job = job;
}

const emp = new Employee("Alice", "Engineer&#39");
console.log(emp); 

