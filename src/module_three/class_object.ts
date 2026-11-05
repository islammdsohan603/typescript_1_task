class Employee {
  name: string;
  baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
}

const employee1 = new Employee("sohan", 25480);
const employee2 = new Employee("sohag", 5480);
console.log(employee1, employee2 instanceof Employee);
