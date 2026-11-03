type User = {
  name: string;
  age: number;
  email: string;
};

const user: User = {
  name: "MD.SOHAN",
  age: 21,
  email: "islammdsohan@gmail.com",
};

// console.log(user);

// Primitive type
type UserName = string;
const name: UserName = "sohan";
// console.log(name);

// Union type

type userRole = "admin" | "user";

const role: userRole = "admin";
// console.log(role);

// array type

type Numbers = number[];

const marks: Numbers = [10, 20, 30, 45];
// console.log(marks);

// Function type

type AddFunction = (a: number, b: number) => number;

const add: AddFunction = (a, b) => {
  return a + b;
};

// console.log(add(52, 25));
