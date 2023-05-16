interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

const introduce = (): Developer | Person => {
  return { name: 'Juwon', age: 18, skill: 'Front'}
}

let tony = introduce();
console.log(tony.name);

if ((tony as Developer).skill) {
  // tony.name;
  console.log((tony as Developer).skill);
}
else if((tony as Person).age) {
  console.log((tony as Person).age);
} 

/* 타입 가드 정의 */
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age); 
}