interface BaseUser {
  name: string;
  email: string;
  id: string | number;
  phone?: string;
}

interface Admin extends BaseUser {
  role: "admin";
  permissions: string[];
}

interface Reporter extends BaseUser {
  role: "reporter";
  permission: string[];
}

type UserRole = Admin | Reporter;

const user: UserRole[] = [
  {
    id: "sdofh",
    name: "sohan",
    role: "admin",
    email: "islam@gmail.com",
    permissions: ["create", "update", "delete"],
  },
  {
    id: 101,
    name: "islam",
    role: "reporter",
    email: "isl@gmail.com",
    permission: ["read", "write"],
  },
];

console.log(user);
