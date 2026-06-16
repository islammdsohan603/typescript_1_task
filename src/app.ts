// union types

let value: string | number;

function getProducts(id: string | number) {
  console.log(`Fetching product with id ${id}`);
}

getProducts(123);
getProducts('sohan2026');
