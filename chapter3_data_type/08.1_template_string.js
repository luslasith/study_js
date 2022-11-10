//                      템플릿 문자열   Template String

/*
    값을 문자열 안에 써야하는 일이 아주 많다.
    이때 문자열 병합(concatenation)을 통해 변수나 상수를 문자열 안에 쓸 수 있다.   */

    //문자열 템플릿을 사용하지 않은 예시
    let currentTemp = 19.5;
    // 00b0은 온도를 나타내는 유니코드 코드포인트이다.
    const message = "The currnet temperature is "+currentTemp + "\u00b0C";

/*
    문자열 템플릿이라는 기능은 문자열 채우기라고 부르기도한다.
    문자열 템플릿은 문자열의 정해진 위치에 값을 채워넣는 간편한 방법이다.
    문자열 템플릿에는 큰따옴표나 작은따옴표를 쓰지 않고 backtick을 사용.  */

    //문자열 템플릿을 사용한 예시
    let currentTmp1 = 19.5;
    const message1 = `The current temperature is ${currentTemp}\u00b0C`;


/*
    문자열 템플릿 안에서는 달러기호($)가 특수문자가 된다.    
    $ 다음에 중괄호로 감싼 값을 채워넣는 간편한 방법.
    만약 문자열 템플릿 안에 $를 써야한다면 백슬래시로 이스케이프 하면된다.

    문자열 템플릿은 자주사용하게될 기능이다. 필이 익혀두어야 함.
*/