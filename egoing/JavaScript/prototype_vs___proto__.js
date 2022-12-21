//※ 함수란 무엇인가
//  function Person(){}
//  var Person = new Function();
//  이 둘은 같다.
//  즉 '함수'는 js에서는 '객체'이다.
//  js의 함수들은 객체이기 때문에 property를 가질 수 있다.

//※ 메커니즘
//  1. function Person(){}이라는 객체를 생성
//  2. 그와 동시에 Person's prototype 객체가 생성(즉, 두 객체가 생성됨)
//  3. 이 두 객체는 서로를 알고 있다.(상호 참조)
//      - Person object의 prototype property -> Person's prototype object
//      - Person's prototype object의 constructor property -> Person object
function Person(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
}// -> Person object, prototype object 생성
/*
Person
------
-prototype

Person's prototype
------------------
-constructor
*/

//※ Person.prototype.sum() = function(){}의 의미
//  Person.prototype은 Person's prototype object을 가리키므로
//  Person's prototype object에 sum이라는 property를 생성하여 sum()함수를 정의한다.
Person.prototype.sum = function(){}
// -> prototype object에 sum()함수 생성
/*
Person
------
-prototype

Person's prototype
------------------
-constructor
-sum
*/

//※ 객체 생성시
//  함수 객체에서 새로운 객체를 생성할시
//  함수 객체에서 비롯된 property와 __proto__라는 property를 가진다.(prototype x)
//  이 때 __proto__는 함수 객체의 prototype이란 property를 가리키고
//  즉 __proto__ property == Person's prototype object이다.
var kim = new Person('kim', 10, 20);
/*
Person object
------
-prototype -> Person's prototype object

Person's prototype object
------------------
-constructor -> Person object
-sum

kim object
---
-__proto__ -> Person's prototype object
-name
-first
-second
*/

//※ 객체의 멤버 호출 순서
//  kim이라는 객체에서 name이라는 멤버를 호출시 kim의 property를 먼저 확인 후 __proto__의 property를 확인한다.
//  kim.sum() -> kim에는 없음 -> __proto__의 sum()을 사용
//※ Person's prototype object에도 prototype object가 존재하므로 property 탐색시 Object.prototype이 나올 때까지 탐색한다.

//※ 결론
//  __proto__
//      - 모든 객체가 가지고 있다.
//      - 하나의 link라고 할 수 있다.
//  prototype
//      - 함수 객체만 가지고 있다.
//      - 생성자를 가지는 원형을 선언할 수 있다.