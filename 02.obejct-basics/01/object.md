# 객체

객체는 관련된 데이터와 함수의 집합입니다. 객체는 원시형과 달리 다양한 데이터를 담아 키로 구분된 데이터 집합이나 복잡한 개체(entity)를 저장할 수 있습니다.

객체는 중괄호 `{…}`를 이용해 만들 수 있습니다. 중괄호 안에는 `key: value` 쌍으로 구성된 프로퍼티(property) 를 여러 개 넣을 수 있는데, 키엔 문자형, 값엔 모든 자료형이 허용됩니다. 프로퍼티 키는 ‘프로퍼티 이름’ 이라고도 부릅니다.

## 객체의 생성

- 객체 생성자 문법

    ```js
    let person = new Object();
    ```

- 객체 리터럴 문법

    ```js
    let person = {};
    ```

## 리터럴과 프로퍼티

중괄호 {...} 안에는 `key: value` 쌍으로 구성된 프로퍼티가 들어갑니다. 프로퍼티의 키는 프로퍼티 이름또는 프로퍼티 식별자로도 부릅니다.

```js
let person = {
    name: "홍길동",
    age: 30,
    "math score": 88
}
// {name: '홍길동', age: 30, math score: 88}
```

점 표기법(dot notation)을 이용하면 프로퍼티 값을 읽는 것도 가능합니다.

```js
console.log(person.name); // 홍길동
console.log(person.age); // 30
```

프로퍼티를 추가하고 값을 할당할 수 있습니다.

```js
person.isStudent = true;
console.log(person.isStudent); // true
```

delete 연산자를 사용하면 프로퍼티를 삭제할 수 있습니다.

```js
delete person.age;
console.log(person.age); // undefined
```

## 대괄호 표기법(square bracket notation)

`"math score"`처럼 띄어쓰기가 구분한 문장을 이름으로 된 프로퍼티 키를 만든 경우엔, 점 표기법을 사용해 프로퍼티 값을 읽을 수 없습니다.

```js
console.log(person."math score"); // SyntaxError: Unexpected string
```

대괄호 안에 프로퍼티 이름을 따옴표로 묶어 적으면 됩니다.(`object["property name"]`)

```js
console.log(person["math score"]); // 88 

person["math score"] += 12; // 100

delete person["math score"];
console.log(person["math score"]); // undefined
```

변수를 키로 사용한 것과 같이 문자열뿐만 아니라 모든 표현식의 평가 결과를 프로퍼티 키로 사용할 수 있습니다.

```js
let eng = "eng score";
person[eng] = 79;
console.log(person[eng]); // 79
```

## 계산된 프로퍼티(computed property)

객체 리터럴 안의 프로퍼티 키가 대괄호로 둘러싸여 있는 경우, 이를 계산된 프로퍼티라고 부릅니다.

```js
let fruit = "사과";

const bag = {
    [fruit + "Count"]: 12
}

console.log(`${fruit}의 개수`, bag[fruit + "Count"]);
// 사과의 개수 12 
```

대괄호 표기법은 프로퍼티 이름과 값의 제약을 없애주기 때문에 점 표기법보다 훨씬 강력합니다. 그런데 작성하기 번거롭다는 단점이 있습니다.

이런 이유로 프로퍼티 이름이 확정된 상황이고, 단순한 이름이라면 처음엔 점 표기법을 사용하다가 뭔가 복잡한 상황이 발생했을 때 대괄호 표기법으로 바꾸는 경우가 많습니다.

## 프로퍼티 존재 여부 확인

자바스크립트 객체의 중요한 특징 중 하나는 다른 언어와는 달리, 존재하지 않는 프로퍼티에 접근하려 해도 에러가 발생하지 않고 undefined를 반환한다는 것입니다.

```js
let person = {};

console.log(person.noSuchProperty === undefined); // true
```

`undefined`와 비교하는 것 이외에도 연산자 `in`을 사용하면 프로퍼티 존재 여부를 확인할 수 있습니다.

```js
// "property name" in object
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
```

## 프로퍼티들을 나열

`for (key in object) {}` 반복문을 사용하면 객체의 모든 키를 순회할 수 있습니다.

```js
let person = {
    name: "이영희",
    age: 22,
    "지역": "경기도",
    "시": "아무시",
}

for (let key in person) {
    console.log(key, person[key]);
}
// name 이영희
// age 22
// 지역 경기도
// 시 아무시
```
