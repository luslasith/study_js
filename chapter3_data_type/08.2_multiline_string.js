//              여러 줄 문자열 multiline string

/*    문자열에 줄바꿈 문자 넣기    */
const multiline = "line1\
line2";
//출력결과: line1line2

/*   제대로 넣는 법   */
const multiline1 = "line1\n\
line2";

// 백틱을 이용하기
const multiline2 = `line1
line2`;

// 백틱을 이용한 단점
const multiline3 = `line1
line2
line3`


// 소스코드에서 문자열을 여러 행에 나눠 써야할 때 병합하는 법
const multiline4 = "line1\n" + 
    "line2\n" + 
    "line3";

// 백틱을 섞어 쓸 때
let currentTemp = 19.5;
const message1 = `The current temperature is ${currentTemp}\u00b0C`;
const multiline5 = 'Current temperature:\n' +
    `\t${currentTemp}\u00b0C\n` +
    "Don't worry...the heat is on!";



// index에서 테스트해보기
console.log(multiline);
console.log(multiline1);
console.log(multiline2);
console.log(multiline3);
console.log(multiline4);
console.log(multiline5);
