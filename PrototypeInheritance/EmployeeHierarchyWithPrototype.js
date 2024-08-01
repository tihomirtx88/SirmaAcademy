function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

Employee.prototype.getDetails = function () {
  return `Name: ${this.name}, Salary: $${this.salary}`;
};

function Manager(name, salary, teamSize) {
  Employee.call(this, name, salary);
  this.teamSize = teamSize;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.calculateBonus = function () {
  // Example bonus calculation: 10% of salary + $100 per team member
  return this.salary * 0.1 + this.teamSize * 100;
};

Manager.prototype.getDetails = function () {
  return `${Employee.prototype.getDetails.call(this)}, Team Size: ${
    this.teamSize
  }, Bonus: $${this.calculateBonus()}`;
};

function Engineer(name, salary, experienceYears) {
  Employee.call(this, name, salary);
  this.experienceYears = experienceYears;
}

Engineer.prototype = Object.create(Employee.prototype);
Engineer.prototype.constructor = Engineer;

Engineer.prototype.calculateBonus = function () {
  // Example bonus calculation: 15% of salary + $200 per year of experience
  return this.salary * 0.15 + this.experienceYears * 200;
};

Engineer.prototype.getDetails = function () {
  return `${Employee.prototype.getDetails.call(this)}, Experience: ${
    this.experienceYears
  } years, Bonus: $${this.calculateBonus()}`;
};

const emp1 = new Employee("John Doe", 50000);
console.log(emp1.getDetails());

const mgr1 = new Manager("Jane Smith", 80000, 5);
console.log(mgr1.getDetails());

const eng1 = new Engineer("Alice Johnson", 70000, 8);
console.log(eng1.getDetails());
