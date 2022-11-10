/*
    문자열과 숫자같은 원시타입(primitive)은 불변(immutable)이다.
    
    원시타입의 종류
    1. 숫자
    2. 문자열
    3. boolean
    4. null
    5. undefined
    6. symbol

    그러나 불변성이라는 말이 변수의 값이 바뀔 수 없다는 뜻은 아니다.   */

    let str = "hello";
    str = "world";

    /*
        hello와 world는 다른 문자열이다.
        바뀐 것은 str이 저장하는 값뿐.
    
        원시 값과 달리 객체는 여러 형태와 값을 가질 수 있다.

        - Array
        - Date
        - RegExp
        - Map과 WeakMap
        - Set과 WeakSet
    
        마지막으로, 원시 타입 중 숫자와 문자열, boolean에는 
        각각 대응하는 객체 타입인 Number, String, Boolean이 있다.

        이들 대응하는 객체에 실제 값이 저장되지는 않는다.
        이들은 대응하는 원시 값에 기능을 제공하는 역할을 한다.
        */

