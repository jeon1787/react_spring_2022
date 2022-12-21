//Java Script는 prototype based language다.
//객체의 선언 방식은 여러가지가 있다.
//참고)https://www.howdy-mj.me/javascript/prototype-and-proto

//일반객체, 객체 리터럴 : key, value 구조, 정의와 동시에 선언
var obj = {
    name: 'gen',
    getName: function(){//prototype프로퍼티는 생성자 함수로 호출할 수 있는 객체이므로, constructor를 소유하지 않은 객체는 없다.
        return this.name;
    }
}
obj.getName()

//Object 생성자함수 : 사실 객체 리터럴에는 new Object가 숨어있다.
var objconst = new Object();
objconst.name = 'ObjectConstructor'
objconst.getName = function(){
    return this.name;
}

//함수객체, 생성자함수 : 정의 따로 선언 따로, constructor함수 존재, new 예약어 사용
function Obj(){
    this.name = 'functionObject';
    this.getName = function(){//방법1) 객체 복제시 항상 function을 새로 생성
        return this.name;
    }
}
Obj.prototype.getName = function(){//방법2) prototype으로 함수를 연결 모든 객체들이 이 함수를 공유하여 한 번만 생성하므로 성능과 메모리를 절약
    return this.name;
}
var functionObj = new Obj();
functionObj.getName()

//Object.create 메소드 : 새로운 객체를 생성하지만 상속으로도 사용
var objCreate = Object.create(obj);
objCreate.name = 'Object.create'

//class : class문법, constructor함수 존재
class ClsObj{
	constructor(){
		this.name = 'classObject';
	}
	getName(){
	    return this.name;
	}
}
var clsObj = new ClsObj();
clsObj.getName();

//객체의 constructor 프로퍼티는 생성자함수와 연결
console.log(obj.constructor == obj);//false
console.log(objconst.constructor == objconst);//false
console.log(functionObj.constructor == Obj);//true <-
console.log(objCreate.constructor == obj);//false
console.log(clsObj.constructor == ClsObj);//true <-

//prototype을 가지는 것은 constructor를 가지는 함수(생성자함수, class)만이 가짐
console.log(obj.prototype);//undefined
console.log(objconst.prototype);//undefined
console.log(Obj.prototype);//true <-
console.log(objCreate.prototype);//undefined
console.log(ClsObj.prototype);//true <-
console.log(Object.prototype);

//prototype link와 prototype object
//이 둘을 통틀어 prototype이라고 부른다.
//(prototype을 가지는 객체는 언제나 함수(function)으로 생성된다.
//constructor 자격이 부여되면 new를 통해 객체를 만들어낼 수 있다.
//prototype은 함수만이 가지고 있다.
//즉, function으로 생성된 객체 -> constructor 존재 -> prototype 존재)
//생성자함수 생성시 해당 객체뿐 아니라 prototype object도 같이 생성이 된다.
//<function Person(){} 생성>
//function Person(){}                       Person Prototype Object
//prototype -> Person Prototype Object      constructor -> function Person
//                                          __proto__

//반면에 __proto__는 함수만이 아닌 모든 객체가 가짐
//__proto__는 객체가 생성될 때 조상이었던 함수의 prototype object를 가리킨다.
//예를 들어 clsObj.__proto__는 ClsObj의 prototype Object를 prototype Object의 __proto__는 다시 Object의 prototype Object를 가리킨다.
//ex)clsObj.__proto__. == ClsObj.prototype == ClsObj Prototype Object
//ex)clsObj.__proto__.__proto__ == Object.prototype == Object Prototype Object
//이렇게 __proto__프로퍼티를 통해 상위 프로토타입과 연결되어 있는 형태를 프로토타입 체인(Chain)이라고 부른다.
//우리가 상속으로 자식 객체를 사용할 때 '자식객체.__proto__(부모객체)'형식을 상속받는 것도 이런 이유이며
//자식객체에 존재하지 않는 프로퍼티를 찾아올 수 있는 것도 __proto__프로퍼티를 통해 조상 객체들에서 값을 가져오기 때문이다.