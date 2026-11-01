// // students tuple createing now

// type students = {
//   name: string;
//   age: number;
//   result: number;
// };

// const student1: students = {
//   name: "John",
//   age: 20,
//   result: 85,
// };

// const student2: students = {
//   name: "Alice",
//   age: 22,
//   result: 90,
// };

// console.log(`Student 1:`, student1);
// console.log(`Student 2:`, student2);

// const studentsArray: students[] = [student1, student2];
// console.log(`Students Array:`, studentsArray);

// // students array with map method

// const studentNames = studentsArray.map((student) => {
//   return student.name;
// });

// console.log(`Student Names:`, studentNames);

// readonly tuple and interface

type product = {
  readonly id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  stock: number;
};

const product1: product = {
  id: 1,
  name: "Laptop",
  description: "A high-performance laptop",
  category: "Electronics",
  price: 1200,
  stock: 10,
};

const product2: product = {
  id: 2,
  name: "Smartphone",
  description: "A latest model smartphone",
  category: "Electronics",
  price: 800,
  stock: 20,
};

console.log(product1);

console.log(product2);

const productsArray: product[] = [product1, product2];
console.log(`Products Array:`, productsArray);

for (const product of productsArray) {
  console.log(
    `Product ID: ${product.id}, 
    Name: ${product.name}, 
    Description: ${product.description}, 
    Category: ${product.category}, 
    Price: ${product.price}, 
    Stock: ${product.stock}`,
  );
}

const productPrices = productsArray.reduce(
  (total, product) => total + product.price,
  0,
);

console.log(`Product Prices:`, productPrices);
