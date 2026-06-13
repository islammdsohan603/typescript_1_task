// Array function

const items: { item: string; price: number; bool: boolean }[] = [
  { item: 'sohan', price: 100, bool: true },
  { item: 'jane', price: 200, bool: false },
  { item: 'john', price: 300, bool: true },
  { item: 'jane', price: 400, bool: false },
  { item: 'john', price: 500, bool: true },
  { item: 'jane', price: 600, bool: false },
  { item: 'john', price: 700, bool: true },
  { item: 'jane', price: 800, bool: false },
  { item: 'john', price: 900, bool: true },
  { item: 'jane', price: 1000, bool: false },
];

const total = items.map(item => item.bool);
console.log(total);
