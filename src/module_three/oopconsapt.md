what's is oop

আবজেক্ট , ক্লাশ

- Encapsulation
- Inharitanec
- Polimorpisom
- Abstraction

## Class and Object

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

# Encapsulation
Encapsulation হলো Data এবং Methods একসঙ্গে রাখা এবং Data কীভাবে পরিবর্তন হবে তা নিয়ন্ত্রণ করা।
