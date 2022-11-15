//                      객체

// 아직 명확히 잘 모르겠다. 


/*
    원시 타입은 단 하나의 값만 나타낼 수 있고 불변이지만,
    이와 달리 객체는 여러가지 값이나 복잡한 값을 나타낼 수 있으며,
    변할 수도 있다.

    객체의 본질은 컨테이너이다.
    컨테이너의 내용물은 시간이 지나면서 바뀔 수 있지만,
    내용물이 바뀐다고 컨테이너가 바뀌는 것은 아니다.
    즉, 여전히 같은 객체다.
    객체에도 중괄호, 즉 {와 }를 사용하는 리터럴 문법이 있다.
    중괄호는 한쌍이므로 객체가 어디에서 시작하고 끝나는지 나타낼 수 있다.
    빈 객체로 시작해보자.    */

    const obj = {};

/*
    객체의 콘텐츠는 프로퍼티 또는 멤버라고 부른다.
    프로퍼티는 이름(key)과 값으로 구성. 
    프로퍼티 이름은 반드시 문자열 또는 심볼이어야하며, 
    값은 어떤 타입이든 상관없고 다른 객체여도 좋다.
    obj에 컬러 프로퍼티를 추가해보자    */

    obj.color = "yellow";

/*
    프로퍼티 이름에 유효한 식별자를 써야 멤버 접근 연산자(member access operator)인
    .(점)을 사용할 수 있다.
    프로퍼티 이름에 유효한 식별자가 아닌 이름을 쓴다면 
    계산된 멤버 접근 연산자(computed member access poerator)인 [](대괄호)를
    써야한다.
    프로퍼티 이름이 유효한 직별자여도 대괄호로 접근할 수 있다.     */

    obj["not an identifier"] = 3;
    obj["not an identifire"];
    obj["color"];

//  심볼 프로퍼티에 접근할 때도 대괄호를 사용한다.

    const SIZE = Symbol();
    obj[SIZE] = 8;
    obj[SIZE];

/*
    이제 obj에는 "color"(유효한 식별자 문자열), 
    "not an identifier"(유효한 식별자가 아닌 문자열),
    Size(심볼) 세 가지 프로퍼티가 있다.

    note. JS 콘솔에서 이 예제를 실행해보면 콘솔에서는 SIZE를 obj의 프로퍼티로
    나열하지 않는다. (console.log(obj)).obj[SIZE]를 입력해보면 SIZE가 obj의 
    프로퍼티인 것을 확인할 수 있지만, 심볼 프로퍼티는 다르게 처리되며
    기본적으로는 표시되지 않는다.
    또한 이 프로퍼티의 key는 SIZE 심볼이며 문자열 "SIZE"가 아니다.
    obj.SIZE=0을 입력한 후 obj[SIZE]와 obj.SIZE를 입력해보면
    이 사실을 확인할 수 있다.

    obj는 빈 객체로 만들었지만, 객체 리터럴 문법에서는 객체를 만드는 동시에
    프로퍼티를 만들 수 있다.
    중괄호 안에서 각 프로퍼티를 쉼표로 구분하고,
    프로퍼티 이름과 값은 콜론으로 구분한다.             */

    const sam1 = {
        name: 'Sam',
        age: 4
    };

    const sam2 = {name: "Sam", age: 4};     //한줄로 선언

    const sam3 = {
        name: 'Sam',
        classification: {
            kingdom: 'Anamalia',
            phylum: 'Choradate',
            class: 'Mamalia',
            order: 'Carnivoria',
            family: 'Felidae',
            subfabily: 'Felinae',
            gunus: 'Felis',
            species: 'catus'
        }
    };

/*
    위 예제에선 객체 리터럴 문법에 따라 세 가지 객체를 만들었다.
    sam1과 sam2의 프로퍼티는 똑같지만 둘은 서로 다른 객체.
    원시 값과는 반대. (값이 숫자 4인 두 변수는 같은 원시 값을 가리킨다.)
    sam3의 classification 프로퍼티는 그 자체가 객체.
    sam3의 family에 접근하는 방법은 여러가지.
    큰 따옴표나 작은 따옴표, 백틱을 써도 된다.       */

    sam3.classification.family;              //'Felidae'
    sam3["classification.family"];           //'Felidae'
    sam3.classification[family];             //'Felidae'
    sam3["classification"]["family"];        //'Felidae'

/*
    객체에 함수를 담을 수도 있다.
    함수에 대해서는 나중에 자세히 설명할 예정.
    지금은 함수가 일종의 부속프로그램이라고 생각하면 된다.
    sam3에 함수를 추가할 때는 다음과 같이 한다.     */

    sam3.speak = function() {return 'Meow!';};

//  이제 함수 뒤에 괄호를 붙여 함수를 호출할 수 있다.

    sam3.speak();                           //'meow!'

//  마지막으로, 객체에서 프로퍼티를 제거할 때는 delete 연산자를 사용.

    delete sam3.classification;             //classification 트리 전체가 삭제.
    delete sam3.speak;                      //speak 함수가 삭제.


/*
    객체지향 프로그래밍인 OOP에 익숙하다면 JS 객체를 OOP에 어떻게 사용하는지
    궁금할 것이다. 지금은 객체를 범용 컨테이너쯤으로 생각해라.     */

/* 
    참고! JS 콘솔에서 이 예제를 실행해보면 콘솔에서는 SIZE를 obj의 프로퍼티로
    나열하지 않는다. (console.log(obj)).obj[SIZE]를 입력해보면 SIZE가 obj의 
    프로퍼티인 것을 확인할 수 있지만, 심볼 프로퍼티는 다르게 처리되며
    기본적으로는 표시되지 않는다.
    또한 이 프로퍼티의 key는 SIZE 심볼이며 문자열 "SIZE"가 아니다.
    obj.SIZE=0을 입력한 후 obj[SIZE]와 obj.SIZE를 입력해보면
    이 사실을 확인할 수 있다.  */