"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student = {
    name: 'sohan',
    age: 20,
};
function printUser(user) {
    console.log(`${user.name} and age is ${user.age} years old`);
}
printUser(student);
function showUser(user) {
    console.log(user.name);
}
showUser(student);
const products = [
    { id: 1, name: 'PC', price: 50000, description: 'wobwe' },
    { id: 2, name: 'Laptop', price: 70000, description: 'wobwe' },
    { id: 3, name: 'Monitor', price: 15000, description: 'wobwe' },
];
const total = products.reduce((totale, prod) => {
    return totale + prod.price;
}, 0);
console.log(total);
//# sourceMappingURL=typealies.js.map