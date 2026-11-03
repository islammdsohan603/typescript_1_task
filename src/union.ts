// problem 1

type Priduct = {
  id: string;
  name: string;
  price: number;
  category?: string;
  stock?: number;
};

const product1: Priduct = {
  id: "sohn34",
  name: "PC",
  price: 14897,
  category: "EL",
};

console.log(product1);

interface problem2

interface Students {
  name: string;
  age: number;
  email: string;
  marks?: number[];
  phone?: number;
}

const students1: Students = {
  name: "sohan",
  age: 21,
  email: "sohan@gmail.com",
  marks: [15, 8, 69],
};

console.log(students1);

const studentsMarks = students1.marks;

if (studentsMarks) {

  for (let x of studentsMarks) {
    console.log(x);
  }
}
