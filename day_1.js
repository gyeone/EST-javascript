// day_01.js 퀴즈목록

// 1.
// 지문 : let, const로 각각 name과 age를 넣고 출력
// 출력결과 : Ghost, 1000
// 1. 답
// let name = "Ghost";
// const age = 1000;
// console.log(`${name}, ${age}`);

// 2.
// 지문 : let으로 age 25, 30으로 변경후, age변수 출력하기
// 출력결과 : 30
// 2. 답
// let age = 25;
// age = 30;
// console.log(age);

// 6.
// 지문 : 객체의 프로퍼티 변경
// const user = { name: 'Bob' } 후 user.name = 'Tom'
// 출력결과 : {name: 'Tom'}
// 6. 답
// const user = { name: "Bob" };
// user.name = "Tom"; // 수정
// console.log(user);

// 7.
// 지문 : 이름(name)과 나이(age) 변수를 선언하고, 템플릿 리터럴로 "안녕하세요, 저는 name이고 age살입니다."를 출력해보세요.
// 출력결과 : 안녕하세요, 저는 Ghost이고 1000살입니다.
// 7. 답
// const name = "Ghost";
// const age = "1000";
// console.log(`안녕하세요, 저는 ${name}이고 ${age}살입니다.`);

// 10.
// 지문 : 배열요소의 값 변경하기
// const fruits = [ 'apple','banana'] 에서 배열의 첫번째 요소인 'apple'을 'Orange'로 바꾼후, fruits 변수 출력하기
// 출력결과 [ 'Orange','banana']
// 10. 답
// const fruits = ["apple", "banana"];
// fruits[0] = "Orange";
// console.log(fruits);

// 11.
// 지문 : name 변수에 자신의 이름을 넣고, 템플릿 리터럴로 "안녕하세요, name님!"을 출력해보세요.
// 출력결과 : 안녕하세요, Ghost 님
// 11. 답
// const name = "백기연";
// console.log(`안녕하세요, ${name}님!`);

// 12.
// 지문 : 두수의 합구하기. num1, num2변수에 각각 숫자를 넣고, 두수의 합을 템플릿 리터럴로 출력해 보세요
// 출력결과 예 : 3 + 5 = 8
// 12. 답
// const num1 = 1;
// const num2 = 2;
// console.log(`${num1} + ${num2} = ${num1 + num2}`);

// 곱셉과 나눗셈 출력
// 지문 : a, b 변수에 각각 6과 2를 할당하고, 곱셈결과와 나눗셈 결과를 템플릿 리터럴로 출력해보세요
// 출력결과 : 6 * 2 = 12 , 6 / 2 = 3
// 답
// const a = 6;
// const b = 2;
// console.log(`${a} * ${b} = ${a * b}, ${a} / ${b} = ${a / b}`);

// 추가 :  더하기 함수, 곱하기 함수, 나누기 함수 만들어보기(sum(), multi(), div() )

// 더하기함수
// function sum(a, b) {
//     console.log(a + b);
// }

// sum(1, 3);

// 곱하기 함수
// function multi(a, b) {
//     console.log(a * b);
// }

// multi(1, 3);

// 나누기 함수
// function div(a, b) {
//     console.log(a / b);
// }

// div(1, 3);
