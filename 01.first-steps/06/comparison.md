# 비교 연산자

- a가 b보다 크거나 작음  
    `a > b`, `a < b`
- a가 b보다 크거나 작거나 같음  
    `a >= b`, `a <= b`
- a와 b가 서로 같다(동등)  
    `a == b`
- a와 b가 서로 다르다(부등)  
    `a != b`

비트 연산자는 논리형으로 값을 반환하는데, 참일 경우 `true`, 거짓일 경우 `false`로 반환됩니다.

## 문자열 비교

자바스크립트는 유니코드 순으로 문자열을 비교합니다. 유니코드 기준으로 뒤쪽에 있는 문자가 앞쪽에 있는 문자보다 크다고 판단됩니다.

```js
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true
```

## 서로 다른 자료형간 비교

비교하려는 값의 자료형이 다르면 자바스크립트는 이 값들을 숫자형으로 바꿉니다.

```js
console.log('20' > 30); // false
console.log('00100' >= 100); // true

console.log(1 >= true); // true
console.log(0.99 >= true); // false
console.log(1.001 >= true); // true
console.log(0 == true); // false
```

## 일치 연산자(strict equality operator)

동등 연산자는 어떤 값을 가져도 서로의 값이 동일함을 의미합니다.
0과 false를 구분하지 못하거나 문자열이 비어 있는 지를 확인할 수 없습니다.

```js
let zero = 0;
let empty = '';
console.log(zero == false); // true
console.log(empty == false); // true
```

일치 연산자는 비교 시 타입 변환을 시도하지 않는다는 것입니다. 다른 타입을 가진 피연산자는 서로 다르다고 판단하여 `false`로 반환합니다.

```js
let zero = 0;
let empty = '';
console.log(zero == false); // false
console.log(empty == false); // false
```

## null, undefined 비교

- `null`와 `undefined`간 비교

    ```js
    console.log(null == undefined); // true
    console.log(null === undefined); // false
    ```

- `null`와 `0`와 비교

    ```js
    console.log(null > 0); // false
    console.log(null == 0); // false, null과 숫자형 0간의 동등 연산
    console.log(null >= 0); // true, null이 숫자형 0으로 형변환이 이루어지고 비교 연산이 진행됨
    console.log(null === 0); // false
    ```
    
    `null`은 `<`, `>`, `<=`, `>=`와 같은 비교 연산 시 `null`이 숫자형 `0`으로 변환되고 `null`이나 `undefined`가 동등 연산 시 형 변환이 이루어지지 않습니다.

- `undefined`를 다른 값과 비교해서는 안됩니다.

    ```js
    console.log(undefined > 0); // false
    console.log(undefined == 0); // false
    console.log(undefined >= 0); // false
    ```
