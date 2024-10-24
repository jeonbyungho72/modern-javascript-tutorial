# 조건문

## if ... else, else if

```js
if(condition){
    // 만약 조건(condition)이 참일 경우 실행할 코드
}

if(condition){
    // 만약 조건(condition)이 참일 경우 실행할 코드
} else {
    // 아닐 경우 실행할 코드
}

if(condition1){
    // 만약 조건1(condition1)이 참일 경우 실행할 코드
} else if(condition2){
    // 만약 조건2(condition1)이 참일 경우 실행할 코드
} else {
    // 모두 아닐 경우 실행할 코드
}
```

## switch

`switch`문은 입력으로 하나의 표현식/값(`expression`)을 받고, 값과 일치하는 하나를 찾을 때까지 여러 케이스(`choice1 ~ choice_n`)을 살펴보고 그에 맞는 코드를 실행합니다.

```js
switch (expression) {
    case choice1:
        // run this code
        break;

    case choice2:
        // run this code
        break;

  // ... 원하는 만큼 많은 case를 포함하십시오

    case choice_n:
        // run this code
        break;

    default:
        // 값과 일치하는 케이스가 없을 경우 실행할 코드
}
```

## 삼항 연산자(ternary or conditional operator)

```js
// ( condition ) ? x= 참일 경우 실행할 코드 : 거짓일 경우 실행할 코드
const age = 21;
let message = (age > 19) ? '성인 입니다' : '미성년자입니다.';
console.log(message); // 성인 입니다
```
