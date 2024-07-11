const _ = require('lodash');
const array = [1, 2, 3, 4];

// 배열 요소를 두 배로 만들기
const doubled = _.map(array, n => n * 2);
console.log(doubled); // [2, 4, 6, 8]





const object = { 'a': 1, 'b': 2, 'c': 3 };

// 객체의 값만 가져오기
const values = _.values(object);
console.log(values); // [1, 2, 3]




const object1 = { 'a': 1, 'b': { 'c': 3 } };
const object2 = _.cloneDeep(object1);
object2.b.c = 4;
console.log(object1.b.c); // 3 (깊은 복사로 원본 객체에 영향을 주지 않음)







const users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false }
  ];
  
  const activeUsers = _.filter(users, o => o.active);
  console.log(activeUsers); // [{ 'user': 'barney', 'age': 36, 'active': true }]

  






  const string = 'hello world';

// 첫 글자 대문자 만들기
const capitalized = _.capitalize(string);
console.log(capitalized); // 'Hello world'
