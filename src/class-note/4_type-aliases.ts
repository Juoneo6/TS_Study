interface Person {
  name: string;
  age: number;
}

// type Person = {
//   name: string;
//   age: number;
// }

let seho: Person = {
  name: 'seho',
  age: 30
}

type MyString = string;
let str: MyString = 'hello';

type Todo = {
  id: string; 
  title: string; 
  done: boolean
};

function getTodo(todo: Todo) {
  
}

// string 타입을 사용할 때
const name1: string = 'capt';

// 타입 별칭을 사용할 때
type MyName = string;
const name2: MyName = 'capt';