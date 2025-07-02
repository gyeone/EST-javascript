// Object 관련 퀴즈 20개 풀기

// Object 기초 퀴즈 (10/10)

// 1. 객체 person에서 name 속성의 값을 출력하세요.
const person = { name: "Ghost", age: 20 };
console.log(person.name);

//2. 객체 person에 height: 180 속성을 추가하세요.
person.height = 180;
console.log(person);

// 3. 객체 person에서 age 속성을 삭제하세요.
delete person.age;
console.log(person);

// 4. 객체 person의 모든 속성(key) 이름을 배열로 출력하세요.
console.log(Object.keys(person));

// 5. 객체 person의 모든 값(value)만 배열로 출력하세요.
console.log(Object.values(person));

// 6. for...in문으로 person의 모든 key와 value를 한 줄씩 출력하세요.
const person2 = { name: "Ghost", age: 20 };
for (const key in person2) {
    console.log(key, person2[key]);
}

// 7. person2에 'age' 속성이 있는지 true/false로 출력하세요.
console.log("age" in person2);

// 8. person2 객체의 모든 값을 "이름:값" 형태의 문자열로 출력하세요.
Object.entries(person2).forEach(([k, v]) => console.log(`${k}:${v}`));

// 9. 빈 객체 Obj를 만들고, 동적으로 key와 value를 추가하세요.
const Obj = {};
Obj.key = "value";
console.log(Obj);

// 10. 객체 person2의 key 개수를 출력하세요.
console.log(Object.keys(person2).length);

// Object 실전 퀴즈 (6/10)

// 1. users 배열에서 모든 사용자의 이름만 배열로 추출하세요.
const users = [
    { name: "Ghost", age: 20 },
    { name: "Irangi", age: 22 },
    { name: "Camel", age: 19 },
];
console.log(users.map((user) => user.name));

// 2. user 객체를 복사하여 age만 30으로 바꾼 새 객체를 만드세요.
const user = { name: "Ghost", age: 20 };
const user2 = { ...user, age: 30 };
console.log(user, user2);

// 3. person 객체에 동적으로 key와 value를 추가하세요. (key: hobby, value: soccer)
person.hobby = "soccer";
console.log(person);

// 4. 두 객체 obj1, obj2를 합쳐서 새 객체를 만드세요.
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const sumObj = { ...obj1, ...obj2 };
console.log(sumObj);

// 5. person 객체의 모든 key와 value를 "key:value" 형태의 문자열 배열로 만드세요.
const arr = Object.entries(person).map(([k, v]) => `${k}:${v}`);
console.log(arr);

// 6. users2 배열에서 나이가 20 이상인 사람만 추출하세요.
const users2 = [
    { name: "Ghost", age: 20 },
    { name: "Camel", age: 19 },
    { name: "Irangi", age: 22 },
];
console.log(users2.filter((users2) => users2.age >= 20));

// Object 심화 퀴즈 (4/10)

// 1. 객체 obj를 깊은 복사(Deep Copy)하는 코드를 작성하세요.
const obj = { a: 1, b: { c: 2 } };
const newObj = JSON.parse(JSON.stringify(obj));
console.log(newObj);

// 4. 객체 person에 sayHello 메서드를 추가하고 실행하세요.
person.sayHello = function () {
    return `Hello ${this.name}`;
};
console.log(person.sayHello());

// 7. 객체의 key를 기준으로 정렬된 배열을 만드세요.
const obj3 = { b: 2, a: 1, c: 3 };
console.log(Object.keys(obj3).sort());

// 9. 객체 obj의 모든 값이 true인지 판별하세요.
const obj4 = { a: true, b: true, c: false };
console.log(Object.values(obj4).every((boolean) => boolean === true));

// Object 고급 퀴즈 (6/10)
// 1. 객체 구조분해 할당으로 name, age를 변수로 추출하세요.
const person3 = { name: "Ghost", age: 20 };
const { name, age } = person3;
console.log(name, age);

// 4. 객체의 key만 순회하며 모두 출력하세요. (for...in 사용 금지)
const obj5 = { a: 1, b: 2 };
const obj5Key = Object.keys(obj5).forEach((k) => console.log(k));

// 5. 객체에서 값이 2 이상인 key만 배열로 추출하세요.
const obj6 = { a: 1, b: 2, c: 3 };
const over2 = Object.entries(obj6)
    .filter(([k, v]) => v >= 2)
    .map(([k]) => k);
console.log(over2);

// 8. 객체를 [key, value] 쌍의 배열로 변환하세요.
const obj7 = { a: 1, b: 2 };
console.log(Object.entries(obj7));

// 9. 객체의 모든 값이 짝수인지 판별하세요.
const obj8 = { a: 2, b: 4, c: 5 };
console.log(Object.values(obj8).every((num) => num % 2 === 0));

// 10. 객체의 key와 value를 모두 문자열로 변환한 새 객체를 만드세요.
const obj9 = { a: 1, b: true, c: null };
console.log(Object.entries(obj9).map(([k, v]) => `${k}:${v}`));
