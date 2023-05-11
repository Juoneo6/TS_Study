interface User {
  name: string;
  age: number;
  email?: string;
}

// 변수에 인터페이스 활용
let juwon: User = {
  name: 'juwon',
  age: 18,
  email: 'juwon2298@nvaer.com'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
  
}
const cat = {
  name: 'cat',
  age: 3
}
getUser(cat);

//함수의 구조에 인터페이스 활용
interface SumFunction { 
  (a: number, b: number): number;
}

let sum: SumFunction;
sum = function(a: number, b: number): number {
  return a + b;
}

// 인터페이스 인덱싱
interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];
arr[0] = '10';

// 인터페이스 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}

// 인터페이스 확장
// interface Person {
//   name: string;
//   age: number;
// }

// interface Developer extends Person {
//   language: string;
// }

// let capt: Developer = {
//   name: 'capt',
//   age: 100,
//   language: 'js'
// }