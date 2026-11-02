type ID = number;

type userrole = "admin" | "user";

interface User {
  name: string;
  id: ID;
  role: userrole;
}

const userData: User = {
  name: "sohan",
  id: 8564,
  role: "admin",
};

console.log(userData);
