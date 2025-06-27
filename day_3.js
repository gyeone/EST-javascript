// day3 과제

const heights = [150, 169, 185, 170];
const ghost = 167;

// 01. heights에서 ghost보다 키가 큰 사람이 몇명인지 출력하시오
const overGhost = heights.filter((x) => x >= ghost);
console.log(overGhost.length);

const words = ["hello", "ghost", "apple", "grape", "lemon"];
// 02 words중에서 단어에 l 자가 들어있는 단어만 배열로 저장하시오. ['hello', 'apple', 'lemon']
// 조건, 대소문자 상관없이 모두 찾아야함
const includesL = words.filter((word) => word.toLowerCase().includes("l"));
console.log(includesL);
