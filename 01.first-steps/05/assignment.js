let num1 = 10;
let num2 = 50;

const result = 2 * (num1 = num2 + 100);

console.log('num1', num1);
console.log('result', result);

let a, b, c;
// a = b = c = 2 + 2;

c = 2 + 2;
b = c;
a = c;
console.log(a, b, c);