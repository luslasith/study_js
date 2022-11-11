//                  null과 undefined

/*
    null과 undefined는 JS의 특별한 타입이다.
    null이 가질 수 있는 값은 null 하나뿐이며, 
    undefined가 가질 수 있는 값도 undefined 하나뿐이다.
    null과 undefined는 모두 존재하지 않는 것을 나타낸다.
    그리고 이 둘은 서로 다른 데이터 타입으로 분리되었기때문에 
    끝없는 혼란을 낳았고 많은 초보자들이 고생했다.

    일반적인 규칙을 제시한다면, 
    null은 프로그래머에게 허용된 데이터 타입이며
    undefined는 JS 자체에서 사용한다고 기억하는 것이 편하다.

    이 규칙은 강제가 아님.
    프로그래머도 언제든 undefined 값을 사용할 수는 있지만, 꼭 필요할 때만 사용하도록 주의.
    변수에 직접 undefined를 할당하는 경우는, 아직 값이 주어지지 않은 변수의 동작을
    고의로 흉내 내야할 때뿐. 
    변수의 값을 아직 모르거나 적용할 수 없는 경우에는 대부분 null이 더 나은 선택.
    사소한 것에 지나치게 신경 쓰는 것처럼 보이겠지만 초보한테는 이게 맞다.

    변수를 선언하기만 하고 명시적으로 값을 할당하지 않으면 
    그 변수에는 기본적으로 undefined가 할당된다.        */

    // null과 undefined 리터럴의 몇 예제
    let currentTemp;            // 암시적으로 undefined이다.
    const targetTemp = null;    // 대상 온도는 null. 즉, 아직 모르는 값.
    currentTemp = 19.5;         // currentTemp에는 이제 값이 있다.
    currentTemp = undefined;    // currentTemp는 초기화되지 않은 듯하다. 무슨말이지?