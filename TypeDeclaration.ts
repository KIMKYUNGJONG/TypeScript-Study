// boolean
let isDone: boolean = false;

// null
let n: null = null;

// undefined
let u: undefined = undefined;

// number
let decimal: number = 0;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// string
let color: string = 'blue';
color = 'red';
let myName: string = `Erick`; // es6 템플릿 문자열
let greeting: string = `Hello. my name is ${myName}.`; // es6 템플릿 대입문

// object
const obj: object = {};

// array
let list1: any[] = [1, 'two', true];
let list2: number[] = [1, 2, 3, 4];
let list3: Array<number> = [1, 2, 3]; // 제네릭 배열타입 (타입의 종류를 한정적으로)

// tuple : 고정된 요소수 만큼의 타입을 미리 선언 후 배열을 표현.
let tuple: [string, number];
tuple = ['hello', 10]; //true
tuple = [10, 'hello']; //error
tuple = ['hello', 10, 'bye', 0]; // error
tuple.push(true); //error

//enum : 열거형은 숫자값 집합에 이름이 정해진것.
enum Color1 {
  Red,
  Green,
  Blue
} // Color1 { Red: 0 , Green: 1, Blue: 2 }
let c1: Color1 = Color1.Green; // 1
enum Color2 {
  Red = 1,
  Green,
  Blue
} // Color2 { Red: 1, Green: 2, Blue: 3}
let c2: Color2 = Color2.Green; // 2
enum Color3 {
  Red = 1,
  Green = 2,
  Blue = 4
} // Color2 { Red: 1, Green: 2, Blue: 4}
let c3: Color3 = Color3.Blue; // 4

/*
any : 타입 추론 (type interface) 할수 없거나 타입체크가 필요없는 변수에 사용. 
var 선언된 변수처럼 어떤 타입의 값이라도 사용가능하다.
*/
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // 최종적으론 boolean으로 지정.

// void : 일반적으로 함수에서 반환될 값이 없을경우 사용.
function warnUser(): void {
  console.log('This is warning message. not return values');
}

// never : 결코 발생하지 않는 값.
function infiniteLoop(): never {
  while (true) {}
}

function error(message: string): never {
  throw Error(message);
}

// 타입은 소문자, 대문자를 구별한다.
let primitiveStr: string;
primitiveStr = 'hello'; // ok
// 원시타입 문자열에 객체를 할당.
primitiveStr = new String('hello');
/*
Type 'String' is not assignable to type 'string'.
'string' is a primitive, but 'String' is a wrapper object. Prefer using 'string' when possible.
*/

// String: String 생성자 함수로 생성된 String 래퍼 객체 타입.
let objStr: String;
objStr = 'hello'; // ok
objStr = new String('hello'); // ok

// 객체 유형 타입 선언.
const today: Date = new Date();
const elem: HTMLElement = document.getElementById('myID');
// Person 생성 객체 타입
class Person {}
const person: Person = new Person();
