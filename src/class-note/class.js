// 같은 코드임

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let capt = new Person('주원', 18);

class Person {
  // class 로직
  constructor(name, age) {
    console.log('생성되었습니다!');
    this.name = name;
    this.age = age;
  }
}

let juwon2 = new Person('주원', 18); // console 실행
console.log(juwon2);