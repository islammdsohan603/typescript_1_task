//* typeof narrowing down

let x = 12;

// console.log(typeof x === "number");

// type guard

const print = (value: string | number) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value;
  }
};

console.log(print("sohS"));
