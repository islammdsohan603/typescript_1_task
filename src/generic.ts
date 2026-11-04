interface User {
  name: string;
  role: string;
}

const fetchUser = async (): Promise<User> => {
  const res = await fetch("/api/v1/user");

  const data: User = await res.json();

  return data;
};

const userData = await fetchUser();

console.log(userData.name);
console.log(userData.role);
