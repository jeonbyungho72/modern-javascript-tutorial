# modal window

## 📖alert, prompt, confirm을 이용한 상호작용

### alert

브라우저에서 메서드는 확인 버튼을 가지며 메시지를 지정할 수 있는 경고 대화 상자를 띄웁니다.

```html
<script>
    alert("안녕하세요");
</script>
```

### prompt

브라우저에서 사용자가 텍스트를 입력할 수 있도록 안내하는 선택적 메세지를 갖고 있는 대화 상자를 띄웁니다.

```html
<script>
    let cost = prompt("금액을 입력해주세요.", 1000);
    alert(cost);
</script>
```

사용자가 입력을 취소한 경우는 null이 반환됩니다.

### confirm

브라우저에서 확인과 취소 두 버튼을 가지며 메시지를 지정할 수 있는 모달 대화 상자를 띄웁니다.
사용자가 확인 버튼을 누르면 `true`, 그 외의 경우는 `false`를 반환합니다.

```html
<script>
    let isStudent = confirm("학생인가요?");
</script>
```
