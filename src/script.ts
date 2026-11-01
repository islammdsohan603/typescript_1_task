// Interface + Extends

// Parent Interface
interface User {
  readonly id: number;
  name: string;
  email: string;
  age: number;
}

// Child Interface
interface Admin extends User {
  role: string;
  permissions: string[];
  isAdmin: boolean;
}

// Normal User
const normalUser: User = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  age: 30,
};

// Admin User
const adminUser: Admin = {
  id: 2,
  name: "Sohan",
  email: "sohan@gmail.com",
  age: 20,
  role: "admin",
  permissions: ["create", "update", "delete"],
  isAdmin: true,
};

// Display Admin Information
function displayAdminInfo(admin: Admin): void {
  console.log("Admin Name:", admin.name);
  console.log("Role:", admin.role);
  console.log("Permissions:", admin.permissions.join(", "));
  console.log("Is Admin:", admin.isAdmin);
}

// Function Call
displayAdminInfo(adminUser);
