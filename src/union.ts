type Person = {
  name: string;
  email: string;
  age: number;
};

type Employee = {
  employeeId: string;
  salary: number;
  department: string;
};

type EmployeeDetails = Person & Employee;

const employee1: EmployeeDetails = {
  name: "Sohan",
  email: "sohan@gmail.com",
  age: 21,
  employeeId: "EMP-101",
  salary: 45000,
  department: "Software Development",
};

console.log(employee1);
