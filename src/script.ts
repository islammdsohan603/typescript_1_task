// Objects type, type alias and interface

type User = {
  name: string;
  age: number;
  isActive: boolean;
  badGroup: string[];
};

const user: User = {
  name: "sohan",
  age: 21,
  isActive: true,
  badGroup: ["AB+", "B0-"],
};

console.log(user);

const user2: User = {
  name: "sohag",
  age: 25,
  isActive: false,
  badGroup: ["A-"],
};

console.log(user2);
