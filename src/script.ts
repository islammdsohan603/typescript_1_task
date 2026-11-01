// 1. User Role
type UserRole = "admin" | "user" | "reporter";

// 2. User Interface
interface User {
  readonly id: number;
  name: string;
  age: number;
  email: string;
  role: UserRole;
  phone?: string;
  isActive: boolean;
}

// 3. User Array
const users: User[] = [
  {
    id: 1,
    name: "Sohan",
    age: 21,
    email: "sohan@gmail.com",
    role: "admin",
    isActive: true,
  },
  {
    id: 2,
    name: "Rahim",
    age: 25,
    email: "rahim@gmail.com",
    role: "user",
    phone: "01700000000",
    isActive: true,
  },
];

// 4. Create User Function
function createUser(
  name: string,
  age: number,
  email: string,
  role: UserRole = "user",
  phone?: string,
): User {
  return {
    id: Date.now(),
    name,
    age,
    email,
    role,
    phone,
    isActive: true,
  };
}

// 5. Rest Parameter
function getTotalAge(...ages: number[]): number {
  return ages.reduce((total, age) => total + age, 0);
}

// 6. Tuple
const apiResponse: [number, string] = [200, "Users fetched successfully"];

// 7. Create New User
const newUser = createUser("Karim", 23, "karim@gmail.com");

// 8. Add User
users.push(newUser);

// 9. Print Data
console.log(users);
console.log(apiResponse);
console.log(getTotalAge(21, 25, 23));
