let person = {
    name: "홍길동",
    age: 30,
    "math score": 88
}
console.log(person);

console.log(person.name);
console.log(person.age);

person.isStudent = true;
console.log(person.isStudent);

delete person.age;
console.log(person.age);

// console.log(person."math score"); // SyntaxError: Unexpected string

console.log(person["math score"]);
person["math score"] += 12;
console.log(person["math score"]);
delete person["math score"];
console.log(person["math score"]);

let eng = "eng score";
person[eng] = 79;
console.log("eng", person[eng]);