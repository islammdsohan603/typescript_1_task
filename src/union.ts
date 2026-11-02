// Literal Types

type Status = "Pending";
const status: Status = "Pending";

console.log(status);

// Basic Union

type Identity = string | number;
const id: Identity = "864570";
const name: Identity = "sohan";
const age: Identity = 21;

console.log(`Name: ${name} ID: ${id}   AGE: ${age}`);
