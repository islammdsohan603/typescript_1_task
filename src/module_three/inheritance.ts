class Employee {
  public name: string;
  private _baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this._baseSalary = baseSalary;
  }

  get baseSalary(): number {
    return this._baseSalary;
  }

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary cannot be negative value");
    }

    this._baseSalary = newSalary;
  }

  describe(): string {
    return `${this.name} earns ${this.baseSalary}`;
  }
}

const employee = new Employee("Sohan", 35400);

console.log(employee);
console.log(employee.describe());
