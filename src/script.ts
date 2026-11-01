const numbers: number[] = [1, 2, 5, 9, 8, 7, 589, 7, 75];

const numberArray = numbers.map((num: number) => console.log(num));

const filteredNumbers = numbers.filter((num: number) => num > 5);

console.log(`filter numbers ${filteredNumbers}`);

const totalNumbers = numbers.reduce(
  (total: number, num: number) => total + num,
  0,
);
console.log(`total numbers ${totalNumbers}`);
