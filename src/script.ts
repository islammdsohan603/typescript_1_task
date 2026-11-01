// Type Alias — Product Management System

type Product = {
  readonly id: number;
  name: string;
  price: number;
  category: string;
  description?: string;
  stock?: number;
  isAvailable: boolean;
};

const product1: Product = {
  id: 1,
  name: "Laptop",
  price: 1200,
  category: "Electronics",
  isAvailable: true,
};

const product2: Product = {
  id: 2,
  name: "Smartphone",
  price: 1800,
  category: "Electronics",
  isAvailable: true,
};

const product3: Product = {
  id: 3,
  name: "Tablet",
  price: 600,
  category: "Electronics",
  isAvailable: false,
  stock: 0,
};

const products: Product[] = [product1, product2, product3];

console.log("Product List:", products);

// map useing for this product list

const productNames = products.map((product) => product.name);

console.log("Product Names:", productNames);

// filter useing for this product list

const expensiveProducts = products.filter((product) => {
  return product.price > 1200;
});

console.log("Expensive Products:", expensiveProducts);

// total price of all products

const totalPrice = products.reduce((total, product) => {
  return total + product.price;
}, 0);

console.log("Total Price of All Products:", totalPrice);
