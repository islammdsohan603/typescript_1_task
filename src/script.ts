// Task 01: Employee Management System

interface Employee {
  readonly id: number;
  name: string;
  email: string;
  salary: number;
}

interface Manager extends Employee {
  department: string;
  teamSize: number;
  isManager: boolean;
}

const employee1: Employee = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  salary: 50000,
};

const manager1: Manager = {
  id: 2,
  name: "Jane Smith",
  email: "jane.smith@example.com",
  salary: 60000,
  department: "Sales",
  teamSize: 10,
  isManager: true,
};

function displayManagerInfo(manager: Manager): void {
  console.log(`Manager Name: ${manager.name}`);
  console.log(`Email: ${manager.email}`);
  console.log(`Salary: ${manager.salary}`);
  console.log(`Department: ${manager.department}`);
  console.log(`Team Size: ${manager.teamSize}`);
  console.log(`Is Manager: ${manager.isManager}`);
}

displayManagerInfo(manager1);
