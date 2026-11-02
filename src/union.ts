// Literal Types

type Status = "Pending";
const status: Status = "Pending";

// console.log(status);

// Basic Union

type Identity = string | number;
const id: Identity = "864570";
const name: Identity = "sohan";
const age: Identity = 21;

// console.log(`Name: ${name} ID: ${id}   AGE: ${age}`);

// Literal Union

type Role = "user" | "admin";
const userRole: Role = "admin";
// console.log(userRole);

// Object Union

type Admin = { id: number; role: "admin"; privileges: string[] };

type Member = { id: number; role: "member"; plans: string[] };

type User = Admin | Member;

const user: User = { id: 864570, role: "admin", privileges: ["abc", "dfow"] };

// console.log(user);

const admin: User = { id: 78, role: "member", plans: ["dfkl"] };

// console.log(admin);

function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

printId("user-101");
printId(101);
