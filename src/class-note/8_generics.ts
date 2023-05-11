// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10);

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// logText<string>('하이');

// function logText(text: string) {
//   console.log(text);
//   // text.split('').reverse().join('');
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// const num = logNumber(10)

const logText = <T>(text: T): T => {
  console.log(text);
  return text;
}

const str1 = logText<string>('abc')
str1.split('');
const flag = logText<boolean>(true);
flag.valueOf();

// interface in generics
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = {value: 'abc', selected: false};

interface Dropdown<T> {
  value: T;
  selcted: boolean;
}

// const obj: Dropdown<number> = { value: 'abc', selected: false };

// 제네릭의 타입 제한 -> 타입 힌트
const logTextLength = <T>(text: T[]): T[] => {
  console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  });
  return text;
}

logTextLength<string>(['hi', 'abc']);

// 정의된 타입 제한 이용하기
interface LengthType {
  length: number;
}

const logTextLength1 = <T extends LengthType>(text: T): T => {
  text.length;
  return text;
}

logTextLength1('a')

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// keyof ShoppinItem 중 한 가지만 정의될 수 있다
// -> 제너릭 타입 줄이기
const getShoppingItemOption = <T extends keyof ShoppingItem>(itemOption: T): T => {
  return itemOption;
}

getShoppingItemOption('name');