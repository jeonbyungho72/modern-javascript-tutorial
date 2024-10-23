# 자바 스크립트 기본

## 📖script 태그

### 과거의 `script` 태그 속성

- `type`  
    HTML4에선 스크립트에 type을 명시하는 것이 필수였지만 HTML5이후로는 타입 명시가 필수가 아니며 모던 HTML 표준에선 이 속성의 의미가 바뀌었습니다.
- `language`  
    스크립트 언어임을 나타냅니다. 지금은 사용할 필요가 없습니다.

### 외부 스크립트

HTML안에 스크립트 내부 코드를 작성하는 방식은 간단할 때만 사용해야 합니다.
스크립트를 별도의 파일로 작성하면 브라우저가 스크립트 파일을 받아 캐시에 저장하기 때문에 성능상 이점이 있습니다.
이를 통해 트래픽이 절약되고 웹 페이지의 속도가 빨라집니다.

- `src`  

    ```html
    // 절대 경로
    <script src="/path/to/script.js"></script>
    // 상대 경로
    <script src="script.js"></script>
    // URL
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>
    ```

> `src`속성과 내부 코드는 동시에 가지지 못합니다.

## 📖코드 구조

### 세미콜론(`;`)

자바스크립트는 줄바꿈이 있으면 `;`를 생략할 수 있습니다.  
자바스크립트는 줄 바꿈이 있으면 이를 ‘암시적’ 세미콜론으로 해석합니다. 이런 동작 방식을 세미콜론 자동 삽입(automatic semicolon insertion)이라 부릅니다.

```js
console.log("안녕")
console.log("반가워")
```

주의 사항으로 자바스크립트는 대괄호(`[..]`) 앞에 세미콜론이 있다고 가정하지 않습니다.

```js
console.log("에러!")

[1, 2].forEach(console.log) // Uncaught TypeError TypeError: Cannot read properties of undefined (reading '2')
```

`console.log()`끝에 세미콜론을 추가해 다시 실행하면 코드는 잘 작동합니다.

```js
console.log("정상 작동");

[1, 2].forEach(console.log)
```

그러므로 자바스크립트 커뮤니티에서도 세미콜론 사용을 규칙으로 정해 권장하고 있습니다.

## 📖엄격모드(strict mode)

ES5에서 새로운 기능이 추가되고 기존 기능 중 일부를 개선되면서 기존 기능이 변경되면서 하위 호환성 문제가 생겼 수도 있었습니다.  
그래서 대부분의 변경 사항을 기본 모드에서 활성화하지 않는 대신  `"use strict"` 지시자를 사용에 엄격 모드를 활성화되게 해놨습니다.

### use strict

`"use strict"` 지시자를 최상단에 오면 스크립트 전체가 “모던한” 방식으로 동작합니다.

```js
"use strict"; // 모던한 방식으로 실행됩니다.
```

`"use strict"`는 스크립트 최상단이 아닌 함수 본문 맨 앞에 두면 오직 해당 함수만 엄격 모드로 실행됩니다.

```js
function useStrictFunction() {
    "use strict"

    console.log("엄격 모드가 적용된 함수");
}
```

모던 자바스크립트는 '클래스’와 '모듈’이라 불리는 진일보한 구조를 제공합니다.  
이 둘을 사용하면 use strict가 자동으로 적용되어 `"use strict"`를 붙일 필요가 없게 됩니다.
