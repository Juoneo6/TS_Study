// 함수 파라미터 타입
function sum(a: number, b: number): number {
  return a + b;
}

// 함수 반환 값에 타입
function add1(): number {
  return 10;
}

//  함수에 타입을 정의하는 방식
function sum1(a: number, b: number): number {
  return a + b;
}

// 함수의 옵셔널 파라미터(?)
function log(a: string, b?: string) {}

log("hello world");
