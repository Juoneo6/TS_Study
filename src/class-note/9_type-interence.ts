// let a = 'abc';

// function getB(b = 10) {
// let c = 'hi';
//   return b + c;
// }

// 10 + '10'

// /* 타입 추론 기본 2 */
// // interface Dropdown2<T> {
// //   value: T;
// //   title: string;
// // }

// // let shoppingItem: Dropdown2<string> = {
// //   value: 'abc',
// //   title: 'hello'
// // }

// /* 타입 추론 기본 3 */
// interface Dropdown3<T> {
//   value: T,
//   title: string;
// }

// interface DetailedDropdown<K> extends Dropdown3<K>{
//   description: string;
//   tag: K;
// }

// let detailedItem: DetailedDropdown<string> = {
//   title: 'abc',
//   description: 'ab',
//   value: '32',
//   tag: 're'
// }

// /* Best Common Type */
// let arr = ['12', 2, true]