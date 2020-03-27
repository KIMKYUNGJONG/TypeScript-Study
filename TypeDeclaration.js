"use strict";
// boolean
var isDone = false;
// null
var n = null;
// undefined
var u = undefined;
// number
var decimal = 0;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// string
var color = 'blue';
color = 'red';
var myName = "Erick"; // es6 템플릿 문자열
var greeting = "Hello. my name is " + myName + "."; // es6 템플릿 대입문
// object
var obj = {};
// array
var list1 = [1, 'two', true];
var list2 = [1, 2, 3, 4];
var list3 = [1, 2, 3]; // 제네릭 배열타입 (타입의 종류를 한정적으로)
// tuple : 고정된 요소수 만큼의 타입을 미리 선언 후 배열을 표현.
var tuple;
tuple = ['hello', 10]; //true
tuple = [10, 'hello']; //error
tuple = ['hello', 10, 'bye', 0]; // error
tuple.push(true); //error
//enum : 열거형은 숫자값 집합에 이름이 정해진것.
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {})); // Color1 { Red: 0 , Green: 1, Blue: 2 }
var c1 = Color1.Green; // 1
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {})); // Color2 { Red: 1, Green: 2, Blue: 3}
var c2 = Color2.Green; // 2
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {})); // Color2 { Red: 1, Green: 2, Blue: 4}
var c3 = Color3.Blue; // 4
/*
any : 타입 추론 (type interface) 할수 없거나 타입체크가 필요없는 변수에 사용.
var 선언된 변수처럼 어떤 타입의 값이라도 사용가능하다.
*/
var notSure = 4;
notSure = 'maybe a string instead';
notSure = false; // 최종적으론 boolean으로 지정.
// void : 일반적으로 함수에서 반환될 값이 없을경우 사용.
function warnUser() {
    console.log('This is warning message. not return values');
}
// never : 결코 발생하지 않는 값.
function infiniteLoop() {
    while (true) { }
}
function error(message) {
    throw Error(message);
}
// 타입은 소문자, 대문자를 구별한다.
var primitiveStr;
primitiveStr = 'hello'; // ok
// 원시타입 문자열에 객체를 할당.
primitiveStr = new String('hello');
/*
Type 'String' is not assignable to type 'string'.
'string' is a primitive, but 'String' is a wrapper object. Prefer using 'string' when possible.
*/
// String: String 생성자 함수로 생성된 String 래퍼 객체 타입.
var objStr;
objStr = 'hello'; // ok
objStr = new String('hello'); // ok
// 객체 유형 타입 선언.
var today = new Date();
var elem = document.getElementById('myID');
// Person 생성 객체 타입
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = new Person();
