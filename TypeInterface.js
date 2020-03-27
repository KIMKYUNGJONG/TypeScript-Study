"use strict";
var fooz = 123; // foo 는 number 타입 let fooz: number
fooz = 'hi'; // Type '"hi"' is not assignable to type 'number'.
// 타입선언을 생략하고 값도 할당하지 않을경우 any 타입이 된다.
var dumb;
dumb = 'dumb';
console.log(dumb); // string
dumb = 123;
console.log(dumb); // number
dumb = false;
console.log(dumb); // boolean
// 이 경우는 사용하지 않는게 좋다.
