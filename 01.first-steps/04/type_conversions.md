# 형변환

## 문자형으로 변환

`String(value)` 함수를 호출해 전달받은 값을 문자열로 변환 할 수도 있습니다.

```js
let bool = false;
console.log(typeof bool); // boolean

bool = String(bool);
console.log(typeof bool); // string
```

## 숫자형으로 변환

숫자형으로의 변환은 수학과 관련된 함수와 표현식에서 자동으로 일어납니다. (`+` 연산 제외)  
`+`연산은 숫자 연산이 이루어지지 않고 문자열끼리 서로 이어집니다.

```js
const s1 = "6";
const s2 = "2";

const plus = s1 + s2;
const minus = s1 - s2;
const multiply = s1 * s2;
const divide = s1 / s2;
const quotient = s1 % s2;

console.log(plus, typeof plus); // 62 string
console.log(minus, typeof minus); // 4 number
console.log(multiply, typeof multiply); // 12 number
console.log(divide, typeof divide); // 3 number
console.log(quotient, typeof quotient); // 0 number
```

`Number(value)` 함수를 사용하면 주어진 값(value)을 숫자형으로 명시해서 변환할 수 있습니다.

```js
const num = Number("132");
console.log(num, typeof num);// 132 number
```

숫자로된 문자열 이외 값을 숫자형으로 변환하려고 하면 아래 예시처럼 됩니다.

```js
Number(undefined) // NaN
Number(null) // 0
Number(true) // 1
Number(false) // 0
Number("") // 0
Number("asd0") // NaN
```

## 논리형으로 변환

불린형으로 변환 시 적용되는 규칙은 다음과 같습니다.

- 숫자 0, 빈 문자열, `null`, `undefined`, `NaN`과 같이 직관적으로도 “비어있다고” 느껴지는 값들은 false가 됩니다.
- 그 외의 값은 true로 변환됩니다.

```js
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false
Boolean(0) // false
Boolean(1) // true
Boolean('') // false
Boolean('0') // true
```
