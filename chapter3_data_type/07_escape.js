/*
    이스케이프(escape)


    텍스트로 만들어진 프로그램에서 텍스트 데이터와 프로그램 자체를 구별할 방법이 필요.
    이때 문자열을 따옴표 안에 사용하는 방법이 있다.
    하지만 문자열 안에 따옴표를 써야한다면 어떻게 해야할까?

    이 문제를 해결하려면 따옴표를 이스케이프해서 문자열 주위에 쓰는 부호가 아님을 나타내야함.
    ex)                    */

    const dialog = 'Sam looked up, and said "hello, old friend!", as Max waked in.';
    const imperative = "Don't do that!";

    /*
        dialog는 작은 따옴표로 감싸여있으므로 문자열 안에 큰따옴표를 걱정없이 쓸 수 있다.
        마찬가지로, imperative는 큰따옴표로 감싸여 있으므로 문자열 안에 어포스트로피를 걱정없이 쓸 수 있다.
        하지만 두 가지 모두 사용해야한다면?            */

    const dialog2 = "Sam looked up, and said "don't do that!" to Max."; 
    //위처럼 에러가 난다.


    /*
        dialog2 문자열 안에 어떤 따옴표를 쓰더라도 에러가 생긴다.
        이때 백슬래시(\)를 써서 따옴표를 이스케이프하면 문자열이 여기서 끝나지 않았다고 
        JS에 알릴 수 있다.             */

    const dialog3 = "He looked up and said \"don't do that!\" to Max."
    const dialog4 = 'He looked up and said "dont\'t do that! to Max"'


    //    그렇다면 문자열에서 역슬래시 문자를 써야할 때는?  
    const s = "In JavaScript, use \\as an escape character in strings.";


    /*
        어떤 따옴표를 쓸지는 알아서 하면 된다.
        
        Tip: JS 문자열 안에 HTML를 쓸 때 작은따옴표로 쓴다.
        왜냐하면 속성 값에 큰따옴표를 쓸 수 있기 때문이다.         */


