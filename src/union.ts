// problem1-Type alias

type Product = {
  id: string | number;
  name: string;
  price: number;
  category?: string;
  stock?: number;
};

const products: Product[] = [
  {
    id: 1458,
    name: "PC BUILDING",
    price: 98700,
    category: "EL",
    stock: 5,
  },
  {
    id: 15,
    name: "LOPTOP BUILDING",
    price: 109700,
    category: "EL",
    stock: 2,
  },
];

console.log(products);

const productPrice = products.reduce((total, indx) => {
  return total + indx.price;
}, 0);

console.log(`total products price: ${productPrice}`);

const totalStockPrice = products.reduce((total, product) => {
  return total + product.price * (product.stock ?? 0);
}, 0);

console.log(`totalProdcutStock Price: ${totalStockPrice}`);
