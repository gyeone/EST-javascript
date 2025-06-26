// 1. 입력한 나이에 따라 성인 / 미성년자 출력하기
const age = 18;
if (age >= 19) {
    console.log("성인");
} else {
    console.log("미성년자");
}

// 2. 숫자를 입력하면 짝수인지 홀수인지 출력하기
const num = 7;
if (num % 2 === 0) {
    console.log("짝수");
} else {
    console.log("홀수");
}

// 3. 사용자 점수에 따라 등급(A~F) 나누기
const score = 82;
let grade;
if (score >= 90) grade = "A";
else if (score >= 80) grade = "B";
else if (score >= 70) grade = "C";
else if (score >= 60) grade = "D";
else if (score >= 50) grade = "E";
else grade = "F";
console.log(grade);

// 4. 사용자 이름이 특정 이름인지 확인하고 인사 출력하기
const name = "Ghost";
if (name === "Ghost") {
    console.log("안녕하세요, Ghost님!");
} else {
    console.log("누구세요?");
}

// 5. 입력한 수가 0보다 크면 "양수", 0이면 "0", 아니면 "음수" 출력하기
const num2 = -3;
if (num2 > 0) {
    console.log("양수");
} else if (num2 === 0) {
    console.log("0");
} else {
    console.log("음수");
}

// 6. 비밀번호가 일치하는지 검사하고 로그인 결과 출력하기
const inputPw = "1234";
const realPw = "1234";
if (inputPw === realPw) {
    console.log("로그인 성공");
} else {
    console.log("비밀번호가 틀렸습니다");
}

// 7. 세 개의 수 중 가장 큰 수 찾기
const one = 2;
const two = 7;
const three = 4;
console.log(Math.max(one, two, three));

// 8. 주어진 숫자가 3의 배수인지 확인하기
const num3 = 9;
if (num3 % 3 === 0) {
    console.log(`${num3}는 3의 배수가 맞습니다`);
} else {
    console.log(`${num3}는 3의 배수가 아닙니다`);
}
