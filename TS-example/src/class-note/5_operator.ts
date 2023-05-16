// union type
let seho1: string | number | boolean;
function logMesssage(value: string | number) {
  typeof value === 'number' ? value.toLocaleString() : '';
  typeof value === 'string' ? value.toLocaleString() : '';
  throw new TypeError('value must be string or number');
}
logMesssage('hello');
logMesssage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// union type -> 공통된 특성만 쓸 수 있음
function askSomeone(someone: Developer | Person) {
  someone.name;
  // error someone.skill;
  // error someone.age;
}

function askSomeone1(someone: Developer & Person) {
  someone.name;
  someone.skill;
  someone.age
}

askSomeone({ name: '개발자', skill: '웹 개발'});
askSomeone({ name: '캡틴', age: 100 });