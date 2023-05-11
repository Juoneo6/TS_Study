enum Shoes {
  Nike,
  Adidas,
  Fuma,
}

enum Shoes1 {
  Nike = '나이키',
  Adidas = '아디다스',
  Fuma = '퓨마'
}

let myShoes = Shoes.Nike;
console.log(myShoes); // 0 eunm 사용시 별도의 값을 지정하지 않으면 숫자형 이넘으로 취급 함 

let myShoes1 = Shoes1.Nike;
console.log(myShoes1); // 나이키

// 예제
enum Answer { 
  Yes = 'Y',
  No = 'N'
}

function askQuestion(answer: Answer) {
  answer === Answer.Yes ? console.log('정답입니다') : '';
  answer === Answer.No ? console.log('오답입니다!') : ''; 
}

askQuestion(Answer.Yes);
// error! askQuestion('yes')