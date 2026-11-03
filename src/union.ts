// top types

let x: any = "Sohan";
x = 125;
// console.log(x);

let name: unknown = "sohn";
name = 455;

// console.log(name);

let hell: unknown = "Hello World";

// console.log(hell);

// core types

let something: unknown;

let num1: number = 123;

// something = name1;

// console.log(something);

// nullish type

interface User {
  name: string;
}

type LogiedInUser = User | null;

const currentUser: LogiedInUser = null;

// Unit types

const greet = () => {
  console.log("Hello World");
};

const greetings: string | void = greet();

// sub-type of unit type

const anotherGreet = (): void => {
  console.log("Hello world");
  return undefined;
};

// bottom type

const getError = (msg: string): never => {
  throw new Error(msg);
};

const X: string = getError("Sohan");
console.log(X);
