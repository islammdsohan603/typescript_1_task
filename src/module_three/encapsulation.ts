// employee salary practice problem

class Employee {
  readonly employeeId: number;
  name: string;
  private salary: number;

  constructor(employeeId: number, name: string, salary: number) {
    if (salary < 0) {
      throw new Error("Salary cannot be negative");
    }

    ((this.employeeId = employeeId),
      (this.name = name),
      (this.salary = salary));
  }

  getSalary(): number {
    return this.salary;
  }

  increaseSalary(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }

    this.salary += amount;
  }
}

const employee = new Employee(104, "Sohan", 8500);

employee.increaseSalary(5000);
console.log("Employee Id:", employee.employeeId);
console.log("Employee Name:", employee.name);
console.log("Employee Salary:", employee.getSalary());
