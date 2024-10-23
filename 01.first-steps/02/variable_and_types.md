# 변수와 상수

## 📖변수(variable)

변수는 데이터를 담을 수 있는 저장소 입니다. `let`키워드를 사용해 변수를 생성합니다.

- 변수 선언

    ```js
    let username;
    ```

- 변수 초기화

    ```js
    let username = "홍길동";
    ```

- 변수 값 변경

    ```js
    let age;
    age = 30;
    ```

- 변수를 출력하기

    ```js
    let username = "홍길동";
    console.log(username); // 홍길동
    ```

> ⚠️같은 이름의 변수를 두 번 선언하면 에러가 발생합니다.

### 변수 명명규칙

자바스크립트에는 두 가지 제역 사항이 있습니다.

1. 문자와 숫자, 특수 문자 `$`와 `_`만 들어갈 수 있다.
1. 첫 글자는 숫자가 될 수 없다.

변수명은 첫 단어를 최소한 각 단어의 첫자를 대문자로 작성합니다. (카멜 표기법)

```js
let camelCase;
let isCamelCase;
```

### `let`키워드 없이 변수 선언

엄격 모드가 아닐 시 `let` 키워드 없이 값을 할당할 수 있었습니다.

```html
<script>
    message = "환영합니다.";
    alert(message);
</script>
```

과거 스크립트와의 호환성을 유지할 수 있기 때문에 여전히 이 방식을 사용할 수 있으나 나쁜 관습이기 때문에 엄격모드에서는 에러가 발생합니다.

```html
<script>
    "use strict";
    message = "환영합니다."; // Uncaught ReferenceError: assignment to undeclared variable message
    alert(message);
</script>
```

## 📖상수(constant)

상수는 변화지 않는 변수로 `const`키워드를 사용해 상수를 생성합니다.

### 상수 명명 규칙

값 그대로 대입한(리터럴) 상수의 명식은 대문자로 작성하고 `_`로 단어간 구분하여 작성합니다.

```js
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";

let color = COLOR_BLUE;
console.log(color); // #00F
```

단 그렇지 않는 상수는 일반적인 변수명을 지어주면 됩니다.

```js
const pageLoadTime = /* 페이지를 로드하는데 걸린 시간 */
```

### 상수 선언 시 주의 사항

상수는 선언할 때 반드시 초기화해야 합니다.

```js
const time; // SyntaxError: Missing initializer in const declaration
time = 123;
```

상수를 초기화한 후에는 새 값을 할당할 수 없습니다.

```js
const PI = 3.14;
PI = 3.33; // Uncaught TypeError TypeError: Assignment to constant variable.
```

## 📖자료형

### 동적 타입 언어

자바스크립트의 변수는 저장되는 값의 타입을 언제든지 바꿀 수 있는 동적 타입 언어입니다.

```js
let data = 20;
console.log(data); // 20
data = "이십";
console.log(data); // 이십
```

### 숫자형(number type)

정수(1, 2, 30)및 부동 소수점 숫자로 나타냅니다.

- 정수  
    1, 2, 30 등등
- 부동 소수점 숫자  
    3.14, 0.14, 100.0

숫자형에는 일반적인 숫자외 특수 숫자 값(special numeric value)이 포함됩니다.

- `Infinity`는 무한대를 나타냅니다.

    ```js
    const inf = 1 / 0;
    const big = 100000000000000;
    const compare = inf > big;
    console.log("inf: ", inf) // inf:  Infinity
    console.log("inf > big: ", compare) // inf > big:  true
    ```

- `NaN`은 계산 도중 에러가 발생한 것을 나타냅니다.  
    부정확한 수학 연산 시 에러가 발생하는 데, 이때 `NaN`로 반환됩니다.

    ```js
    console.log("이" * 2); // NaN
    console.log("이" / 2); // NaN
    ```

### BigInt

일반적으로 자바스크립트는 $2^{53}-1$보다 큰 정수또는 $-(2^{53}-1)$보다 작은 정수를 나타낼 수 없는데 BigInt형은 이러한 정수 사용하기 위한 자료형입니다.

`BigInt`형 값은 정수 리터럴 끝에 n을 붙이면 만들 수 있습니다.

```js
let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt); // 1234567890123456789012345678901234567890n
```

### 문자열(string)

문자열은 텍스트 조각입니다. 변수에 문자열 값을 지정할 때는 작은따옴표(')나 큰따옴표(")로 묶어야 합니다.

### 논리형

true는 긍정, false는 부정을 의미합니다.

### null, undefined 값

`null`는 비어 있거나 존재하지 않는 값, 알 수 없는 값을 나타내는 데 사용됩니다.

```js
let age = null;
console.log(age); // null
```

> 자바스크립트의 null은 자바스크립트 이외 언어의 null과 성격이 다릅니다.  
> 다른 언어에선 `null`을 존재하지 않는 객체에 대한 참조나 null pointer를 나타낼 때 사용됩니다.

`undefined`는 값이 아직 할당되지 않는 상태를 나타냅니다.

변수는 선언했지만 값은 할당하지 않았다면 자동으로 `undefined`이 할당됩니다.

```js
let age;
console.log(age); // undefined
```

변수에 `undefined`를 직접 할당하는 것이 가능하나 권장하진 않습니다.  
대신 변수가 비어 있거나 알 수 없는 상태라는 걸 나타내려면 `null`을 할당하면 됩니다.

### 객체(object), Symbol

객체를 제외한 숫자와 문자열 등 한 가지만 표현할 수 있는 자료형을 원시 자료형이라고 부릅니다.
반면 객체는 실제 사물을 모델링하는 코드 구조로 데이터 컬렉션이나 복잡한 개체(entity)를 표현할 수 있습니다.

Symbol형은 객체의 고유한 식별자(unique identifier)를 만들 때 사용됩니다.

### 배열

배열은 대괄호로 묶고 쉼표로 구분한 여러 값을 포함하는 단일 객체입니다.

```js
let names = ["김철수", "김영희", "홍길동"];
let numbers = [10, 15, 30];
```

대괄호에 반환하려는 값의 위치에 해당하는 인덱스 값을 넣습니다.

```js
names[0]; // 김철수
numbers[2]; // 30
```

### typeof 연산자

typeof 연산자는 인수의 자료형을 반환합니다. 자료형에 따라 처리 방식을 다르게 하고 싶거나 변수의 자료형을 빠르게 알아내고자 할 때 유용합니다.

```js
console.log(typeof 1); // number
console.log(typeof false); // boolean
console.log(typeof "foo"); // string
console.log(typeof console); // object
console.log(typeof console.log); // function
```
