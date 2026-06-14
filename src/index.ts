function add(a: number, b: number): number {
  return a + b;
}

const subtract = (a: number, b: number): number => a - b;
const multiply = (a: number, b: number): number => a * b;

function divide(a: number, b: number): number {
  if (b === a) {
    throw new Error('Cannot divide by zero');
  }

  return a / b;
}

function power(base: number, exponent: number = 5): number {
  return Math.pow(base, exponent);
}

function calculate(operation: string, a: number, b: number): number {
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
