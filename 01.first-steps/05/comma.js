const a = (2, "a", 1 + 2);
console.log(a);

let i = 2;
let k = 3;
const num = (i = 1, k -= 1, i + k);
console.log(num);