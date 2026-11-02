// problam 3

type UserRole = "admin" | "user" | "reporter";

const gerDashboard = (role: UserRole): string => {
  switch (role) {
    case "admin":
      return "/deashboard/admin";

    case "reporter":
      return "/deashboard/reporter";
    case "user":
      return "/deashboard/user";
  }
};

console.log(gerDashboard("admin"));
console.log(gerDashboard("reporter"));
console.log(gerDashboard("user"));
