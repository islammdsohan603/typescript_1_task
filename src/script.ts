// Default Parameter + Optional Parameter

function createUser(
  name: string,
  email: string,
  role: "admin" | "user" = "user",
  phone?: string,
) {
  if (!name || !email) {
    throw new Error("Name and email are required");
  }

  // Create and return the user object
  return {
    name,
    email,
    role,
    phone,
  };
}

// Function Call
console.log(
  createUser("Sohan", "islammdsohan603@gmail.com", "user", "01849468455"),
);

console.log(createUser("Sohan", "sohan@gmail.com"));
