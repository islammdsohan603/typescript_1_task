type InfoFunction = (name: string, age: number, city: string) => string;

const info: InfoFunction = (name, age, city) => {
  return `My name is ${name}, I am ${age} years old and I live in ${city}.`;
};

console.log(info("Alice", 30, "New York"));
