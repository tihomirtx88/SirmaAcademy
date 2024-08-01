class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getDetails() {
    return `Name: ${this.name}, Salary: $${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name, salary, teamSize) {
    super(name, salary);
    this.teamSize = teamSize;
  }

  calculateBonus() {
    // Example bonus calculation: 10% of salary + $100 per team member
    return this.salary * 0.1 + this.teamSize * 100;
  }

  getDetails() {
    return `${super.getDetails()}, Team Size: ${
      this.teamSize
    }, Bonus: $${this.calculateBonus()}`;
  }
}

class Engineer extends Employee {
  constructor(name, salary, experienceYears) {
    super(name, salary);
    this.experienceYears = experienceYears;
  }

  calculateBonus() {
    // Example bonus calculation: 15% of salary + $200 per year of experience
    return this.salary * 0.15 + this.experienceYears * 200;
  }

  getDetails() {
    return `${super.getDetails()}, Experience: ${
      this.experienceYears
    } years, Bonus: $${this.calculateBonus()}`;
  }
}

const emp1 = new Employee("John Doe", 50000);
console.log(emp1.getDetails());

const mgr1 = new Manager("Jane Smith", 80000, 5);
console.log(mgr1.getDetails());

const eng1 = new Engineer("Alice Johnson", 70000, 8);
console.log(eng1.getDetails());
