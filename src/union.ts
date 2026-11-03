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

// console.log(print("sohS"));

// truthiness

type User = {
  name: string;
  address?: {
    street: string;
  };
} | null;

const loggedInUser: User = {
  name: "sohan",
  address: {
    street: "Tangail",
  },
};

const showAddress = (user: User) => {
  if (user && user.address) {
    console.log(user.address.street);
  } else {
    console.log("User not found!");
  }
};

// showAddress(loggedInUser);

// some caveat of type fuard

const printAll = (x: string | string[] | null) => {
  if (x && typeof x === "object") {
    for (let str of x) {
      console.log(str);
    }
  } else if (typeof x === "string") {
    console.log(x);
  } else {
    console.log("");
  }
};

// printAll("sohan");
