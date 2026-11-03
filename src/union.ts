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
  address: {
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
  if (user) {
    console.log(user.address.street);
  } else {
    console.log("User not found!");
  }
};

showAddress(loggedInUser);

showAddress(null);
