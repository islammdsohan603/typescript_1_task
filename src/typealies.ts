const student = {
  name: 'sohan',
  age: 20,
};

function printUser(user: { name: string; age: number }) {
  console.log(`${user.name} and age is ${user.age} years old`);
}

printUser(student);

type User = {
  name: string;
  age: number;
};

function showUser(user: User) {
  console.log(user.name);
}

showUser(student);

// product type

type product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

const products: product[] = [
  { id: 1, name: 'PC', price: 50000, description: 'wobwe' },
  { id: 2, name: 'Laptop', price: 70000, description: 'wobwe' },
  { id: 3, name: 'Monitor', price: 15000, description: 'wobwe' },
];

const total = products.reduce((totale, prod) => {
  return totale + prod.price;
}, 0);

console.log(total);
