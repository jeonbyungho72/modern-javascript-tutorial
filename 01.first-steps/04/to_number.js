const s1 = "6";
const s2 = "2";

const plus = s1 + s2;
const minus = s1 - s2;
const multiply = s1 * s2;
const divide = s1 / s2;
const quotient = s1 % s2;

console.log(plus, typeof plus);
console.log(minus, typeof minus);
console.log(multiply, typeof multiply);
console.log(divide, typeof divide);
console.log(quotient, typeof quotient);

const num = "132";
console.log(num, typeof num);

console.table({
    "undefined": Number(undefined),
    "null": Number(null),
    "true, false": [Number(true), Number(false)].join(","),
    "string": [Number(""), Number("asd0")].join(",")
})
