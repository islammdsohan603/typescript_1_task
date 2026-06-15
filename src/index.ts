const student = {
  name: 'sohan',
  age: 20,
};

function printUser(user: { name: string; age: number }) {
  console.log(`${user.name} and age is ${user.age} years old`);
}

printUser(student);
