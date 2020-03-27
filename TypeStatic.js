"use strict";
var foo;
console.log(typeof foo); // undefined
foo = null;
console.log(typeof foo); // object
foo = {};
console.log(typeof foo); // object
foo = 3;
console.log(typeof foo); // number
foo = 3.15;
console.log(typeof foo); // number
foo = 'hi';
console.log(typeof foo); // string
foo = false;
console.log(typeof foo); // boolean
// 정적 타이핑을 지원함. 정적타입언어는 타입을 명시적으로 선언하며, 타입이 결정된 후에는 변경할 수 없다.
var boo, bar, baz;
boo = 'hello';
bar = 123;
baz = 'true'; // Type '"true"' is not assignable to type 'boolean'
// 정적타이핑은 함수의 매개변수와 반환값에도 사용 가능하다.
function add(x, y) {
    return x * y;
}
console.log(add(1, 2)); // 2
console.log(add('1', '2')); // Argument of type '"1"' is not assignable to parameter of type 'number'.
// 정적타이핑의 장점은 코드가독성, 예측성, 안정성의 향상. 대규모 프로젝트에 적합하다.
