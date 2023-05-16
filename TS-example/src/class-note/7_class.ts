class Person1 {
  private name: string; // 접근 범위
  public age: number;
  readonly log: string; // 변경 X 읽기만 가능

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}