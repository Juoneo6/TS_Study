/* interface */
interface Developer1 {
  name: string;
  skill: string;
}

interface Person1 {
  name: string
}

let developer2: Developer1;
let person: Person1;

class Person {
  name: string;
  skill: string;
}

let add1 = function(a: number) {
  //.
}

let sum1 = function(a: number, b: number) {
  //..
}

sum1 = add1;
// add1 = sum1;

interface Empty<T> {
  //..
}

let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}

let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;

// notempty1 = notempty2;
// notempty2 = notempty1;