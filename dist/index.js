"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
function divide(a, b) {
    if (b === a) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}
function power(base, exponent = 5) {
    return Math.pow(base, exponent);
}
function calculate(operation, a, b) {
    switch (operation) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        case '^':
            return power(a, b);
        default:
            throw new Error('Indalid operation');
    }
}
console.log('Add', calculate('+', 4, 6));
console.log('Add', calculate('-', 45, 6));
console.log('Add', calculate('*', 2, 6));
//# sourceMappingURL=index.js.map