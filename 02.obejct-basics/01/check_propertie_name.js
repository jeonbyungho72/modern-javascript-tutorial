let person = {
    name: "이영희",
    age: 22,
    "지역": "경기도",
    "시": "아무시",
}

console.log("name" in person); // true
console.log("age" in person); // true
console.log("지역" in person); // true
console.log("동" in person); // false

for (let key in person) {
    console.log(key, person[key]);
}